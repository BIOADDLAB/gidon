'use client';

import Image from 'next/image';
import SectionHeading from './common/SectionHeading';

interface RecommendCardItem {
    title: string;
    description: string;
    bgClass: string;
    textColorClass: string;
    iconSrc: string;
    lineColor: string;
}

interface RecommendSectionProps {
    topTitle?: string;
    centerTitle?: string;
    cardList?: RecommendCardItem[];
}

export default function RecommendSection({
    topTitle = 'WHO IS IT FOR',
    centerTitle = '이런 분들에게 추천합니다',
    cardList = [],
}: RecommendSectionProps) {
    const displayList =
        cardList.length > 0
            ? cardList
            : [
                  {
                      title: '임플란트 치료가\n걱정되시는 분',
                      description: '정확한 진단과 체계적인 계획을\n바탕으로 보다 안전한\n임플란트 치료를 진행합니다.',
                      bgClass: 'bg-[#40584E]',
                      textColorClass: 'text-white',
                      iconSrc: '/images/common/i_tooth_w.svg',
                      lineColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  {
                      title: '치아가 빠져 불편함을\n겪고 계신 분',
                      description: '저작 기능 회복을 통해\n편안한 식사와\n일상생활을 돕습니다.',
                      bgClass: 'bg-[#7A9389]',
                      textColorClass: 'text-white',
                      iconSrc: '/images/common/i_tooth_w.svg',
                      lineColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  {
                      title: '보다 정밀한 치료를\n원하시는 분',
                      description: '디지털 진단 데이터를 활용하여\n개인 맞춤형 임플란트 치료를\n제공합니다.',
                      bgClass: 'bg-[#F4F1EA]',
                      textColorClass: 'text-[#414141]',
                      iconSrc: '/images/common/i_tooth_b.png',
                      lineColor: 'rgba(2, 2, 2, 0.3)',
                  },
              ];

    return (
        // #STYLE: py 대화면 확장
        <section className="relative w-full pt-[70px] md:pt-[100px] 2xl:pt-[130px] pb-[90px] md:pb-[130px] 2xl:pb-[160px] overflow-hidden flex flex-col items-center">
            <Image
                src="/images/bg_reco.jpg"
                alt="기드온치과 임플란트 추천 대상 배경"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center -z-10"
            />

            {/* #STYLE: max-w 대화면 확장 */}
            <div className="w-full max-w-[1200px] 2xl:max-w-[1400px] px-4">
                <SectionHeading topTitle={topTitle} centerTitle={centerTitle} desc="" isDesc={false} />

                {/* #STYLE: 830px 기준 세로/가로 전환 (커스텀 브레이크포인트 min-[830px]) */}
                <div className="flex flex-col min-[830px]:flex-row justify-center gap-5 min-[830px]:gap-7 items-stretch mt-[40px] md:mt-[58px]">
                    {displayList.map((card, index) => (
                        <div
                            key={index}
                            className={`w-full min-[830px]:w-full min-[830px]:max-w-[300px] 2xl:max-w-[360px] ${card.bgClass} ${card.textColorClass} rounded-[10px] overflow-hidden shadow-[2px_4px_10px_0_rgba(73,73,73,0.25)] flex flex-col transition-transform duration-300`}
                        >
                            {/* 상단 영역 */}
                            <div
                                className="pt-[36px] md:pt-[46px] pb-[30px] md:pb-[38px] px-2 flex flex-col items-center text-center"
                                style={{
                                    backgroundImage: `linear-gradient(to right, ${card.lineColor} 60%, transparent 40%)`,
                                    backgroundPosition: 'bottom',
                                    backgroundSize: '20px 1px',
                                    backgroundRepeat: 'repeat-x',
                                }}
                            >
                                <img
                                    src={card.iconSrc}
                                    className="w-[22px] md:w-[25px] block mb-4 md:mb-5"
                                    alt="추천 대상 치아 아이콘"
                                />
                                {/* #STYLE: 줄바꿈 어색함 해결 — 데이터(card.title)의 \n은 PC 기준으로 짜여있어
                                    whitespace-pre-line을 그대로 쓰면 모바일 좁은 화면에 안 맞는 지점에서 끊김.
                                    830px 미만에서는 whitespace-normal로 강제 줄바꿈 해제하고 break-keep으로만 자연 줄바꿈,
                                    830px 이상부터 디자인 의도대로 pre-line 적용 */}
                                <strong className="text-[20px] min-[830px]:text-[23px] lg:text-[25px] 2xl:text-[28px] font-bold leading-snug whitespace-normal min-[830px]:whitespace-pre-line break-keep">
                                    {card.title}
                                </strong>
                            </div>

                            {/* 하단 영역 */}
                            <div className="pt-[28px] md:pt-[38px] pb-8 md:pb-10 px-6 text-center flex-grow flex justify-center items-center">
                                {/* #STYLE: 설명문도 동일하게 830px 미만에서 강제 줄바꿈 해제 */}
                                <p className="leading-[26px] min-[830px]:leading-[30px] text-[14px] min-[830px]:text-[15px] 2xl:text-[16px] font-medium whitespace-normal min-[830px]:whitespace-pre-line break-keep">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
