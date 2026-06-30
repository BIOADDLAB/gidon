'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { DEFAULT_COLUMN_DATA, type ColumnData } from '@/types/column';

interface ColumnDetailProps {
    columnId: string;
}

export default function ColumnDetail({ columnId }: ColumnDetailProps) {
    const [column, setColumn] = useState<ColumnData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadColumn = async () => {
            try {
                const columnSnapshot = await getDoc(doc(db, 'column', columnId));

                if (!columnSnapshot.exists()) {
                    setColumn(null);
                    return;
                }

                const nextColumn = { ...DEFAULT_COLUMN_DATA, ...columnSnapshot.data() } as ColumnData;
                setColumn(nextColumn.published ? nextColumn : null);
            } catch {
                setColumn(null);
            } finally {
                setLoading(false);
            }
        };

        queueMicrotask(() => {
            loadColumn();
        });
    }, [columnId]);

    if (loading) {
        return (
            <section className="bg-white px-4 py-16 md:py-[110px]">
                <div className="mx-auto max-w-[900px] rounded-[24px] bg-[#FAF9F6] px-6 py-12 text-center text-sm font-bold text-ink-500">
                    칼럼을 불러오는 중입니다.
                </div>
            </section>
        );
    }

    if (!column) {
        return (
            <section className="bg-white px-4 py-16 md:py-[110px]">
                <div className="mx-auto max-w-[900px] rounded-[24px] bg-[#FAF9F6] px-6 py-12 text-center">
                    <p className="text-sm font-bold text-ink-500">칼럼을 찾을 수 없습니다.</p>
                    <Link href="/column" className="mt-5 inline-block text-sm font-bold text-green-600">
                        목록으로 돌아가기
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-white px-4 py-16 md:py-[110px]">
            <article className="mx-auto max-w-[900px]">
                <div className="mb-10 border-b border-line pb-8 text-center">
                    <span className="inline-block rounded-full bg-green-600 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white">
                        {column.category || 'Column'}
                    </span>
                    <h1 className="mt-6 break-keep text-[30px] font-bold leading-[1.35] text-green-900 md:text-[44px]">
                        {column.title}
                    </h1>
                    {column.summary && (
                        <p className="mx-auto mt-5 max-w-[720px] break-keep text-[16px] font-medium leading-[1.8] text-ink-500 md:text-[18px]">
                            {column.summary}
                        </p>
                    )}
                </div>

                {column.thumbnailUrl && (
                    <div
                        className="mb-12 aspect-[16/9] rounded-[28px] bg-[#E8E1D3] bg-cover bg-center"
                        style={{ backgroundImage: `url(${column.thumbnailUrl})` }}
                    />
                )}

                <div
                    className="column-content break-keep text-[17px] leading-9 text-ink-900 [&_a]:text-green-600 [&_a]:underline [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-green-600 [&_blockquote]:bg-paper [&_blockquote]:py-4 [&_blockquote]:pl-5 [&_h1]:my-7 [&_h1]:text-4xl [&_h1]:font-bold [&_h2]:my-6 [&_h2]:text-2xl [&_h2]:font-bold [&_img]:my-8 [&_img]:max-h-[560px] [&_img]:w-full [&_img]:rounded-2xl [&_img]:object-contain [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:pl-7 [&_p]:my-4 [&_ul]:my-5 [&_ul]:list-disc [&_ul]:pl-7"
                    dangerouslySetInnerHTML={{ __html: column.contentHtml }}
                />

                <div className="mt-16 border-t border-line pt-8 text-center">
                    <Link href="/column" className="inline-block rounded-full bg-green-600 px-7 py-3 text-sm font-bold text-white">
                        목록으로 돌아가기
                    </Link>
                </div>
            </article>
        </section>
    );
}
