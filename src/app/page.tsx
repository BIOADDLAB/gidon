// app/page.tsx
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
            const mapEl = document.getElementById('map');

            if (mapEl && scrollPosition >= mapEl.offsetTop) {
                setActiveSection('map');
            } else if (askEl && scrollPosition >= askEl.offsetTop) {
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
                <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-3 flex flex-col items-center gap-1.5 md:gap-2">
                    <p className="text-white text-sm md:text-base">Scroll Down</p>
                    <div className="flex h-8 w-5 md:h-10 md:w-6 items-start justify-center rounded-full border-2 border-white p-1">
                        <div className="h-1.5 w-0.5 md:h-2 md:w-0.5 rounded-full bg-white animate-wheel" />
                    </div>
                    <img src="/images/down_arr2.svg" alt="마우스 아래 화살표" className="w-3 md:w-auto" />
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{ el: '.custom-main-pagination', type: 'fraction' }}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={0}
                    slidesPerView={1}
                    className="text-[16px] md:text-[20px] text-white tracking-[0.2em]"
                >
                    <SwiperSlide>
                        <div className="relative h-[560px] sm:h-[680px] md:h-[750px] xl:h-[800px]">
                            <div className="bg-[#575757] absolute w-full h-full top-0 left-0 z-1 opacity-50"></div>
                            <Image
                                src="/images/bg_main_01_1.jpg"
                                alt="메인 히어로 배경 이미지1"
                                fill
                                sizes="100vw"
                                priority
                                className="object-cover object-center"
                            />
                            <div className="flex flex-col justify-center items-center h-full px-4 z-2 relative text-white text-center">
                                <h1 className="text-2xl sm:text-3xl md:text-[40px] font-hero leading-tight md:leading-6.1 break-keep">
                                    치과를 오래 쓰는 길,
                                </h1>
                                <h1 className="text-2xl sm:text-3xl md:text-[40px] font-hero leading-tight mt-1">
                                    기드온이 안내합니다.
                                </h1>
                                <p className="text-base sm:text-xl md:text-3xl mt-5 md:mt-7 font-ui opacity-90 break-keep">
                                    흔들리지 않는 판단, 끝까지 지키는 약속.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative h-[560px] sm:h-[680px] md:h-[750px] xl:h-[800px]">
                            <div className="bg-[#575757] absolute w-full h-full top-0 left-0 z-1 opacity-50"></div>
                            <Image
                                src="/images/bg_main_02.jpg"
                                alt="메인 히어로 배경 이미지2"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                            <div className="flex flex-col justify-center items-center h-full px-4 z-2 relative text-white text-center">
                                <h1 className="text-2xl sm:text-3xl md:text-[40px] font-hero leading-tight break-keep">
                                    정해진 길로 정확하게 안내하고,
                                </h1>
                                <h1 className="text-2xl sm:text-3xl md:text-[40px] font-hero leading-tight mt-1 break-keep">
                                    치아를 오래 쓰게 하는 안정적인 치과입니다.
                                </h1>
                                <p className="text-base sm:text-xl md:text-3xl mt-5 md:mt-7 font-ui opacity-90 break-keep">
                                    흔들리지 않는 판단, 끝까지 지키는 약속.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="absolute bottom-16 md:bottom-24 left-0 right-0 z-10 pointer-events-none">
                    <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 md:px-6 2xl:px-10 flex justify-start">
                        <div className="custom-main-pagination text-[14px] md:text-[20px] !text-white tracking-[0.2em] font-medium pointer-events-auto [&_span]:!text-white" />
                    </div>
                </div>
            </div>

            <div id="philosophy" className="relative py-20 md:py-40 overflow-hidden">
                <Image
                    src="/images/bg_main_03.jpg"
                    alt="메인 히어로 배경 이미지3"
                    fill
                    sizes="100vw"
                    className="object-cover object-center -z-10 absolute top-0 left-0"
                />
                <div className="px-4">
                    <SectionHeading
                        topTitle={'GIDEON’S Philosophy'}
                        centerTitle={'기드온치과의 철학'}
                        desc={
                            '기드온치과는 화려한 장비나 최신 기술을 앞세우는 치과가 아닙니다.\n' +
                            '한결같이 바른 마음과 정직한 손길로, 당신의 평생 구강 건강을 지켜드립니다.'
                        }
                        isDesc={true}
                    />
                </div>

                {/* #STYLE: bg-white/40 및 backdrop-blur-sm 속성을 제거하여 교차 보더 라인이 투명하게 겹쳐 보이도록 교정 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-0 mt-10 md:mt-12 mb-14 md:mb-20 px-4">
                    <div className="relative z-10 rounded-full border border-gray-400 flex items-center justify-center w-48 h-48 md:w-64 md:h-64 -mb-6 md:mb-0 md:-mr-10 bg-transparent shrink-0">
                        <div
                            className="absolute inset-2 rounded-full pointer-events-none"
                            style={{
                                background:
                                    'linear-gradient(180deg, rgba(103, 120, 113, 0.58) 0%, rgba(139, 152, 147, 0.33) 53.85%, rgba(251, 251, 251, 0.00) 100%)',
                                opacity: 0.6,
                            }}
                        />
                        <p className="relative z-10 text-center text-xl md:text-2xl font-semibold text-[#233a31]">
                            정직한 <br /> 진료
                        </p>
                    </div>
                    <div className="relative z-0 rounded-full border border-gray-400 flex items-center justify-center w-48 h-48 md:w-64 md:h-64 -mb-6 md:mb-0 md:-mr-10 bg-transparent shrink-0">
                        <div
                            className="absolute inset-2 rounded-full pointer-events-none"
                            style={{
                                background:
                                    'linear-gradient(180deg, rgba(103, 120, 113, 0.58) 0%, rgba(139, 152, 147, 0.33) 53.85%, rgba(251, 251, 251, 0.00) 100%)',
                                opacity: 0.6,
                            }}
                        />
                        <p className="relative z-10 text-center text-xl md:text-2xl font-semibold text-[#233a31]">
                            투명한 <br /> 안내
                        </p>
                    </div>
                    <div className="relative z-10 rounded-full border border-gray-400 flex items-center justify-center w-48 h-48 md:w-64 md:h-64 bg-transparent shrink-0">
                        <div
                            className="absolute inset-2 rounded-full pointer-events-none"
                            style={{
                                background:
                                    'linear-gradient(180deg, rgba(103, 120, 113, 0.58) 0%, rgba(139, 152, 147, 0.33) 53.85%, rgba(251, 251, 251, 0.00) 100%)',
                                opacity: 0.6,
                            }}
                        />
                        <p className="relative z-10 text-center text-xl md:text-2xl font-semibold text-[#233a31]">
                            끝까지 <br /> 책임
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center px-4">
                    <a
                        href="/about/philosophy"
                        className="flex justify-center items-center rounded-full border font-bold border-[#233a31] gap-2 bg-white text-[#233a31] text-[14px] md:text-[15px] py-3.5 px-8 md:py-4 md:px-10 shadow-sm hover:bg-gray-50 transition-colors"
                    >
                        <span>병원철학 자세히보기</span>
                        <img src="/images/right_arr.svg" alt="" className="w-4 h-4" />
                    </a>
                </div>
            </div>

            <div id="signature" className="py-20 md:py-40 bg-[#FBFBFB]">
                <div className="px-4">
                    <SectionHeading
                        topTitle={'GIDEON’S Signature'}
                        centerTitle={'진료 과목'}
                        desc={'다양한 임상 경험과 전문성을 바탕으로\n정밀한 시술을 약속드립니다.'}
                        isDesc={true}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-10 md:mt-14 px-4 max-w-7xl mx-auto w-full">
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
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-md cursor-pointer shadow-sm w-full asset-card"
                        >
                            <img
                                src={`/images/main_hover_${card.img}.jpg`}
                                alt=""
                                className="w-full h-auto block object-cover"
                            />

                            <div className="relative md:absolute md:inset-0 flex flex-col justify-start bg-[#2d4a3e] p-5 md:translate-y-full md:transition-transform md:duration-300 md:group-hover:translate-y-0">
                                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                                    {card.title1} <br /> {card.title2}
                                </h3>
                                <div className="my-3 md:my-5 h-px w-4 bg-white/50" />
                                <p className="text-sm md:text-lg text-white/80 whitespace-pre-line leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center pt-14 md:pt-25 px-4">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-3.5 px-6 md:p-4 md:px-8 rounded-full bg-[#2C4A3E] text-white text-base md:text-xl hover:bg-[#192b24] transition-colors shadow-md"
                    >
                        <span>진료과목 자세히보기</span>
                        <img src="/images/right_arr_white.svg" alt="" className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <section
                id="location"
                className="w-full py-20 md:py-[120px] flex flex-col items-center bg-gradient-to-b from-[#EBF2EA] to-[#F4F8F3]"
            >
                <div className="w-full max-w-[1000px] px-4 flex flex-col items-center">
                    <SectionHeading
                        topTitle="GIDEON'S Location"
                        centerTitle="오시는 길"
                        desc="처음 방문하시는 분도 쉽게 찾으실 수 있습니다."
                        isDesc={true}
                    />

                    <div className="mt-10 md:mt-[60px] w-full max-w-[640px] flex flex-col gap-4 md:gap-[22px]">
                        <div className="w-full bg-white rounded-[10px] p-4 md:p-5 flex items-center gap-4 md:gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <div className="w-10 h-10 md:w-[50px] md:h-[50px] bg-green-600 rounded-full flex items-center justify-center shrink-0">
                                <img
                                    src="/images/i_loca_02.svg"
                                    alt=""
                                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                                />
                            </div>
                            <p className="text-base sm:text-lg md:text-[22px] font-semibold text-green-600 tracking-tight break-keep whitespace-normal">
                                모란역 4번 출구에서 도보 2분
                            </p>
                        </div>

                        <div className="w-full bg-white rounded-[10px] p-4 md:p-5 flex items-center gap-4 md:gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <div className="w-10 h-10 md:w-[50px] md:h-[50px] bg-green-600 rounded-full flex items-center justify-center shrink-0">
                                <img
                                    src="/images/i_loca_01.svg"
                                    alt=""
                                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                                />
                            </div>
                            <p className="text-base sm:text-lg md:text-[22px] font-semibold text-[#233a31] tracking-tight break-keep whitespace-normal">
                                국민은행 건물 3층
                            </p>
                        </div>
                    </div>

                    <a
                        href="/location"
                        className="mt-10 md:mt-[70px] flex items-center justify-center bg-green-600 text-white text-base md:text-[20px] font-bold px-6 md:px-8 h-12 md:h-[55px] rounded-full shadow-md transition-all gap-2 group"
                    >
                        <span>오시는길 자세히보기</span>
                        <span className="text-[12px] md:text-[13px] opacity-80 group-hover:translate-x-1 transition-transform">
                            ＞
                        </span>
                    </a>
                </div>
            </section>

            <div id="ask">
                <AskSection />
            </div>

            <div id="map" className="w-full">
                <MapSection />
            </div>
        </div>
    );
}
