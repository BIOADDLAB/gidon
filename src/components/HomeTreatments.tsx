'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from './common/SectionHeading';
import { Reveal } from './motion/Reveal';

const treatments = [
    {
        href: '/guide/laminate',
        step: '01',
        title: '심미보철·라미네이트',
        summary: '내 치아는 최대한 지키고, 아름다움은 더하다.',
        image: '/images/main_hover_04.jpg',
        alt: '성남 기드온치과 심미보철 라미네이트 진료',
        points: [
            '치아 삭제를 최소화하거나 없는 방식을 우선',
            '올세라믹·지르코니아로 기능과 심미를 함께',
            '수복 후 T-Scan으로 교합 균형을 점검',
        ],
    },
    {
        href: '/guide/aligner',
        step: '02',
        title: '디지털 치아교정',
        summary: '티 안 나고 빠르게, 필요한 부위만 집중 케어.',
        image: '/images/main_hover_01.jpg',
        alt: '성남 기드온치과 디지털 치아교정',
        points: [
            '3D 스캔으로 이동 경로를 미리 확인',
            '필요한 부위만 집중하는 부분교정 (MTA / 튜브 교정)',
            '교정 마무리 단계에서 T-Scan 교합 점검',
        ],
    },
    {
        href: '/guide/tmj',
        step: '03',
        title: '턱관절·교합케어',
        summary: '턱 소리, 통증, 원인 불명의 두통 – 턱관절과 교합의 균형에서 답을 찾다.',
        image: '/images/main_hover_03.jpg',
        alt: '성남 기드온치과 턱관절 교합 케어',
        points: [
            '3D CT와 T-Scan으로 원인을 확인',
            '통증 완화와 맞춤 스플린트 치료',
            '1/1,000초 단위 디지털 교합 분석',
        ],
    },
    {
        href: '/guide/laser',
        step: '04',
        title: '일반·치주진료',
        summary: '물방울레이저 치주관리 / 충치·신경치료',
        image: '/images/main_hover_02.jpg',
        alt: '성남 기드온치과 일반 치주진료',
        points: ['물방울레이저 치주관리', '충치·신경치료'],
    },
];

export default function HomeTreatments() {
    return (
        <section id="signature" className="overflow-x-hidden bg-[#FBFBFB] py-20 md:py-40">
            <div className="mx-auto w-full max-w-7xl px-4 2xl:max-w-[1400px]">
                <Reveal>
                    <SectionHeading
                        topTitle="GIDEON’S Signature"
                        centerTitle="기드온의 특화 진료"
                        desc={'라미네이트, 교정, 턱관절, 치주까지. 오래 쓰는 치아를 위한 진료입니다.'}
                        isDesc={true}
                    />
                </Reveal>

                <div className="mt-12 flex flex-col gap-10 md:mt-16 md:gap-14">
                    {treatments.map((item, index) => (
                        <Reveal key={item.href} y={32} x={index % 2 === 0 ? -18 : 18}>
                            <article
                                className={`group grid items-stretch overflow-hidden rounded-[20px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] lg:grid-cols-2 ${
                                    index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                                }`}
                            >
                                <div className="relative min-h-[240px] overflow-hidden md:min-h-[340px]">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-[1200ms] ease-out motion-safe:group-hover:scale-[1.04]"
                                    />
                                </div>

                                <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12">
                                    <p className="font-accent text-[15px] tracking-[0.08em] text-[#B79449]">
                                        {item.step}
                                    </p>
                                    <h3 className="mt-2 break-keep text-[24px] font-bold text-green-900 md:text-[32px]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 break-keep text-[17px] font-medium leading-[1.75] text-[#666] md:text-[18px]">
                                        {item.summary}
                                    </p>

                                    <ul className="mt-6 flex flex-col gap-3">
                                        {item.points.map((point) => (
                                            <li key={point} className="flex items-start gap-3">
                                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                                                <span className="break-keep text-[17px] font-bold leading-snug text-green-900 md:text-[18px]">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={item.href}
                                        className="mt-8 inline-flex w-fit items-center gap-2 text-[16px] font-bold text-green-600 md:text-[17px]"
                                    >
                                        자세히 보기
                                        <img src="/images/right_arr.svg" alt="" className="h-4 w-4" />
                                    </Link>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
