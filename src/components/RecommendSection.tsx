'use client';

import SectionHeading from './common/SectionHeading';

interface RecommendCard {
    title: string;
    description: string;
    bgClass: string;
    textColorClass: string;
    iconSrc: string;
    lineColor: string;
}

export default function RecommendSection() {
    const cards: RecommendCard[] = [
        {
            title: '임플란트 치료가\n걱정되시는 분',
            description: '정확한 진단과 체계적인 계획을\n바탕으로 보다 안전한\n임플란트 치료를 진행합니다.',
            bgClass: 'bg-[#40584E]',
            textColorClass: 'text-white',
            iconSrc: 'images/common/i_tooth.png',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '치아가 빠져 불편함을\n겪고 계신 분',
            description: '저작 기능 회복을 통해\n편안한 식사와\n일상생활을 돕습니다.',
            bgClass: 'bg-[#7A9389]',
            textColorClass: 'text-white',
            iconSrc: 'images/common/i_tooth.png',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '보다 정밀한 치료를\n원하시는 분',
            description: '디지털 진단 데이터를 활용하여\n개인 맞춤형 임플란트 치료를\n제공합니다.',
            bgClass: 'bg-[#F4F1EA]',
            textColorClass: 'text-[#414141]',
            iconSrc: 'images/common/i_tooth_b.png',
            lineColor: 'rgba(2, 2, 2, 0.3)',
        },
    ];

    return (
        <section className="relative w-full pt-[100px] pb-[130px] overflow-hidden flex flex-col items-center">
            <picture className="absolute inset-0 w-full h-full -z-10">
                <source srcSet="images/bg_reco.webp" type="image/webp" />
                <img src="images/bg_reco.jpg" alt="배경 이미지" className="w-full h-full object-cover object-center" />
            </picture>

            <div className="w-full max-w-[1200px]">
                <SectionHeading
                    topTitle="WHO IS IT FOR"
                    centerTitle="이런 분들에게 추천합니다"
                    desc=""
                    isDesc={false}
                />

                <div className="flex justify-center gap-7 items-stretch mt-[58px] px-4">
                    {/* 카드 영역 */}
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`w-full max-w-75 ${card.bgClass} ${card.textColorClass} rounded-[10px] overflow-hidden shadow-[2px_4px_10px_0_rgba(73,73,73,0.25)] flex flex-col transition-transform duration-300 `}
                        >
                            {/* 상단 영역 */}
                            <div
                                className="pt-[46px] pb-[38px] px-6 flex flex-col items-center text-center"
                                style={{
                                    backgroundImage: `linear-gradient(to right, ${card.lineColor} 60%, transparent 40%)`,
                                    backgroundPosition: 'bottom',
                                    backgroundSize: '20px 1px',
                                    backgroundRepeat: 'repeat-x',
                                }}
                            >
                                <img src={card.iconSrc} className="w-6.25 block mb-5" alt="추천 치아 아이콘" />
                                <strong className="text-[25px] font-bold leading-snug whitespace-pre-line">
                                    {card.title}
                                </strong>
                            </div>

                            {/* 하단 영역 */}
                            <div className="pt-9.5 pb-10 px-6 text-center flex-grow flex justify-center items-center">
                                <p className="leading-7.5 text-[15px] font-medium whitespace-pre-line">
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
