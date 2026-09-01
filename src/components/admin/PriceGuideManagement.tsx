'use client';

import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import {
    DEFAULT_PRICE_GUIDE,
    normalizePriceGuide,
    PRICE_GUIDE_COLLECTION,
    type PriceGuideData,
    type PriceTable,
} from '@/types/priceGuide';

function createId(prefix: string) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function PriceGuideManagement() {
    const [docId, setDocId] = useState('');
    const [guide, setGuide] = useState<PriceGuideData>(DEFAULT_PRICE_GUIDE);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    const loadGuide = async () => {
        try {
            const snapshot = await getDocs(collection(db, PRICE_GUIDE_COLLECTION));
            const firstDoc = snapshot.docs[0];

            if (firstDoc) {
                setDocId(firstDoc.id);
                setGuide(normalizePriceGuide(firstDoc.data() as Partial<PriceGuideData>));
            }
        } catch {
            setMessage('비급여진료비 안내를 불러오지 못했습니다.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        queueMicrotask(() => {
            loadGuide();
        });
    }, []);

    const updateTable = (tableId: string, patch: Partial<PriceTable>) => {
        setGuide((current) => ({
            ...current,
            tables: current.tables.map((table) => (table.id === tableId ? { ...table, ...patch } : table)),
        }));
    };

    const updateRow = (tableId: string, rowId: string, field: 'label' | 'value', value: string) => {
        setGuide((current) => ({
            ...current,
            tables: current.tables.map((table) =>
                table.id === tableId
                    ? {
                          ...table,
                          rows: table.rows.map((row) => (row.id === rowId ? { ...row, [field]: value } : row)),
                      }
                    : table,
            ),
        }));
    };

    const addTable = () => {
        setGuide((current) => ({
            ...current,
            tables: [
                ...current.tables,
                {
                    id: createId('table'),
                    title: '새 수가표',
                    headerLeft: '항목',
                    headerRight: '가격',
                    rows: [{ id: createId('row'), label: '', value: '' }],
                },
            ],
        }));
    };

    const removeTable = (tableId: string) => {
        setGuide((current) => ({
            ...current,
            tables: current.tables.filter((table) => table.id !== tableId),
        }));
    };

    const addRow = (tableId: string) => {
        setGuide((current) => ({
            ...current,
            tables: current.tables.map((table) =>
                table.id === tableId
                    ? { ...table, rows: [...table.rows, { id: createId('row'), label: '', value: '' }] }
                    : table,
            ),
        }));
    };

    const removeRow = (tableId: string, rowId: string) => {
        setGuide((current) => ({
            ...current,
            tables: current.tables.map((table) =>
                table.id === tableId ? { ...table, rows: table.rows.filter((row) => row.id !== rowId) } : table,
            ),
        }));
    };

    const moveTable = (tableId: string, direction: -1 | 1) => {
        setGuide((current) => {
            const index = current.tables.findIndex((table) => table.id === tableId);
            const nextIndex = index + direction;

            if (index < 0 || nextIndex < 0 || nextIndex >= current.tables.length) {
                return current;
            }

            const tables = [...current.tables];
            const [moved] = tables.splice(index, 1);
            tables.splice(nextIndex, 0, moved);
            return { ...current, tables };
        });
    };

    const updateNotice = (index: number, value: string) => {
        setGuide((current) => ({
            ...current,
            notices: current.notices.map((notice, noticeIndex) => (noticeIndex === index ? value : notice)),
        }));
    };

    const addNotice = () => {
        setGuide((current) => ({ ...current, notices: [...current.notices, ''] }));
    };

    const removeNotice = (index: number) => {
        setGuide((current) => ({
            ...current,
            notices: current.notices.filter((_, noticeIndex) => noticeIndex !== index),
        }));
    };

    const handleSave = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSaving(true);
        setMessage('');

        const payload = {
            tables: guide.tables,
            notices: guide.notices.filter((notice) => notice.trim()),
            updatedAt: serverTimestamp(),
        };

        try {
            if (docId) {
                await updateDoc(doc(db, PRICE_GUIDE_COLLECTION, docId), payload);
            } else {
                const createdDoc = await addDoc(collection(db, PRICE_GUIDE_COLLECTION), {
                    ...payload,
                    createdAt: serverTimestamp(),
                });
                setDocId(createdDoc.id);
            }

            setMessage('비급여진료비 안내가 저장되었습니다. 가격안내 페이지에 바로 반영됩니다.');
        } catch {
            setMessage('저장 중 오류가 발생했습니다. Firestore 권한을 확인해 주세요.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <section className="mb-10 rounded-3xl bg-white p-7 shadow-sm">
            <div className="mb-6">
                <p className="text-sm font-semibold text-green-600">Non-covered Fees</p>
                <h2 className="mt-1 text-xl font-bold text-ink-900">비급여진료비 안내</h2>
                <p className="mt-2 text-sm text-ink-500">
                    표 제목, 항목, 금액을 추가·수정할 수 있습니다. 저장하면 `/price` 가격안내 페이지에 반영됩니다.
                </p>
            </div>

            <form className="grid gap-8" onSubmit={handleSave}>
                {guide.tables.map((table, tableIndex) => (
                    <div key={table.id} className="rounded-2xl border border-line p-5">
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                            <h3 className="text-base font-bold text-ink-900">표 {tableIndex + 1}</h3>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    className="rounded-lg border border-line px-3 py-1.5 text-xs font-bold text-ink-500"
                                    onClick={() => moveTable(table.id, -1)}
                                >
                                    위로
                                </button>
                                <button
                                    type="button"
                                    className="rounded-lg border border-line px-3 py-1.5 text-xs font-bold text-ink-500"
                                    onClick={() => moveTable(table.id, 1)}
                                >
                                    아래로
                                </button>
                                <button
                                    type="button"
                                    className="rounded-lg px-3 py-1.5 text-xs font-bold text-red-500"
                                    onClick={() => removeTable(table.id)}
                                >
                                    표 삭제
                                </button>
                            </div>
                        </div>

                        <div className="mb-4 grid gap-3 md:grid-cols-3">
                            <label className="grid gap-1 text-sm font-bold text-ink-900">
                                표 제목
                                <input
                                    type="text"
                                    value={table.title}
                                    onChange={(event) => updateTable(table.id, { title: event.target.value })}
                                    className="h-11 rounded-xl border border-line px-4 text-sm font-medium outline-none focus:border-green-600"
                                />
                            </label>
                            <label className="grid gap-1 text-sm font-bold text-ink-900">
                                왼쪽 칸 제목
                                <input
                                    type="text"
                                    value={table.headerLeft}
                                    onChange={(event) => updateTable(table.id, { headerLeft: event.target.value })}
                                    className="h-11 rounded-xl border border-line px-4 text-sm font-medium outline-none focus:border-green-600"
                                />
                            </label>
                            <label className="grid gap-1 text-sm font-bold text-ink-900">
                                오른쪽 칸 제목
                                <input
                                    type="text"
                                    value={table.headerRight}
                                    onChange={(event) => updateTable(table.id, { headerRight: event.target.value })}
                                    className="h-11 rounded-xl border border-line px-4 text-sm font-medium outline-none focus:border-green-600"
                                />
                            </label>
                        </div>

                        <div className="grid gap-2">
                            {table.rows.map((row) => (
                                <div key={row.id} className="grid gap-2 md:grid-cols-[1fr_1fr_auto]">
                                    <input
                                        type="text"
                                        value={row.label}
                                        placeholder="항목 (예: 오스템 임플란트)"
                                        onChange={(event) => updateRow(table.id, row.id, 'label', event.target.value)}
                                        className="h-11 rounded-xl border border-line px-4 text-sm font-medium outline-none focus:border-green-600"
                                    />
                                    <input
                                        type="text"
                                        value={row.value}
                                        placeholder="가격 또는 내용 (예: 55만원)"
                                        onChange={(event) => updateRow(table.id, row.id, 'value', event.target.value)}
                                        className="h-11 rounded-xl border border-line px-4 text-sm font-medium outline-none focus:border-green-600"
                                    />
                                    <button
                                        type="button"
                                        className="h-11 rounded-xl px-3 text-sm font-bold text-red-500"
                                        onClick={() => removeRow(table.id, row.id)}
                                    >
                                        삭제
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="mt-3 text-sm font-bold text-green-600"
                            onClick={() => addRow(table.id)}
                        >
                            + 항목 추가
                        </button>
                    </div>
                ))}

                <button
                    type="button"
                    className="justify-self-start rounded-full border border-green-600 px-5 py-2.5 text-sm font-bold text-green-600"
                    onClick={addTable}
                >
                    + 수가표 추가
                </button>

                <div className="rounded-2xl border border-line p-5">
                    <h3 className="mb-4 text-base font-bold text-ink-900">추가 안내사항</h3>
                    <div className="grid gap-2">
                        {guide.notices.map((notice, index) => (
                            <div key={`notice-${index}`} className="grid gap-2 md:grid-cols-[1fr_auto]">
                                <input
                                    type="text"
                                    value={notice}
                                    onChange={(event) => updateNotice(index, event.target.value)}
                                    className="h-11 rounded-xl border border-line px-4 text-sm font-medium outline-none focus:border-green-600"
                                />
                                <button
                                    type="button"
                                    className="h-11 rounded-xl px-3 text-sm font-bold text-red-500"
                                    onClick={() => removeNotice(index)}
                                >
                                    삭제
                                </button>
                            </div>
                        ))}
                    </div>
                    <button type="button" className="mt-3 text-sm font-bold text-green-600" onClick={addNotice}>
                        + 안내 문장 추가
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={loading || saving}
                    className="justify-self-end rounded-2xl bg-[#242B3D] px-7 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-green-900 disabled:opacity-60"
                >
                    {saving ? '저장 중...' : '수가표 저장'}
                </button>
            </form>

            {message ? <p className="mt-4 text-sm font-bold text-ink-500">{message}</p> : null}
        </section>
    );
}
