// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import AskSection from '@/components/AskSection';
import MapSection from '../components/MapStion';
import { gsap } from 'gsap';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import SectionHeading from '@/components/common/SectionHeading';
import PhilosophyStats from '@/components/common/PhilosophyStats';
import Link from 'next/link';
import ClinicHighlights from '@/components/ClinicHighlights';
import HomeDoctors from '@/components/HomeDoctors';
import HomeTreatments from '@/components/HomeTreatments';
import { Reveal, RevealStagger } from '@/components/motion/Reveal';

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function animateHeroCopy(swiper: SwiperType) {
    if (prefersReducedMotion()) {
        return;
    }

    const activeSlide =
        swiper.slides.find((slide) => slide.classList.contains('swiper-slide-active')) ??
        swiper.slides[swiper.activeIndex];
    const copy = activeSlide?.querySelector('.hero-copy');
    if (!copy) {
        return;
    }

    gsap.fromTo(
        copy.children,
        { y: 22, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.85, stagger: 0.1, ease: 'power2.out' },
    );
}

function HeroCtas() {
    return (
        <div className="mt-7 flex flex-col items-center gap-4 tracking-normal md:mt-9">
            <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                    href="#ask"
                    className="rounded-full bg-white px-6 py-3 text-[16px] font-bold text-green-600 shadow-sm transition-colors hover:bg-white/90 md:px-8 md:py-3.5 md:text-[18px]"
                >
                    상담 신청
                </Link>
                <Link
                    href="/guide/ai-navigation"
                    className="rounded-full border border-white/80 px-6 py-3 text-[16px] font-bold text-white transition-colors hover:bg-white/10 md:px-8 md:py-3.5 md:text-[18px]"
                >
                    임플란트 안내
                </Link>
            </div>
            <a href="tel:1522-7528" className="text-base font-medium text-white/85 md:text-lg">
                대표전화 1522-7528
            </a>
        </div>
    );
}

export default function Home() {
    const [activeSection, setActiveSection] = useState('hero');

    // 오시는 길(location) 항목 제거
    const navItems = [
        { id: 'philosophy', label: '기드온 철학' },
        { id: 'implant', label: '임플란트' },
        { id: 'doctors', label: '의료진' },
        { id: 'signature', label: '특화 진료' },
        { id: 'ask', label: '상담 예약' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            const philosophyEl = document.getElementById('philosophy');
            const implantEl = document.getElementById('implant');
            const doctorsEl = document.getElementById('doctors');
            const signatureEl = document.getElementById('signature');
            const askEl = document.getElementById('ask');
            const mapEl = document.getElementById('map');

            if (mapEl && scrollPosition >= mapEl.offsetTop) {
                setActiveSection('map');
            } else if (askEl && scrollPosition >= askEl.offsetTop) {
                setActiveSection('ask');
            } else if (signatureEl && scrollPosition >= signatureEl.offsetTop) {
                setActiveSection('signature');
            } else if (doctorsEl && scrollPosition >= doctorsEl.offsetTop) {
                setActiveSection('doctors');
            } else if (implantEl && scrollPosition >= implantEl.offsetTop) {
                setActiveSection('implant');
            } else if (philosophyEl && scrollPosition >= philosophyEl.offsetTop) {
                setActiveSection('philosophy');
            } else {
                setActiveSection('hero');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full">
            <h1 className="hidden">성남임플란트 기드온치과</h1>
            <div
                className={`fixed left-12 top-1/2 -translate-y-1/2 z-40 hidden min-[1600px]:flex flex-col items-baseline transition-all duration-500 ${
                    activeSection === 'hero' || activeSection === 'map'
                        ? 'opacity-0 pointer-events-none'
                        : 'opacity-100 pointer-events-auto'
                }`}
            >
                <div className="mb-6 pl-3">
                    <img src="/images/i_tooth_g.svg" alt="" className="w-6 h-auto block" />
                </div>

                <div className="relative flex flex-col gap-6 items-start pl-3">
                    <div className="absolute left-[19.5px] top-2 bottom-2 w-[1px] bg-[#233a31]/20 z-0" />

                    {navItems.map((item) => {
                        const isCurrent = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => handleNavClick(item.id)}
                                className="flex items-center gap-4 group focus:outline-none z-10"
                            >
                                <div
                                    className={`w-4 h-4 rounded-full border border-[#233a31] transition-all duration-300 flex items-center justify-center bg-white ${
                                        isCurrent ? '!bg-[#233a31] scale-110' : 'group-hover:border-[#233a31]/80'
                                    }`}
                                ></div>
                                <span
                                    className={`text-[16px] font-medium tracking-tight transition-all duration-300 ${
                                        isCurrent
                                            ? 'text-[#233a31] font-bold translate-x-0.5'
                                            : 'text-[#233a31]/40 group-hover:text-[#233a31]/70'
                                    }`}
                                >
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div id="hero" className="relative w-full h-full block">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    pagination={{ el: '.custom-main-pagination', type: 'fraction' }}
                    loop
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    spaceBetween={0}
                    slidesPerView={1}
                    onInit={animateHeroCopy}
                    onSlideChangeTransitionStart={animateHeroCopy}
                    className="text-[16px] md:text-[20px] text-white tracking-[0.2em]"
                >
                    <SwiperSlide>
                        <div className="relative h-[600px] sm:h-[700px] md:h-[780px] xl:h-[840px] overflow-hidden">
                            <div className="bg-[#575757] absolute w-full h-full top-0 left-0 z-1 opacity-50"></div>
                            <Image
                                src="/images/bg_main_01_1.jpg"
                                alt="성남임플란트 기드온치과 외관"
                                fill
                                sizes="100vw"
                                priority
                                className="object-cover object-center hero-zoom"
                            />
                            <div className="hero-copy flex flex-col justify-center items-center h-full px-4 pb-20 z-2 relative text-white text-center md:pb-24">
                                <h2 className="text-3xl sm:text-4xl md:text-[46px] font-hero font-bold  leading-tight md:leading-6.1 break-keep  tracking-normal">
                                    치아를 오래 쓰는 길,
                                </h2>
                                <h2 className="text-3xl sm:text-4xl md:text-[46px] font-hero font-bold leading-tight mt-1 tracking-normal">
                                    기드온이 안내합니다.
                                </h2>
                                <p className="text-lg sm:text-2xl md:text-[34px] mt-5 md:mt-7 font-ui opacity-90 break-keep tracking-normal">
                                    흔들리지 않는 판단, 끝까지 지키는 약속.
                                </p>
                                <HeroCtas />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative h-[600px] sm:h-[700px] md:h-[780px] xl:h-[840px] overflow-hidden">
                            <div className="bg-[#575757] absolute w-full h-full top-0 left-0 z-1 opacity-50"></div>
                            <Image
                                src="/images/bg_main_02.jpg"
                                alt="성남임플란트 기드온치과 내부"
                                fill
                                sizes="100vw"
                                className="object-cover object-center hero-zoom"
                            />
                            <div className="hero-copy flex flex-col justify-center items-center h-full px-4 pb-20 z-2 relative text-white text-center tracking-normal md:pb-24">
                                <h2 className="text-3xl sm:text-4xl md:text-[46px] font-hero leading-tight break-keep font-bold  tracking-normal">
                                    정해진 길로 정확하게 안내하고,
                                </h2>
                                <h2 className="text-3xl sm:text-4xl md:text-[46px] font-hero leading-tight mt-1 font-bold break-keep tracking-normal">
                                    치아를 오래 쓰게 하는 안정적인 치과입니다.
                                </h2>
                                <p className="text-lg sm:text-2xl md:text-[34px] mt-5 md:mt-7 font-ui opacity-90 break-keep tracking-normal">
                                    흔들리지 않는 판단, 끝까지 지키는 약속.
                                </p>
                                <HeroCtas />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="absolute bottom-24 md:bottom-32 left-0 right-0 z-10 pointer-events-none">
                    <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 md:px-6 2xl:px-10 flex justify-start">
                        <div className="custom-main-pagination text-[16px] md:text-[22px] !text-white tracking-[0.2em] font-medium pointer-events-auto [&_span]:!text-white" />
                    </div>
                </div>
            </div>

            <div id="philosophy" className="relative py-20 md:py-40 overflow-hidden">
                <Image
                    src="/images/bg_main_03.jpg"
                    alt="성남임플란트 기드온치과 진료 철학 이미지"
                    fill
                    sizes="100vw"
                    className="object-cover object-center -z-10 absolute top-0 left-0"
                />
                <div className="px-4">
                    <Reveal>
                        <SectionHeading
                            topTitle={'GIDEON’S Philosophy'}
                            centerTitle={'기드온치과의 철학'}
                            desc=""
                            isDesc={false}
                        />
                    </Reveal>

                    <PhilosophyStats />

                    <Reveal delay={0.1}>
                        <p className="mx-auto mt-10 max-w-[720px] whitespace-pre-line break-keep text-center text-[18px] font-medium leading-[1.75] text-[#444] md:text-[22px]">
                            {'기드온치과는 화려한 장비나 최신 기술을 앞세우는 치과가 아닙니다.\n' +
                                '한결같이 바른 마음과 정직한 손길로, 당신의 평생 구강 건강을 지켜드립니다.'}
                        </p>
                    </Reveal>
                </div>

                <RevealStagger
                    className="flex flex-col md:flex-row items-center justify-center gap-0 mt-10 md:mt-12 mb-14 md:mb-20 px-4"
                    selector=".philosophy-circle"
                    y={20}
                    stagger={0.14}
                >
                    <div className="philosophy-circle relative z-10 rounded-full border border-green-600 flex items-center justify-center w-48 h-48 md:w-64 md:h-64 -mb-6 md:mb-0 md:-mr-10 bg-transparent shrink-0">
                        <div
                            className="absolute inset-2 rounded-full pointer-events-none"
                            style={{
                                background:
                                    'linear-gradient(180deg, rgba(103, 120, 113, 0.58) 0%, rgba(139, 152, 147, 0.33) 53.85%, rgba(251, 251, 251, 0.00) 100%)',
                                opacity: 0.6,
                            }}
                        />
                        <p className="relative z-10 text-center text-2xl md:text-3xl font-semibold text-[#233a31]">
                            정직한 <br /> 진료
                        </p>
                    </div>
                    <div className="philosophy-circle relative z-0 rounded-full border border-green-600 flex items-center justify-center w-48 h-48 md:w-64 md:h-64 -mb-6 md:mb-0 md:-mr-10 bg-transparent shrink-0">
                        <div
                            className="absolute inset-2 rounded-full pointer-events-none"
                            style={{
                                background:
                                    'linear-gradient(180deg, rgba(103, 120, 113, 0.58) 0%, rgba(139, 152, 147, 0.33) 53.85%, rgba(251, 251, 251, 0.00) 100%)',
                                opacity: 0.6,
                            }}
                        />
                        <p className="relative z-10 text-center text-2xl md:text-3xl font-semibold text-[#233a31]">
                            투명한 <br /> 안내
                        </p>
                    </div>
                    <div className="philosophy-circle relative z-10 rounded-full border border-green-600 flex items-center justify-center w-48 h-48 md:w-64 md:h-64 bg-transparent shrink-0">
                        <div
                            className="absolute inset-2 rounded-full pointer-events-none"
                            style={{
                                background:
                                    'linear-gradient(180deg, rgba(103, 120, 113, 0.58) 0%, rgba(139, 152, 147, 0.33) 53.85%, rgba(251, 251, 251, 0.00) 100%)',
                                opacity: 0.6,
                            }}
                        />
                        <p className="relative z-10 text-center text-2xl md:text-3xl font-semibold text-[#233a31]">
                            끝까지 <br /> 책임
                        </p>
                    </div>
                </RevealStagger>
                <Reveal delay={0.05}>
                    <div className="flex justify-center items-center px-4">
                        <a
                            href="/about/philosophy"
                            className="flex justify-center items-center rounded-full border font-bold border-[#233a31] gap-2 bg-white text-[#233a31] text-[16px] md:text-[17px] py-3.5 px-8 md:py-4 md:px-10 shadow-sm hover:bg-gray-50 transition-colors"
                        >
                            <span>병원철학 자세히보기</span>
                            <img
                                src="/images/right_arr.svg"
                                alt="기드온치과소개 병원철학 영역으로 이동"
                                className="w-4 h-4"
                            />
                        </a>
                    </div>
                </Reveal>
            </div>

            <ClinicHighlights />

            <HomeDoctors />

            <HomeTreatments />

            <div id="ask">
                <Reveal>
                    <AskSection />
                </Reveal>
            </div>

            <div id="map" className="w-full">
                <MapSection />
            </div>
        </div>
    );
}
