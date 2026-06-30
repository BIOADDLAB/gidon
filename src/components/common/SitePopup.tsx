'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { DEFAULT_POPUP_DATA, type PopupData } from '@/types/popup';

const POPUP_CLOSED_KEY = 'gidon_popup_closed';

interface PopupItem extends PopupData {
    id: string;
}

type ParsedPopupLink =
    | { kind: 'none' }
    | { kind: 'internal'; href: string }
    | { kind: 'external'; href: string; newTab: boolean };

function parsePopupLink(linkUrl?: string): ParsedPopupLink {
    const raw = (linkUrl ?? '').trim();

    if (!raw) {
        return { kind: 'none' };
    }

    if (/^https?:\/\//i.test(raw) || raw.startsWith('//')) {
        return {
            kind: 'external',
            href: raw.startsWith('//') ? `https:${raw}` : raw,
            newTab: true,
        };
    }

    if (/^mailto:/i.test(raw) || /^tel:/i.test(raw)) {
        return { kind: 'external', href: raw, newTab: false };
    }

    return { kind: 'internal', href: raw.startsWith('/') ? raw : `/${raw}` };
}

const isWithinPopupPeriod = (popup: PopupData) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (popup.startDate) {
        const startDate = new Date(popup.startDate);
        startDate.setHours(0, 0, 0, 0);

        if (today < startDate) {
            return false;
        }
    }

    if (popup.endDate) {
        const endDate = new Date(popup.endDate);
        endDate.setHours(23, 59, 59, 999);

        if (today > endDate) {
            return false;
        }
    }

    return true;
};

const getTodayKey = () => {
    return new Date().toISOString().slice(0, 10);
};

export default function SitePopup() {
    const [items, setItems] = useState<PopupItem[]>([]);
    const [selected, setSelected] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const loadPopup = async () => {
            if (localStorage.getItem(POPUP_CLOSED_KEY) === getTodayKey()) {
                return;
            }

            try {
                const popupSnapshot = await getDocs(collection(db, 'popup'));
                const activePopups = popupSnapshot.docs
                    .map((popupDoc) => ({
                        id: popupDoc.id,
                        ...DEFAULT_POPUP_DATA,
                        ...popupDoc.data(),
                    }) as PopupItem)
                    .filter((nextPopup) => {
                        const hasContent = Boolean(nextPopup.title || nextPopup.content || nextPopup.imageUrl);

                        return nextPopup.enabled && hasContent && isWithinPopupPeriod(nextPopup);
                    });

                if (activePopups.length === 0) {
                    return;
                }

                setItems(activePopups);
                setIsOpen(true);
            } catch {
                setItems([]);
            }
        };

        loadPopup();
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    const dismissToday = () => {
        localStorage.setItem(POPUP_CLOSED_KEY, getTodayKey());
        setIsOpen(false);
    };

    const safeItems = useMemo(() => items.filter((item) => item.imageUrl.trim() !== ''), [items]);
    const safeSelected = Math.min(selected, Math.max(0, safeItems.length - 1));
    const current = safeItems[safeSelected];

    if (!current || !isOpen) {
        return null;
    }

    const parsed = parsePopupLink(current.linkUrl);
    const imageElement = (
        <div className="relative h-full w-full">
            <Image
                src={current.imageUrl}
                alt={current.title || '팝업'}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain"
                unoptimized
            />
        </div>
    );

    const linkedImage =
        parsed.kind === 'none' ? (
            imageElement
        ) : parsed.kind === 'internal' ? (
            <Link href={parsed.href} className="block h-full w-full" aria-label={`${current.title || '팝업'} 이동`}>
                {imageElement}
            </Link>
        ) : (
            <a
                href={parsed.href}
                className="block h-full w-full"
                aria-label={`${current.title || '팝업'} 이동`}
                {...(parsed.newTab ? { target: '_blank', rel: 'noopener noreferrer' as const } : {})}
            >
                {imageElement}
            </a>
        );

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
            <div className="relative max-h-[92vh] w-auto max-w-[calc(100vw-2rem)]">
                <div className="relative flex h-[88vh] w-fit max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
                    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden md:flex-row">
                        <div className="flex min-h-0 shrink-0 items-center justify-center overflow-hidden bg-white">
                            <div className="relative h-full w-[min(78vw,calc((88vh-52px)*0.78))] min-w-[320px]">
                                {linkedImage}
                            </div>
                        </div>

                        {safeItems.length > 1 && (
                            <nav
                                className="max-h-[180px] overflow-y-auto border-t border-line md:max-h-[calc(88vh-52px)] md:w-[220px] md:border-l md:border-t-0"
                                aria-label="팝업 목록"
                            >
                                {safeItems.map((item, idx) => {
                                    const isActive = idx === safeSelected;

                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => setSelected(idx)}
                                            className={`block w-full border-b border-line px-4 py-4 text-left text-sm font-bold leading-snug transition-colors last:border-b-0 ${
                                                isActive
                                                    ? 'bg-green-600 text-white'
                                                    : 'bg-white text-ink-900 hover:bg-paper'
                                            }`}
                                        >
                                            {item.title || '제목 없음'}
                                        </button>
                                    );
                                })}
                            </nav>
                        )}
                    </div>

                    <div className="flex h-[52px] shrink-0 items-stretch border-t border-black/10 bg-[#2d2d2d] text-white">
                        <button
                            type="button"
                            onClick={dismissToday}
                            className="flex flex-1 items-center justify-center text-sm font-medium transition-colors hover:bg-black/20"
                        >
                            오늘 하루 그만 보기
                        </button>
                        <div className="w-px shrink-0 self-stretch bg-white/25" aria-hidden />
                        <button
                            type="button"
                            onClick={closePopup}
                            className="flex flex-1 items-center justify-center text-sm font-medium transition-colors hover:bg-black/20"
                        >
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
