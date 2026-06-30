'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import AskSection from '@/components/AskSection';
import MapSection from '../components/MapStion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import SectionHeading from '@/components/common/SectionHeading';

export default function Home() {
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'philosophy', label: '기드온 철학' },
        { id: 'signature', label: '진료 과목' },
        { id: 'location', label: '오시는 길' },
        { id: 'ask', label: '상담 예약' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            const philosophyEl = document.getElementById('philosophy');
            const signatureEl = document.getElementById('signature');
            const locationEl = document.getElementById('location');
            const askEl = document.getElementById('ask');

            if (askEl && scrollPosition >= askEl.offsetTop) {
                setActiveSection('ask');
            } else if (locationEl && scrollPosition >= locationEl.offsetTop) {
                setActiveSection('location');
            } else if (signatureEl && scrollPosition >= signatureEl.offsetTop) {
                setActiveSection('signature');
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
            <div
                className={`fixed left-12 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-baseline transition-all duration-500 ${
                    activeSection === 'hero' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
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
                                    className={`text-[14px] font-medium tracking-tight transition-all duration-300 ${
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
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-3 flex flex-col items-center gap-2">
                    <p className="text-white text-base">Scroll Down</p>
                    <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white p-1 ">
                        <div className="h-2 w-0.5 rounded-full bg-white animate-wheel" />
                    </div>
                    <img src="/images/down_arr2.svg" alt="마우스 아래 화살표" />
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{ type: 'fraction' }}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="[&_.swiper-pagination]:!left-100 [&_.swiper-pagination]:!bottom-24 [&_.swiper-pagination]:!right-auto [&_.swiper-pagination]:!w-auto [&_.swiper-pagination]:!text-left text-[20px] text-white tracking-[0.2em]"
                >
                    <SwiperSlide>
                        <div className="relative h-[800px]">
                            <div className="bg-[#575757] absolute w-full h-full top-0 left-0 z-1 opacity-50"></div>
                            <Image
                                src="/images/bg_main_01_1.jpg"
                                alt="메인 히어로 배경 이미지1"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                            <div className="flex flex-col justify-center items-center py-64 z-2 relative text-white">
                                <h1 className="text-[40px] font-hero leading-6.1">치과를 오래 쓰는 길,</h1>
                                <h1 className="text-[40px] font-hero">기드온이 안내합니다.</h1>
                                <p className="text-3xl mt-7 font-ui">흔들리지 않는 판단, 끝까지 지키는 약속.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative h-[800px]">
                            <div className="bg-[#575757] absolute w-full h-full top-0 left-0 z-1 opacity-50"></div>
                            <Image
                                src="/images/bg_main_02.jpg"
                                alt="메인 히어로 배경 이미지2"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                            <div className="flex flex-col justify-center items-center py-64 z-2 relative text-white">
                                <h1 className="text-[40px] font-hero">정해진 길로 정확하게 안내하고,</h1>
                                <h1 className="text-[40px] font-hero">치아를 오래 쓰게 하는 안정적인 치과입니다.</h1>
                                <p className="text-3xl mt-7 font-ui">흔들리지 않는 판단, 끝까지 지키는 약속.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div id="philosophy" className="relative py-40 bg-white">
                <Image
                    src="/images/bg_main_03.jpg"
                    alt="메인 히어로 배경 이미지3"
                    fill
                    sizes="100vw"
                    className="object-cover object-center -z-10 absolute top-0 left-0"
                />
                <div>
                    <SectionHeading
                        topTitle={'GIDEON’S Philosophy'}
                        centerTitle={'기드온치과의 철학'}
                        desc={
                            '기드온치과는 화려한 장비나 최신 기술을 앞세우는 치과가 아닙니다.\n' +
                            '한결같이 바른 마음 and 정직한 손길로, 당신의 평생 구강 건강을 지켜드립니다.'
                        }
                        isDesc={true}
                    />
                </div>
                <div className="flex justify-center mt-12 mb-20">
                    <div className="relative rounded-full border border-gray-400 flex items-center justify-center w-64 h-64 -mr-10 bg-white/40 backdrop-blur-sm shadow-sm">
                        <div className="absolute inset-2 rounded-full opacity-40 bg-[linear-gradient(180deg,rgba(103,120,113,0.58)_0%,rgba(139,152,147,0.33)_53.85%,rgba(251,251,251,0)_100%)]" />
                        <p className="relative z-10 text-center text-2xl font-semibold text-[#233a31]">
                            정직한 <br /> 진료
                        </p>
                    </div>
                    <div className="relative rounded-full border border-gray-400 flex items-center justify-center w-64 h-64 -mr-10 bg-white/40 backdrop-blur-sm shadow-sm">
                        <div className="absolute inset-2 rounded-full opacity-40 bg-[linear-gradient(180deg,rgba(103,120,113,0.58)_0%,rgba(139,152,147,0.33)_53.85%,rgba(251,251,251,0)_100%)]" />
                        <p className="relative z-10 text-center text-2xl font-semibold text-[#233a31]">
                            투명한 <br /> 안내
                        </p>
                    </div>
                    <div className="relative rounded-full border border-gray-400 flex items-center justify-center w-64 h-64 bg-white/40 backdrop-blur-sm shadow-sm">
                        <div className="absolute inset-2 rounded-full opacity-40 bg-[linear-gradient(180deg,rgba(103,120,113,0.58)_0%,rgba(139,152,147,0.33)_53.85%,rgba(251,251,251,0)_100%)]" />
                        <p className="relative z-10 text-center text-2xl font-semibold text-[#233a31]">
                            끝까지 <br /> 책임
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <a
                        href="/about"
                        className="flex justify-center items-center p-4 rounded-full border font-bold border-[#233a31] gap-2 bg-white text-[#233a31] text-[15px] py-4 px-10 shadow-sm hover:bg-gray-50 transition-colors"
                    >
                        <span>병원철학 자세히보기</span>
                        <img src="/images/right_arr.svg" alt="" className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <div id="signature" className="py-40 bg-[#FBFBFB]">
                <SectionHeading
                    topTitle={'GIDEON’S Signature'}
                    centerTitle={'진료 과목'}
                    desc={'다양한 임상 경험과 전문성을 바탕으로\n정밀한 시술을 약속드립니다.'}
                    isDesc={true}
                />

                <div className="flex justify-center items-center gap-5 mt-14 px-4">
                    {[
                        {
                            title1: 'AI 네비게이션',
                            title2: '임플란트',
                            desc: '모의 시술로 오차 없이\n안전하고 아픔을 줄인\n디지털 임플란트.',
                            img: '01',
                        },
                        {
                            title1: '물방울 레이저',
                            title2: '치주관리',
                            desc: '드릴 소리 없이\n물방울로 치료하는\n잇몸 케어.',
                            img: '02',
                        },
                        {
                            title1: '티스캔',
                            title2: '교합관리',
                            desc: '씹는 힘의 균형을\n디지털 수치로\n정밀하게 맞추는 진료.',
                            img: '03',
                        },
                        {
                            title1: '시니어',
                            title2: '라미네이트',
                            desc: '중장년층을 위한\n자연스럽고 품격 있는\n미소 성형.',
                            img: '04',
                        },
                    ].map((card, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-md cursor-pointer shadow-sm">
                            <img src={`/images/main_hover_${card.img}.jpg`} alt="" className="w-full h-auto block" />

                            <div className="absolute inset-0 flex translate-y-full flex-col justify-start bg-[#2d4a3e] p-5 transition-transform duration-300 group-hover:translate-y-0">
                                <h3 className="text-2xl font-bold text-white leading-snug">
                                    {card.title1} <br /> {card.title2}
                                </h3>
                                <div className="my-5 h-px w-4 bg-white/50" />
                                <p className="text-lg text-white/80 whitespace-pre-line leading-relaxed">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center pt-25">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 p-4 px-8 rounded-full bg-[#2C4A3E] text-white text-xl hover:bg-[#192b24] transition-colors shadow-md"
                    >
                        <span>진료과목 자세히보기</span>
                        <img src="/images/right_arr_white.svg" alt="" className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <section
                id="location"
                className="w-full py-[120px] flex flex-col items-center bg-gradient-to-b from-[#EBF2EA] to-[#F4F8F3]"
            >
                <div className="w-full max-w-[1000px] px-4 flex flex-col items-center">
                    <SectionHeading
                        topTitle="GIDEON'S Location"
                        centerTitle="오시는 길"
                        desc="처음 방문하시는 분도 쉽게 찾으실 수 있습니다."
                        isDesc={true}
                    />

                    <div className="mt-[60px] w-full max-w-[640px] flex flex-col gap-[22px]">
                        <div className="w-full bg-white rounded-[10px] p-5 flex items-center gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <div className="w-[50px] h-[50px] bg-green-600 rounded-full flex items-center justify-center shrink-0">
                                <img src="/images/i_loca_02.svg" alt="" className="w-6 h-6 object-contain" />
                            </div>
                            <p className="text-[22px] font-semibold text-green-600 tracking-tight">
                                모란역 4번 출구에서 도보 2분
                            </p>
                        </div>

                        <div className="w-full bg-white rounded-[10px] p-5 flex items-center gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <div className="w-[50px] h-[50px] bg-green-600 rounded-full flex items-center justify-center shrink-0">
                                <img src="/images/i_loca_01.svg" alt="" className="w-6 h-6 object-contain" />
                            </div>
                            <p className="text-[22px] font-semibold text-[#233a31] tracking-tight">국민은행 건물 3층</p>
                        </div>
                    </div>

                    <a
                        href="/location"
                        className="mt-[70px] flex items-center justify-center bg-green-600 text-white text-[20px] font-bold px-8 h-[55px] rounded-full shadow-md transition-all gap-2 group"
                    >
                        <span>오시는길 자세히보기</span>
                        <span className="text-[13px] opacity-80 group-hover:translate-x-1 transition-transform">
                            ＞
                        </span>
                    </a>
                </div>
            </section>

            <div id="ask">
                <AskSection />
            </div>

            <MapSection />
        </div>
    );
}
