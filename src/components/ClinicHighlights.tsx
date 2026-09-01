'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from './common/SectionHeading';
import { Reveal, RevealStagger } from './motion/Reveal';

const implantStrengths = [
    {
        icon: '/images/i_special_1.svg',
        title: '3D CT 정밀 진단',
        description: '잇몸뼈 상태와 신경 위치를 꼼꼼히 확인하고, 환자분께 맞는 치료 계획을 세웁니다.',
    },
    {
        icon: '/images/i_special_2.svg',
        title: 'AI 네비게이션 식립',
        description: '미리 계획한 위치에 정확하게 심어, 오차를 줄이고 보다 안정적인 결과를 추구합니다.',
    },
    {
        icon: '/images/i_special_3.svg',
        title: '통증과 부담을 줄인 치료',
        description: '불필요한 절개를 최소화해 출혈과 붓기를 줄이고, 회복이 수월하도록 진행합니다.',
    },
    {
        icon: '/images/i_special_4.svg',
        title: '식립 후 관리까지',
        description: '심는 것으로 끝내지 않습니다. 잘 씹히도록 맞추고, 오래 쓰실 수 있게 꾸준히 관리합니다.',
    },
];

const implantProcess = [
    { step: '01', title: '정밀진단' },
    { step: '02', title: '식립' },
    { step: '03', title: '보철' },
    { step: '04', title: '관리' },
];

export default function ClinicHighlights() {
    return (
        <section id="implant" className="bg-white px-4 py-20 md:py-[110px] 2xl:py-[140px]">
            <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1400px]">
                <Reveal>
                    <SectionHeading
                        topTitle="GIDEON IMPLANT"
                        centerTitle="기드온 임플란트의 강점"
                        desc={'정확한 진단부터 안정적인 식립, 치료 후 관리까지\n한 번에 이어가는 임플란트 진료입니다.'}
                        isDesc={true}
                    />
                </Reveal>

                <div className="mt-12 grid items-stretch gap-6 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
                    <Reveal className="relative min-h-[280px] overflow-hidden rounded-[20px] md:min-h-[420px]">
                        <Image
                            src="/images/main_hover_01.jpg"
                            alt="성남임플란트 기드온치과 AI 네비게이션 임플란트"
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover"
                        />
                    </Reveal>

                    <RevealStagger className="grid gap-4 sm:grid-cols-2" y={20} stagger={0.1}>
                        {implantStrengths.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-[16px] border border-line bg-[#FAF9F6] px-6 py-7 md:px-7 md:py-8"
                            >
                                <img src={item.icon} alt="" className="h-10 w-10 object-contain md:h-11 md:w-11" />
                                <h3 className="mt-5 break-keep text-[20px] font-bold text-green-900 md:text-[22px]">
                                    {item.title}
                                </h3>
                                <p className="mt-3 break-keep text-[16px] font-medium leading-[1.75] text-[#666]">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </RevealStagger>
                </div>

                <Reveal delay={0.08}>
                    <ol className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 rounded-[16px] border border-line bg-[#FAF9F6] px-4 py-5 md:mt-12 md:gap-x-5 md:py-6">
                        {implantProcess.map((item, index) => (
                            <li key={item.step} className="flex items-center gap-3 md:gap-5">
                                <div className="flex items-center gap-2">
                                    <span className="font-accent text-[15px] tracking-[0.08em] text-[#B79449]">
                                        {item.step}
                                    </span>
                                    <span className="text-[17px] font-bold text-green-900 md:text-[18px]">
                                        {item.title}
                                    </span>
                                </div>
                                {index < implantProcess.length - 1 ? (
                                    <span className="text-[15px] text-green-600/35" aria-hidden="true">
                                        →
                                    </span>
                                ) : null}
                            </li>
                        ))}
                    </ol>
                </Reveal>

                <Reveal delay={0.05}>
                    <div className="mt-12 flex justify-center md:mt-16">
                        <Link
                            href="/guide/ai-navigation"
                            className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-3.5 text-[16px] font-bold text-white shadow-sm transition-colors hover:bg-[#192b24] md:px-10 md:py-4 md:text-[17px]"
                        >
                            임플란트 자세히 보기
                            <img src="/images/right_arr_white.svg" alt="" className="h-4 w-4" />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
