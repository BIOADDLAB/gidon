'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';
import { DEFAULT_MAIN_STATS, type MainStatsData } from '@/types/mainStats';
import { DEFAULT_POPUP_DATA, type PopupData } from '@/types/popup';

interface AdminPopup extends PopupData {
    id: string;
}

export default function AdminDashboard() {
    return (
        <div className="mx-auto w-full max-w-7xl px-6 py-10">
            <div className="mb-8">
                <p className="text-sm font-semibold text-green-600">GIDEON ADMIN</p>
                <h1 className="mt-1 text-3xl font-bold text-ink-900">관리자</h1>
            </div>

            <MainStatsManagement />

            <div className="mb-8 border-b border-line">
                <nav className="flex gap-12 text-sm font-bold text-ink-500">
                    <span className="border-b-2 border-ink-900 px-1 pb-4 text-ink-900">
                        팝업 공지
                    </span>
                </nav>
            </div>

            <PopupManagement />
        </div>
    );
}

function MainStatsManagement() {
    const [statsDocId, setStatsDocId] = useState('');
    const [stats, setStats] = useState<MainStatsData>(DEFAULT_MAIN_STATS);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    const loadStats = async () => {
        try {
            const snapshot = await getDocs(collection(db, 'main'));
            const firstDoc = snapshot.docs[0];

            if (firstDoc) {
                const data = firstDoc.data();
                setStatsDocId(firstDoc.id);
                setStats({
                    patients: Number(data.patients ?? 0),
                    implants: Number(data.implants ?? 0),
                });
            }
        } catch {
            setMessage('메인 숫자 정보를 불러오지 못했습니다.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        queueMicrotask(() => {
            loadStats();
        });
    }, []);

    const updateStatsField = (field: keyof MainStatsData, value: string) => {
        const numericValue = Number(value.replace(/[^0-9]/g, ''));
        setStats((current) => ({ ...current, [field]: Number.isNaN(numericValue) ? 0 : numericValue }));
    };

    const handleSaveStats = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSaving(true);
        setMessage('');

        try {
            const nextStats = {
                ...stats,
                updatedAt: serverTimestamp(),
            };

            if (statsDocId) {
                await updateDoc(doc(db, 'main', statsDocId), nextStats);
            } else {
                const createdDoc = await addDoc(collection(db, 'main'), {
                    ...nextStats,
                    createdAt: serverTimestamp(),
                });
                setStatsDocId(createdDoc.id);
            }

            setMessage('메인 숫자가 저장되었습니다.');
        } catch {
            setMessage('저장 중 오류가 발생했습니다. Firestore 권한을 확인해 주세요.');
        } finally {
            setSaving(false);
        }
    };

    return (
        <section className="mb-10 rounded-3xl bg-white p-7 shadow-sm">
            <div className="mb-6">
                <p className="text-sm font-semibold text-green-600">Main Numbers</p>
                <h2 className="mt-1 text-xl font-bold text-ink-900">메인 철학 부분 숫자 관리</h2>
                <p className="mt-2 text-sm text-ink-500">
                    철학 영역에 노출되는 환자분 명수와 임플란트 식립 개수를 수정합니다.
                </p>
            </div>

            <form className="grid gap-5 md:grid-cols-[1fr_1fr_auto]" onSubmit={handleSaveStats}>
                <label className="grid gap-2 text-sm font-bold text-ink-900">
                    치료 환자분 명수
                    <input
                        type="text"
                        inputMode="numeric"
                        value={stats.patients.toLocaleString('ko-KR')}
                        onChange={(event) => updateStatsField('patients', event.target.value)}
                        className="h-12 rounded-2xl border border-line px-5 text-base font-medium outline-none transition-colors focus:border-green-600"
                    />
                </label>

                <label className="grid gap-2 text-sm font-bold text-ink-900">
                    임플란트 식립 개수
                    <input
                        type="text"
                        inputMode="numeric"
                        value={stats.implants.toLocaleString('ko-KR')}
                        onChange={(event) => updateStatsField('implants', event.target.value)}
                        className="h-12 rounded-2xl border border-line px-5 text-base font-medium outline-none transition-colors focus:border-green-600"
                    />
                </label>

                <button
                    type="submit"
                    disabled={loading || saving}
                    className="self-end rounded-2xl bg-[#242B3D] px-7 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-green-900 disabled:opacity-60"
                >
                    {saving ? '저장 중...' : '숫자 저장'}
                </button>
            </form>

            {message && <p className="mt-4 text-sm font-bold text-ink-500">{message}</p>}
        </section>
    );
}

function PopupManagement() {
    const [popups, setPopups] = useState<AdminPopup[]>([]);
    const [formPopup, setFormPopup] = useState<PopupData>(DEFAULT_POPUP_DATA);
    const [editingPopup, setEditingPopup] = useState<AdminPopup | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const loadPopups = async () => {
        try {
            const popupSnapshot = await getDocs(collection(db, 'popup'));
            const nextPopups = popupSnapshot.docs.map((popupDoc) => ({
                id: popupDoc.id,
                ...DEFAULT_POPUP_DATA,
                ...popupDoc.data(),
            })) as AdminPopup[];

            setPopups(nextPopups);
        } catch {
            setStatusMessage('팝업 목록을 불러오지 못했습니다. Firebase 설정을 확인해 주세요.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        queueMicrotask(() => {
            loadPopups();
        });
    }, []);

    const updatePopupField = (field: keyof PopupData, value: string | boolean) => {
        setFormPopup((current) => ({ ...current, [field]: value }));
    };

    const resetImagePreview = () => {
        if (imagePreviewUrl.startsWith('blob:')) {
            URL.revokeObjectURL(imagePreviewUrl);
        }
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;
        resetImagePreview();
        setImageFile(file);

        if (file) {
            setImagePreviewUrl(URL.createObjectURL(file));
        }
    };

    const openCreateModal = () => {
        resetImagePreview();
        setEditingPopup(null);
        setFormPopup(DEFAULT_POPUP_DATA);
        setImageFile(null);
        setImagePreviewUrl('');
        setStatusMessage('');
        setIsModalOpen(true);
    };

    const openEditModal = (popup: AdminPopup) => {
        resetImagePreview();
        setEditingPopup(popup);
        setFormPopup(popup);
        setImageFile(null);
        setImagePreviewUrl(popup.imageUrl);
        setStatusMessage('');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        resetImagePreview();
        setIsModalOpen(false);
        setImageFile(null);
        setImagePreviewUrl('');
    };

    const handleSave = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSaving(true);
        setStatusMessage('');

        try {
            let imageUrl = formPopup.imageUrl;

            if (imageFile) {
                const safeFileName = imageFile.name.replace(/[^a-zA-Z0-9._-]/g, '_');
                const imageRef = ref(storage, `popup/${Date.now()}-${safeFileName}`);
                const uploadResult = await uploadBytes(imageRef, imageFile);
                imageUrl = await getDownloadURL(uploadResult.ref);
            }

            const nextPopup = {
                ...formPopup,
                imageUrl,
                updatedAt: serverTimestamp(),
            };

            if (editingPopup) {
                await updateDoc(doc(db, 'popup', editingPopup.id), nextPopup);
            } else {
                await addDoc(collection(db, 'popup'), {
                    ...nextPopup,
                    createdAt: serverTimestamp(),
                });
            }

            await loadPopups();
            closeModal();
            setStatusMessage('팝업 정보가 저장되었습니다.');
        } catch {
            setStatusMessage('저장 중 오류가 발생했습니다. Firestore/Storage 권한을 확인해 주세요.');
        } finally {
            setSaving(false);
        }
    };

    const handleToggleEnabled = async (popup: AdminPopup) => {
        await updateDoc(doc(db, 'popup', popup.id), {
            enabled: !popup.enabled,
            updatedAt: serverTimestamp(),
        });
        await loadPopups();
    };

    const handleDelete = async (popup: AdminPopup) => {
        const confirmed = window.confirm(`"${popup.title || '제목 없음'}" 팝업을 삭제할까요?`);

        if (!confirmed) {
            return;
        }

        await deleteDoc(doc(db, 'popup', popup.id));
        await loadPopups();
    };

    return (
        <>
            <section>
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-ink-900">팝업 목록</h2>
                    <button
                        type="button"
                        className="rounded-full bg-[#242B3D] px-5 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-green-900"
                        onClick={openCreateModal}
                    >
                        + 새 팝업 등록
                    </button>
                </div>

                {statusMessage && (
                    <p className="mb-4 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-ink-500 shadow-sm">
                        {statusMessage}
                    </p>
                )}

                <div className="grid gap-5">
                    {loading ? (
                        <div className="rounded-3xl bg-white p-8 text-sm font-bold text-ink-500 shadow-sm">
                            팝업 목록을 불러오는 중입니다.
                        </div>
                    ) : popups.length === 0 ? (
                        <div className="rounded-3xl bg-white p-8 text-sm font-bold text-ink-500 shadow-sm">
                            등록된 팝업이 없습니다.
                        </div>
                    ) : (
                        popups.map((popup) => (
                            <div
                                key={popup.id}
                                className="flex items-center justify-between gap-6 rounded-3xl bg-white p-6 shadow-sm"
                            >
                                <div className="flex min-w-0 items-center gap-5">
                                    <div
                                        className="h-20 w-20 shrink-0 rounded-2xl bg-[#E8E1D3] bg-cover bg-center"
                                        style={
                                            popup.imageUrl ? { backgroundImage: `url(${popup.imageUrl})` } : undefined
                                        }
                                    />
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`h-2.5 w-2.5 rounded-full ${
                                                    popup.enabled ? 'bg-green-600' : 'bg-gray-300'
                                                }`}
                                            />
                                            <h3 className="truncate text-lg font-bold text-ink-900">
                                                {popup.title || '제목 없음'}
                                            </h3>
                                        </div>
                                        <p className="mt-2 truncate text-sm font-semibold text-ink-500">
                                            {popup.linkUrl || '링크 없음'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex shrink-0 items-center gap-3">
                                    <button
                                        type="button"
                                        className="rounded-lg border border-ink-500 px-4 py-2 text-sm font-bold text-ink-900 transition-colors hover:bg-paper"
                                        onClick={() => handleToggleEnabled(popup)}
                                    >
                                        {popup.enabled ? '숨기기' : '보이기'}
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-lg px-4 py-2 text-sm font-bold text-ink-500 transition-colors hover:bg-paper hover:text-ink-900"
                                        onClick={() => openEditModal(popup)}
                                    >
                                        수정
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-lg px-4 py-2 text-sm font-bold text-red-500 transition-colors hover:bg-red-50"
                                        onClick={() => handleDelete(popup)}
                                    >
                                        삭제
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 px-5 py-5">
                    <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-7 shadow-2xl md:p-9">
                        <h2 className="mb-6 text-3xl font-bold text-ink-900">팝업 공지 설정</h2>

                        <form className="grid gap-5" onSubmit={handleSave}>
                            <label className="grid gap-3 text-base font-bold text-ink-900">
                                팝업 제목
                                <input
                                    type="text"
                                    value={formPopup.title}
                                    onChange={(event) => updatePopupField('title', event.target.value)}
                                    className="h-12 rounded-2xl border border-line px-5 text-base font-medium outline-none transition-colors focus:border-green-600"
                                />
                            </label>

                            <label className="grid gap-3 text-base font-bold text-ink-900">
                                이미지 (실제 파일 업로드)
                                {imagePreviewUrl && (
                                    <div
                                        className="h-40 rounded-2xl bg-[#E8E1D3] bg-contain bg-center bg-no-repeat"
                                        style={{ backgroundImage: `url(${imagePreviewUrl})` }}
                                    />
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="text-sm font-medium file:mr-4 file:rounded-full file:border-0 file:bg-gray-100 file:px-5 file:py-3 file:text-sm file:font-bold file:text-ink-900"
                                />
                            </label>

                            <label className="grid gap-3 text-base font-bold text-ink-900">
                                클릭 시 이동 링크 (선택)
                                <input
                                    type="text"
                                    value={formPopup.linkUrl}
                                    onChange={(event) => updatePopupField('linkUrl', event.target.value)}
                                    placeholder="https://..."
                                    className="h-12 rounded-2xl border border-line px-5 text-base font-medium outline-none transition-colors focus:border-green-600"
                                />
                            </label>

                            <label className="flex w-fit cursor-pointer items-center gap-4 text-base font-bold text-ink-900">
                                <span
                                    className={`relative h-8 w-14 rounded-full transition-colors ${
                                        formPopup.enabled ? 'bg-[#242B3D]' : 'bg-gray-200'
                                    }`}
                                >
                                    <input
                                        type="checkbox"
                                        className="sr-only"
                                        checked={formPopup.enabled}
                                        onChange={(event) => updatePopupField('enabled', event.target.checked)}
                                    />
                                    <span
                                        className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-transform ${
                                            formPopup.enabled ? 'translate-x-7' : 'translate-x-1'
                                        }`}
                                    />
                                </span>
                                사용 여부
                            </label>

                            <div className="mt-4 flex items-center justify-end gap-5">
                                <button
                                    type="button"
                                    className="px-6 py-3 text-base font-bold text-ink-500/60"
                                    onClick={closeModal}
                                >
                                    취소
                                </button>
                                <button
                                    type="submit"
                                    disabled={saving}
                                    className="min-w-[180px] rounded-2xl bg-[#242B3D] px-8 py-4 text-base font-bold text-white shadow-xl transition-colors hover:bg-green-900 disabled:opacity-60"
                                >
                                    {saving ? '저장 중...' : '저장하기'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
