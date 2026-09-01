'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from './common/SectionHeading';
import { Reveal, RevealStagger } from './motion/Reveal';

const doctors = [
    {
        name: '성요길',
        position: '대표원장',
        field: '임플란트 · 구강검진',
        imgSrc: '/images/doctor_1.jpg',
    },
    {
        name: '양미라',
        position: '원장',
        field: '통합치의학과 전문의',
        imgSrc: '/images/doctor_2.jpg',
    },
    {
        name: '김현찬',
        position: '원장',
        field: '임플란트 · 심미치료',
        imgSrc: '/images/doctor_3.jpg',
    },
];

export default function HomeDoctors() {
    return (
        <section id="doctors" className="bg-[#FAF9F6] px-4 py-20 md:py-[110px]">
            <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1400px]">
                <Reveal>
                    <SectionHeading
                        topTitle="MEDICAL STAFF"
                        centerTitle="의료진 소개"
                        desc={'환자분의 치료를 함께하는 기드온치과 의료진입니다.'}
                        isDesc={true}
                    />
                </Reveal>

                <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-3 md:mt-16" y={28} stagger={0.12}>
                    {doctors.map((doctor) => (
                        <Link
                            key={doctor.name}
                            href="/doctors"
                            className="group overflow-hidden rounded-[20px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-transform duration-300 motion-safe:hover:-translate-y-1"
                        >
                            <div className="relative h-[280px] overflow-hidden md:h-[340px]">
                                <Image
                                    src={doctor.imgSrc}
                                    alt={`기드온치과 ${doctor.name} ${doctor.position}`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 33vw"
                                    className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                                />
                            </div>
                            <div className="px-6 py-6 text-center md:px-7 md:py-7">
                                <p className="text-[15px] font-bold text-green-600">{doctor.position}</p>
                                <h3 className="mt-1 text-[24px] font-bold text-green-900 md:text-[28px]">
                                    {doctor.name}
                                </h3>
                                <p className="mt-2 text-[16px] font-medium text-ink-500">{doctor.field}</p>
                            </div>
                        </Link>
                    ))}
                </RevealStagger>

                <Reveal delay={0.05}>
                    <div className="mt-10 flex justify-center md:mt-14">
                        <Link
                            href="/doctors"
                            className="flex items-center justify-center gap-2 rounded-full border border-[#233a31] bg-white px-8 py-3.5 text-[16px] font-bold text-[#233a31] shadow-sm transition-colors hover:bg-gray-50 md:px-10 md:py-4 md:text-[17px]"
                        >
                            의료진 자세히 보기
                            <img src="/images/right_arr.svg" alt="" className="h-4 w-4" />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
