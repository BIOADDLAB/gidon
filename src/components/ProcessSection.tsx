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
}

export default function ProcessSection({
    topTitle = 'TREATMENT PROCESS',
    centerTitle = '치료 프로세스',
    stepData = [],
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

    return (
        // #STYLE: py 대화면 확장
        <section className="w-full pt-[70px] md:pt-[100px] 2xl:pt-[130px] pb-[90px] md:pb-[130px] 2xl:pb-[160px] flex flex-col items-center bg-transparent px-4">
            {/* #STYLE: max-w 대화면 확장 */}
            <div className="w-full max-w-[860px] 2xl:max-w-[1020px]">
                <SectionHeading topTitle={topTitle} centerTitle={centerTitle} desc="" isDesc={false} />

                <div className="mt-[40px] md:mt-[58px] flex flex-col">
                    {/* #STYLE: 929px 기준 세로/가로 전환 (커스텀 브레이크포인트 min-[929px]) */}
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

                                {/* #STYLE: 줄바꿈 어색함 해결 — 데이터(e.description)의 \n은 PC 가로 레이아웃(텍스트 폭 50%) 기준.
                                    929px 미만 세로 레이아웃(텍스트 폭 100%)에서는 줄이 남게 되어 어색하므로
                                    whitespace-normal로 강제 줄바꿈 해제, 929px 이상부터 pre-line 적용 */}
                                <p className="text-[15px] md:text-[16px] lg:text-[17px] font-medium text-[#666666] leading-[1.7] break-keep whitespace-normal min-[929px]:whitespace-pre-line tracking-[-0.03em]">
                                    {e.description}
                                </p>
                            </div>

                            {/* #STYLE: 세로 레이아웃(929px 미만)일 때 이미지가 풀폭이라 답답해 보이지 않도록 높이 추가 상향
                                모바일 h-[260px] → sm h-[320px] → 929px 이상 가로 레이아웃부터는 텍스트와 균형 맞춰 h-[240px]로 축소 */}
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
