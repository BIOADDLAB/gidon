'use client';

import { useEffect, useRef, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { DEFAULT_MAIN_STATS, type MainStatsData } from '@/types/mainStats';

const ANIMATION_DURATION = 1400;

const formatNumber = (value: number) => {
    return Math.round(value).toLocaleString('ko-KR');
};

function CountUpNumber({ value }: { value: number }) {
    const [displayValue, setDisplayValue] = useState(0);
    const numberRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const element = numberRef.current;

        if (!element) {
            return;
        }

        let animationFrame = 0;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                const startedAt = performance.now();

                const animate = (now: number) => {
                    const progress = Math.min((now - startedAt) / ANIMATION_DURATION, 1);
                    const easedProgress = 1 - Math.pow(1 - progress, 3);

                    setDisplayValue(value * easedProgress);

                    if (progress < 1) {
                        animationFrame = requestAnimationFrame(animate);
                    }
                };

                animationFrame = requestAnimationFrame(animate);
                observer.disconnect();
            },
            { threshold: 0.35 },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(animationFrame);
        };
    }, [value]);

    return <span ref={numberRef}>{formatNumber(displayValue)}</span>;
}

export default function PhilosophyStats() {
    const [stats, setStats] = useState<MainStatsData>(DEFAULT_MAIN_STATS);

    useEffect(() => {
        const loadStats = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'main'));
                const firstDoc = snapshot.docs[0];

                if (!firstDoc) {
                    return;
                }

                const data = firstDoc.data();
                setStats({
                    patients: Number(data.patients ?? 0),
                    implants: Number(data.implants ?? 0),
                });
            } catch {
                setStats(DEFAULT_MAIN_STATS);
            }
        };

        queueMicrotask(() => {
            loadStats();
        });
    }, []);

    return (
        <div className="mx-auto mt-10 grid max-w-[760px] grid-cols-1 gap-4 px-4 md:mt-12 md:grid-cols-2">
            <div className="rounded-[28px] border border-green-600/20 bg-white/80 px-6 py-7 text-center shadow-sm backdrop-blur-sm">
                <p className="text-sm font-semibold text-green-600 md:text-base">합리적인 임플란트 치료 환자분</p>
                <strong className="mt-3 block font-accent text-[44px] font-normal leading-none text-green-900 md:text-[58px]">
                    <CountUpNumber value={stats.patients} />
                </strong>
                <span className="mt-2 block text-sm font-bold text-ink-500">명</span>
            </div>
            <div className="rounded-[28px] border border-green-600/20 bg-white/80 px-6 py-7 text-center shadow-sm backdrop-blur-sm">
                <p className="text-sm font-semibold text-green-600 md:text-base">임플란트 식립 개수</p>
                <strong className="mt-3 block font-accent text-[44px] font-normal leading-none text-green-900 md:text-[58px]">
                    <CountUpNumber value={stats.implants} />
                </strong>
                <span className="mt-2 block text-sm font-bold text-ink-500">개</span>
            </div>
        </div>
    );
}
