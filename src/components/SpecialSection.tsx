import SectionHeading from './common/SectionHeading';
import Image from 'next/image';

interface SpecialCardItem {
    id: number;
    cardTitle: string;
    cardDesc: string;
    specialSrc: string;
    specialAlt: string;
}

interface SpecialSectionProps {
    topTitle: string;
    centerTitle: string;
    cardList: SpecialCardItem[];
}

export default function SpecialSection({ topTitle, centerTitle, cardList }: SpecialSectionProps) {
    return (
        <section className="relative w-full bg-white">
            <div>
                {/* #STYLE: py 대화면 확장 */}
                <div className="pt-[70px] md:pt-[100px] 2xl:pt-[130px] pb-[90px] md:pb-[130px] 2xl:pb-[160px] w-full h-full px-4">
                    <div className="relative z-10">
                        <SectionHeading topTitle={topTitle} centerTitle={centerTitle} />

                        {/* #STYLE: 995px 기준 세로/가로 전환 (커스텀 브레이크포인트 min-[995px]) */}
                        <div className="flex flex-col min-[995px]:flex-row min-[995px]:flex-wrap justify-center items-center gap-[16px] md:gap-[20px] max-w-[690px] 2xl:max-w-[820px] mx-auto mt-[40px] md:mt-[58px]">
                            {cardList.map((card, i) => (
                                <div
                                    key={i}
                                    className="w-full min-[995px]:w-[calc(50%-10px)] border border-[#B0B0B0] rounded-[10px] pt-[44px] md:pt-[60px] pb-[36px] md:pb-[50px] flex flex-col items-center justify-center bg-white shadow-sm"
                                >
                                    <img src={card.specialSrc} className="w-16 md:w-18" alt={card.specialAlt} />
                                    {/* #STYLE: 줄바꿈 어색함 해결 — 데이터(card.cardTitle)의 \n은 PC 카드 폭 기준으로
                                        짜여있어 모바일 1열 풀폭 카드에서는 그대로 쓰면 어색하게 끊김.
                                        995px 미만(세로 1열 레이아웃)에서는 whitespace-normal로 강제 줄바꿈 해제,
                                        995px 이상(가로 2열)부터 디자인 의도대로 pre-wrap 적용 */}
                                    <h4 className="whitespace-normal min-[995px]:whitespace-pre-wrap text-center text-[20px] md:text-[22px] lg:text-[25px] 2xl:text-[28px] font-bold pt-3 md:pt-3.5 pb-5 md:pb-6.25 leading-tight break-keep">
                                        {card.cardTitle}
                                    </h4>
                                    <p className="whitespace-normal min-[995px]:whitespace-pre-wrap text-center text-[15px] md:text-[16px] lg:text-[18px] text-[#666] leading-relaxed break-keep px-2">
                                        {card.cardDesc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
