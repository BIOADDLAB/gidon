'use client';

import Image from 'next/image';

interface CareSectionProps {
    title?: string;
    descriptionList?: string[];
}

export default function CareSection({
    title = '주의사항 및 관리방법',
    descriptionList = [
        '치료 후 1시간 동안은\n처방된 거즈를 꽉 물어주세요',
        '침이나 피는 뱉지 마시고\n그대로 삼켜주세요',
        '치료된 잇몸 부위는\n손가락이나 혀로 대지 말아주세요',
        '자극적인 음식 대신\n식사는 부드러운 죽으로 해주세요',
        '잇몸이 아물 때까지\n처방해 드린 약은 거르지 마세요',
    ],
}: CareSectionProps) {
    return (
        // #STYLE: min-h 및 py 대화면 확장, sm(태블릿 세로) 단계 추가
        <section className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[600px] flex items-center justify-center py-14 sm:py-16 md:py-20 2xl:py-28 px-4 overflow-hidden">
            <Image
                src="/images/bg_care.jpg"
                // #STYLE: 치료 후 관리 배경 — 인테리어 분위기 이미지, 세로 중앙 기준 유지
                // #ISSUE: 배경 사진 주요 피사체 위치에 따라 object-position 조정 필요
                alt="기드온치과 치료 후 관리 안내 배경"
                fill
                sizes="100vw"
                className="object-cover object-center -z-10"
            />

            {/* #STYLE: 카드 max-w 태블릿(sm) 단계 추가, 대화면 확장 */}
            <div className="w-full max-w-[480px] sm:max-w-[640px] md:max-w-[923px] 2xl:max-w-[1080px] bg-[#E2E8E4] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-sm">
                {/* 제목 영역 */}
                <div className="bg-[#2B483C] py-3.5 sm:py-4 md:py-5 px-5 sm:px-6 flex justify-center items-center gap-3.5 sm:gap-5 md:gap-6.25">
                    <img
                        src="/images/common/i_tooth_w.svg"
                        className="block w-7 sm:w-9 md:w-11.25"
                        alt="주의사항 치아 아이콘"
                    />
                    {/* #STYLE: 타이틀 반응형 — 모바일 26px → sm(태블릿) 30px → md 34px → lg 40px → 2xl 44px, 5단계 모두 확인됨 */}
                    <h2 className="text-white text-[22px] sm:text-[30px] md:text-[34px] lg:text-[40px] 2xl:text-[44px] font-bold break-keep">
                        {title}
                    </h2>
                </div>

                {/* 리스트 영역 */}
                <div className="bg-[#f9faf9]/75 py-[28px] sm:py-[40px] md:py-[50px] px-5 sm:px-8 md:px-[60px] flex justify-center">
                    <ul className="flex flex-col items-start max-w-[460px] sm:max-w-[520px] md:max-w-[580px] 2xl:max-w-[680px] w-full">
                        {descriptionList.map((text, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-[12px] sm:gap-[16px] md:gap-[20px] mb-[14px] sm:mb-[18px] md:mb-[23px] last:mb-0"
                            >
                                <div className="shrink-0 mt-1">
                                    <img
                                        src="/images/common/i_care_check.png"
                                        alt="체크"
                                        className="w-[18px] sm:w-[22px] md:w-[25px] h-auto block"
                                    />
                                </div>
                                {/* #STYLE: 모바일 줄바꿈 가독성 — 데이터에 \n으로 의도적 줄바꿈 지점 지정
                                    sm 미만(좁은 모바일): whitespace-pre-line으로 \n 적용
                                    sm 이상(태블릿~카드 폭 넓어짐): whitespace-normal로 \n 무시하고 한 줄로 자연스럽게 이어짐 */}
                                <span className="text-green-600 text-[14px] sm:text-[17px] md:text-[19px] lg:text-[22px] 2xl:text-[24px] font-medium leading-snug sm:leading-relaxed break-keep text-left whitespace-pre-line sm:whitespace-normal">
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
