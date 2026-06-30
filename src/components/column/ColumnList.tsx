'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { DEFAULT_COLUMN_DATA, type ColumnData } from '@/types/column';

interface ColumnPost extends ColumnData {
    id: string;
}

export default function ColumnList() {
    const [columns, setColumns] = useState<ColumnPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadColumns = async () => {
            try {
                const columnSnapshot = await getDocs(collection(db, 'column'));
                const nextColumns = columnSnapshot.docs
                    .map((columnDoc) => ({
                        id: columnDoc.id,
                        ...DEFAULT_COLUMN_DATA,
                        ...columnDoc.data(),
                    }) as ColumnPost)
                    .filter((column) => column.published)
                    .slice(0, 6);

                setColumns(nextColumns);
            } catch {
                setColumns([]);
            } finally {
                setLoading(false);
            }
        };

        queueMicrotask(() => {
            loadColumns();
        });
    }, []);

    if (loading) {
        return (
            <div className="mt-12 rounded-[24px] bg-[#FAF9F6] px-6 py-12 text-center text-sm font-bold text-ink-500 md:mt-20">
                칼럼을 불러오는 중입니다.
            </div>
        );
    }

    if (columns.length === 0) {
        return (
            <div className="mt-12 rounded-[24px] bg-[#FAF9F6] px-6 py-12 text-center text-sm font-bold text-ink-500 md:mt-20">
                등록된 칼럼이 없습니다.
            </div>
        );
    }

    return (
        <div className="mt-12 grid gap-x-6 gap-y-10 md:mt-20 md:grid-cols-3">
            {columns.map((post) => (
                <Link
                    key={post.id}
                    href={`/column/${post.id}`}
                    className="overflow-hidden rounded-[24px] border border-line bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                    {post.thumbnailUrl ? (
                        <div
                            className="aspect-[4/3] bg-[#E8E1D3] bg-cover bg-center"
                            style={{ backgroundImage: `url(${post.thumbnailUrl})` }}
                        />
                    ) : (
                        <div className="flex aspect-[4/3] items-center justify-center bg-[#E8E1D3]">
                            <span className="font-accent text-[20px] text-green-600">GIDEON</span>
                        </div>
                    )}

                    <div className="flex min-h-[230px] flex-col justify-between p-7">
                        <div>
                            <span className="inline-block rounded-full bg-green-600 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white">
                                {post.category || 'Column'}
                            </span>
                            <h3 className="mt-5 break-keep text-[21px] font-bold leading-[1.45] text-green-900 md:text-[23px]">
                                {post.title || '제목 없음'}
                            </h3>
                            <p className="mt-4 line-clamp-3 break-keep text-[15px] font-medium leading-[1.75] text-ink-500">
                                {post.summary}
                            </p>
                        </div>

                        <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
                            <span className="text-sm font-bold text-ink-500">기드온칼럼</span>
                            <span className="text-sm font-bold text-green-600">자세히 보기</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
