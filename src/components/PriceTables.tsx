'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import {
    DEFAULT_PRICE_GUIDE,
    normalizePriceGuide,
    PRICE_GUIDE_COLLECTION,
    type PriceGuideData,
} from '@/types/priceGuide';

export default function PriceTables() {
    const [guide, setGuide] = useState<PriceGuideData>(DEFAULT_PRICE_GUIDE);

    useEffect(() => {
        const loadGuide = async () => {
            try {
                const snapshot = await getDocs(collection(db, PRICE_GUIDE_COLLECTION));
                const firstDoc = snapshot.docs[0];

                if (!firstDoc) {
                    return;
                }

                setGuide(normalizePriceGuide(firstDoc.data() as Partial<PriceGuideData>));
            } catch {
                setGuide(DEFAULT_PRICE_GUIDE);
            }
        };

        queueMicrotask(() => {
            loadGuide();
        });
    }, []);

    return (
        <>
            {guide.tables.map((table) => (
                <div key={table.id} className="mb-[60px] md:mb-[80px]">
                    <h3 className="mb-[20px] text-center text-2xl font-bold text-[#263C33] md:text-[30px]">
                        {table.title}
                    </h3>
                    <div className="w-full overflow-x-auto rounded-t-[10px] border-b border-[#7c7c7c]">
                        <table className="w-full min-w-[500px] border-collapse md:min-w-full">
                            <thead>
                                <tr className="bg-green-600 text-center text-base font-medium text-white md:text-[22px]">
                                    <th className="w-[34%] border-r border-[#335946] py-3 md:py-[18px]">
                                        {table.headerLeft}
                                    </th>
                                    <th className="w-[66%] py-3 md:py-[18px]">{table.headerRight}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table.rows.map((row, index) => (
                                    <tr
                                        key={row.id}
                                        className={index < table.rows.length - 1 ? 'border-b border-[#e2e2e2]' : ''}
                                    >
                                        <td className="bg-[#f4f6f4] px-2 py-4 text-center text-base font-semibold leading-tight break-keep text-[#313131] md:px-4 md:py-[22px] md:text-[20px]">
                                            {row.label}
                                        </td>
                                        <td className="px-4 py-4 text-center text-sm font-semibold break-keep text-[#244736] md:px-[40px] md:py-[22px] md:text-[18px]">
                                            {row.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}

            {guide.notices.length > 0 ? (
                <div className="mt-16 flex w-full flex-col items-center rounded-[16px] border border-[#e8ebe8] bg-[#f8f9f8] p-6 md:mt-[150px] md:rounded-none md:border-none md:bg-transparent md:p-0">
                    <div className="mb-6 flex flex-col items-center md:mb-0">
                        <img src="/images/common/i_tooth_g.svg" className="mb-0 block w-9 md:w-[44px]" alt="" />
                        <h3 className="text-xl font-bold text-[#263C33] md:mt-[0px] md:mb-[12px] md:text-[30px] md:text-[#354C43]">
                            추가 안내사항
                        </h3>
                    </div>

                    <div className="w-full space-y-4 text-left md:w-auto md:space-y-0 md:text-center">
                        {guide.notices
                            .filter((notice) => notice.trim())
                            .map((notice) => (
                                <div
                                    key={notice}
                                    className="mb-0 flex items-start justify-start gap-3 md:mb-[10px] md:items-center md:justify-center md:gap-[10px]"
                                >
                                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-green-600 md:mt-0 md:h-[6px] md:w-[6px] md:bg-[#414141]" />
                                    <p className="text-sm font-medium leading-relaxed break-keep text-[#4a5f55] md:text-[20px] md:font-semibold md:leading-normal md:text-[#354C43]">
                                        {notice}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            ) : null}
        </>
    );
}
