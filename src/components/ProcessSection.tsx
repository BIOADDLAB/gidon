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
    topTitle: string;
    centerTitle: string;
    stepData: ProcessStep[];
}

export default function ProcessSection({ topTitle, centerTitle, stepData }: ProcessSectionProps) {
    return (
        <section className="w-full pt-[100px] pb-[130px] flex flex-col items-center bg-transparent">
            <div className="w-full max-w-[860px]">
                <SectionHeading topTitle={topTitle} centerTitle={centerTitle} desc="" isDesc={false} />

                <div className="mt-[58px] flex flex-col">
                    {stepData.map((e, i) => (
                        <div key={i} className="flex items-center justify-between gap-[50px] pb-[40px] ">
                            <div className="w-[50%] flex flex-col items-start pb-[26px] border-b border-green-600">
                                <span className="inline-block bg-green-600 text-white text-[18px] font-semibold px-[14px] py-[2px] rounded-full mb-[15px]">
                                    STEP {e.stepNumber}
                                </span>

                                <h3 className="text-[25px] font-semibold text-[#3d3e3c] mb-[16px] break-keep">
                                    {e.title}
                                </h3>

                                <p className="text-[17px] font-medium text-[#666666] leading-[1.6] break-keep whitespace-pre-line">
                                    {e.description}
                                </p>
                            </div>

                            <div className="w-[450px] h-[240px] shrink-0 overflow-hidden rounded-[10px] relative">
                                <Image src={e.imgSrc} alt={e.imgAlt} fill className="object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
