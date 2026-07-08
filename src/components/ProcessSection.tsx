// components/ProcessSection.tsx
'use client';

import Image from 'next/image';
import SectionHeading from './common/SectionHeading';

interface ProcessStep {
    stepNumber: number;
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
}

interface ProcessSectionProps {
    topTitle?: string;
    centerTitle?: string;
    stepData?: ProcessStep[];
    isBg?: boolean; // 💡 특정 페이지 배경 분기를 위한 프로퍼티 추가
}

export default function ProcessSection({
    topTitle = 'TREATMENT PROCESS',
    centerTitle = '치료 프로세스',
    stepData = [],
    isBg = false, // 💡 기본값은 안 보임(false)으로 세팅
}: ProcessSectionProps) {
    const displaySteps =
        stepData.length > 0
            ? stepData
            : [
                  {
                      stepNumber: 1,
                      title: '정밀 진단 및 상담',
                      description: '3D CT 등 디지털 장비를 활용하여\n환자의 상태를 정밀하게 분석합니다.',
                      imgSrc: '/images/common/bg_process_default.jpg',
                      imgAlt: '기드온치과 3D CT 정밀 진단 과정',
                  },
              ];

    // #STYLE: isBg가 true일 때는 지정하신 bg_green_03.jpg 이미지가 배경으로 깔리도록 구조 연동
    return (
        <section
            className={`relative w-full pt-[70px] md:pt-[100px] 2xl:pt-[130px] pb-[90px] md:pb-[130px] 2xl:pb-[160px] flex flex-col items-center px-4 ${!isBg ? 'bg-transparent' : ''}`}
        >
            {isBg ? (
                <Image
                    src="/images/bg_info.jpg"
                    alt="기드온치과 진행과정 배경"
                    fill
                    sizes="100vw"
                    className="object-cover object-center -z-10"
                />
            ) : null}

            <div className="w-full max-w-[860px] 2xl:max-w-[1020px]">
                <SectionHeading topTitle={topTitle} centerTitle={centerTitle} desc="" isDesc={false} />

                <div className="mt-[40px] md:mt-[58px] flex flex-col">
                    {displaySteps.map((e, i) => (
                        <article
                            key={i}
                            className="flex flex-col min-[929px]:flex-row items-center min-[929px]:items-start justify-between gap-[24px] min-[929px]:gap-[50px] pb-[30px] min-[929px]:pb-[40px]"
                        >
                            <div className="w-full min-[929px]:w-[50%] flex flex-col items-start pb-[20px] min-[929px]:pb-[26px] border-b border-green-600">
                                <span className="inline-block bg-green-600 text-white text-[15px] md:text-[18px] font-semibold px-[12px] md:px-[14px] py-[2px] rounded-full mb-[12px] md:mb-[15px]">
                                    STEP {e.stepNumber}
                                </span>

                                <h3 className="text-[20px] md:text-[22px] lg:text-[25px] 2xl:text-[28px] font-semibold text-[#3d3e3c] mb-[12px] md:mb-[16px] break-keep tracking-[-0.03em]">
                                    {e.title}
                                </h3>

                                <p className="text-[15px] md:text-[16px] lg:text-[17px] font-medium text-[#666666] leading-[1.7] break-keep whitespace-normal min-[929px]:whitespace-pre-line tracking-[-0.03em]">
                                    {e.description}
                                </p>
                            </div>

                            <figure className="w-full min-[929px]:w-[450px] 2xl:w-[530px] h-[260px] sm:h-[320px] min-[929px]:h-[240px] 2xl:h-[280px] shrink-0 overflow-hidden rounded-[10px] relative m-0">
                                <Image
                                    src={e.imgSrc}
                                    alt={e.imgAlt}
                                    fill
                                    sizes="(max-width: 929px) 100vw, 530px"
                                    className="object-cover object-center"
                                />
                            </figure>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
