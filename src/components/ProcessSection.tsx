'use client';

import SectionHeading from './common/SectionHeading';

interface ProcessStep {
    stepNumber: number;
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
}

interface ProcessSectionProps {
    topTitle: string;
    centerTitle: string;
    steps: ProcessStep[];
}

export default function ProcessSection({ topTitle, centerTitle, steps }: ProcessSectionProps) {
    return (
        <section className="w-full pt-[100px] pb-[130px] flex flex-col items-center bg-transparent">
            <div className="w-full max-w-[860] px-4">
                <SectionHeading topTitle={topTitle} centerTitle={centerTitle} desc="" isDesc={false} />

                {/* 프로세스 리스트 영역 */}
                <div className="mt-[58px] flex flex-col">
                    {steps.map((step) => (
                        <div key={step.stepNumber} className="flex items-center justify-between gap-[50px] pb-[40px] ">
                            <div className="w-[50%] flex flex-col items-start pb-[26px] border-b border-green-600">
                                <span className="inline-block bg-green-600 text-white text-[18px] font-semibold px-[14px] py-[2px] rounded-full mb-[15px]">
                                    STEP {step.stepNumber}
                                </span>

                                <h3 className="text-[25px] font-semibold text-[#3d3e3c] mb-[16px] break-keep">
                                    {step.title}
                                </h3>

                                <p className="text-[17px] font-medium text-[#666666] leading-[1.6] break-keep whitespace-pre-line">
                                    {step.description}
                                </p>
                            </div>

                            {/* 오른쪽 이미지 영역 (시안처럼 둥근 모서리 rounded-[15px] 적용) */}
                            <div className="w-[50%] shrink-0 overflow-hidden rounded-[15px]">
                                <img src={step.imgSrc} alt={step.imgAlt} className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
