'use client';

import Image from 'next/image';
interface CareSectionProps {
    title?: string;
    descriptionList?: string[];
}

export default function CareSection({
    title = '주의사항 및 관리방법',
    descriptionList = [
        '치료 후 1시간 동안은 처방된 거즈를 꽉 물어주세요',
        '침이나 피는 뱉지 마시고 그대로 삼켜주세요',
        '치료된 잇몸 부위는 손가락이나 혀로 대지 말아주세요',
        '자극적인 음식 대신 식사는 부드러운 죽으로 해주세요',
        '잇몸이 아물 때까지 처방해 드린 약은 거르지 마세요',
    ],
}: CareSectionProps) {
    return (
        <section className="relative w-full min-h-150 flex items-center justify-center py-20 px-4 overflow-hidden">
            <Image
                src="/images/bg_care.jpg"
                alt="배경 이미지"
                fill
                sizes="100vw"
                className="object-cover object-center -z-10"
            />

            {/* 카드 영역 */}
            <div className="w-full max-w-[923px] bg-[#E2E8E4] rounded-[30px] overflow-hidden shadow-sm">
                {/* 제목 영역 */}
                <div className="bg-[#2B483C] py-5 px-6 flex justify-center items-center gap-6.25">
                    <img src="/images/common/i_tooth_w.svg" className="block w-11.25" alt="주의사항 치아모양 아이콘" />
                    <h2 className="text-white text-[40px] font-bold ">{title}</h2>
                </div>

                {/*  리스트 영역 */}
                <div className="bg-[#f9faf9]/75 py-[50px] px-6 md:px-[60px] flex justify-center">
                    <ul className="flex flex-col items-start max-w-[580px] w-full">
                        {descriptionList.map((text, index) => (
                            <li key={index} className="flex items-start gap-[20px] mb-[23px] last:mb-0">
                                <div className="shrink-0 mt-1">
                                    <img
                                        src="/images/common/i_care_check.png"
                                        alt="체크"
                                        className="w-[25px] h-auto block"
                                    />
                                </div>
                                <span className="text-green-600 text-[22px] font-medium leading-relaxed text-left">
                                    {text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
