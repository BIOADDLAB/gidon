'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import HeroSection from './../../components/HeroSection';
import SectionHeading from '@/components/common/SectionHeading';
import MapSection from './../../components/MapStion';
import TourSwiper from '@/components/TourSwiper';
import FaqSection from '@/components/FaqSection';
import AskSection from '@/components/AskSection';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface AboutLayoutProps {
    activeSection: 'philosophy' | 'promise' | 'tour';
}

export default function AboutLayout({ activeSection }: AboutLayoutProps) {
    const aboutMenuList = ['병원철학', '기드온의 약속', '둘러보기'];
    const containerRef = useRef<HTMLDivElement>(null);
    const archRef = useRef<SVGSVGElement>(null);

    // URL 주소가 바뀔 때 해당 섹션으로 부드럽게 스크롤 이동
    useEffect(() => {
        const targetElement = document.getElementById(activeSection);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }, [activeSection]);

    // GSAP 로직 — 절대 수정 금지
    useGSAP(
        () => {
            gsap.from(archRef.current, {
                scaleY: 0,
                opacity: 0,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
            });
        },
        { scope: containerRef },
    );

    const subNavMap = {
        philosophy: '병원철학',
        promise: '기드온의 약속',
        tour: '둘러보기',
    };

    return (
        <main className="scroll-smooth">
            <HeroSection
                mainTitle="기드온치과"
                subTitle="About GIDEON"
                pageName="기드온치과"
                subNavItem={subNavMap[activeSection]}
                imgSrc="/images/bg_interior_3.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={aboutMenuList}
            />

            {/* 1. 병원철학 섹션 */}
            {/* #STYLE: py 대화면 확장 */}
            <section
                id="philosophy"
                className="w-full pt-[70px] md:pt-[100px] 2xl:pt-[130px] pb-[90px] md:pb-[130px] 2xl:pb-[160px] flex flex-col items-center bg-white scroll-mt-20"
            >
                <div className="w-full max-w-[1000px] 2xl:max-w-[1180px] px-4">
                    <SectionHeading
                        topTitle="GIDEON'S Story"
                        centerTitle="기드온치과의 이야기"
                        desc=""
                        isDesc={false}
                    />

                    <div className="mt-[40px] md:mt-[60px] flex flex-col md:flex-row justify-between items-center gap-[30px] md:gap-[50px]">
                        <div className="w-full md:w-[45%] shrink-0">
                            <div className="overflow-hidden rounded-[20px] shadow-sm">
                                <img
                                    src="/images/story.jpg"
                                    alt="기드온치과 진료 철학을 보여주는 손 맞잡은 이미지"
                                    className="w-full h-auto object-cover aspect-[4/5]"
                                />
                            </div>
                        </div>

                        {/* #STYLE: 모바일 폰트 축소, break-keep 추가 */}
                        <div className="w-full md:w-[50%] flex flex-col items-start text-[#444444] text-[14px] md:text-[16px] leading-[1.8] break-keep">
                            <p className="mb-[14px] md:mb-[16px] text-[17px] md:text-[20px] font-semibold text-[#414141] leading-[1.65]">
                                치과에 대한 걱정과 망설임을 잘 알기에,
                                <br />
                                기드온은 화려한 장비와 기술보다
                                <br />
                                따뜻한 마음을 먼저 전합니다.
                            </p>
                            <p className="text-[17px] md:text-[20px] font-normal text-[#414141] leading-[1.65] mb-[32px] md:mb-[45px]">
                                자연 치아는 가능하면 살리고,
                                <br />
                                꼭 필요할 때만 치료하며,
                                <br />
                                무엇을 해야 하는지 알아듣기 쉽게
                                <br />
                                차근차근 안내하겠습니다.
                            </p>

                            <div className="w-full h-[1px] bg-gray-200 my-2" />

                            <div className="mt-[36px] md:mt-[50px] font-hero">
                                <p className="text-[15px] md:text-[17px] text-[#515151] mb-2">
                                    &quot; 상심한 자들을 고치시며
                                    <br /> 그들의 상처를 싸매시는도다 &quot;
                                </p>
                                <span className="text-[13px] md:text-[14px] text-[#414141]">- 시편 147편 3절 -</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 아치 애니메이션 영역 */}
            <div
                ref={containerRef}
                className="relative w-full h-[100px] md:h-[140px] flex justify-center items-end bg-white overflow-hidden"
            >
                <div className="absolute bottom-0 left-0 w-full h-[100px] md:h-[140px] overflow-hidden pointer-events-none z-0">
                    <svg
                        ref={archRef}
                        className="w-full h-[100px] md:h-[140px] origin-bottom"
                        viewBox="0 0 1359 230"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1358.9 195.588C1358.9 303.608 1095.11 244.465 719.863 244.465C344.612 244.465 0 303.608 0 195.588C0 87.5676 304.201 0 679.452 0C1054.7 0 1358.9 87.5676 1358.9 195.588Z"
                            fill="url(#paint0_linear_about_arch_perfect)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_about_arch_perfect"
                                x1="679.45"
                                y1="0"
                                x2="679.45"
                                y2="230"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0%" stopColor="#2C4A3E" stopOpacity="0.12" />
                                <stop offset="18%" stopColor="#2C4A3E" stopOpacity="0.04" />
                                <stop offset="45%" stopColor="#2C4A3E" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            {/* 2. 기드온의 약속 섹션 */}
            <section
                id="promise"
                className="w-full pb-[80px] md:pb-[120px] flex flex-col items-center bg-white relative -mt-6 scroll-mt-20"
            >
                <div className="w-full max-w-[1000px] 2xl:max-w-[1180px] px-4">
                    <SectionHeading
                        topTitle="GIDEON'S Promise"
                        centerTitle="기드온치과의 약속"
                        desc={`흔들리지 않는 판단, 끝까지 지키는 약속으로 \n처음의 신뢰를 끝까지 지켜갑니다.`}
                        isDesc={true}
                    />

                    {/* #STYLE: 약속 카드 — 모바일 flex-col(아이콘 위/텍스트 아래), md 이상 flex-row 유지 */}
                    <div className="mt-[40px] md:mt-[60px] flex flex-col gap-5 max-w-[760px] mx-auto">
                        {/* 카드 1 */}
                        <div className="flex flex-col md:flex-row items-center md:items-center px-6 md:px-[62px] gap-4 md:gap-8 py-7 md:py-10 border-b border-green-600 text-center md:text-left">
                            <div className="w-[100px] h-[100px] md:w-[145px] md:h-[145px] shrink-0 bg-green-600 rounded-[18px] md:rounded-[22px] flex items-center justify-center shadow-md">
                                <img src="/images/i_gidon_01.svg" alt="" className="w-[65px] md:w-[95px] block" />
                            </div>
                            <div className="flex flex-col items-center md:items-start">
                                <h4 className="text-[20px] md:text-[25px] font-semibold text-[#233a31] mb-2 md:mb-4">
                                    정직한 진료
                                </h4>
                                <p className="text-[14px] md:text-[18px] font-medium text-[#666] break-keep leading-[1.7] md:leading-[1.75]">
                                    과잉 진료 없이 꼭 필요한 치료만 정직하게 권합니다. 덜하지도 더하지도 않게, 환자의
                                    치아 건강을 최우선으로 생각합니다.
                                </p>
                            </div>
                        </div>

                        {/* 카드 2 */}
                        <div className="flex flex-col md:flex-row items-center px-6 md:px-[62px] gap-4 md:gap-8 py-7 md:py-10 border-b border-green-600 text-center md:text-left">
                            <div className="w-[100px] h-[100px] md:w-[145px] md:h-[145px] shrink-0 bg-green-600 rounded-[18px] md:rounded-[22px] flex items-center justify-center shadow-md">
                                <img src="/images/i_gidon_02.svg" alt="" className="w-[65px] md:w-[95px] block" />
                            </div>
                            <div className="flex flex-col items-center md:items-start">
                                <h4 className="text-[20px] md:text-[25px] font-semibold text-[#233a31] mb-2">
                                    투명한 안내
                                </h4>
                                <p className="text-[14px] md:text-[18px] font-medium text-[#666] break-keep leading-[1.7] md:leading-[1.75]">
                                    예상치 못한 비용으로 부담을 느끼지 않도록 먼저 안내합니다. 모든 치료 계획과 비용을
                                    정직하고 정확하게 말씀드립니다.
                                </p>
                            </div>
                        </div>

                        {/* 카드 3 */}
                        <div className="flex flex-col md:flex-row items-center px-6 md:px-[62px] gap-4 md:gap-8 py-7 md:py-10 border-b border-green-600 text-center md:text-left">
                            <div className="w-[100px] h-[100px] md:w-[145px] md:h-[145px] shrink-0 bg-green-600 rounded-[18px] md:rounded-[22px] flex items-center justify-center shadow-md">
                                <img src="/images/i_gidon_03.svg" alt="" className="w-[65px] md:w-[95px] block" />
                            </div>
                            <div className="flex flex-col items-center md:items-start">
                                <h4 className="text-[20px] md:text-[25px] font-semibold text-[#233a31] mb-2 md:mb-[14px]">
                                    끝까지 책임
                                </h4>
                                <p className="text-[14px] md:text-[18px] font-medium text-[#666] break-keep leading-[1.7] md:leading-[1.75]">
                                    치료를 끝내는 것보다, 그 결과를 오래 유지하는 것이 더 중요하다고 생각합니다.
                                    오랫동안 튼튼하게 쓰는 결과를 위해 평생의 주치의로 함께 관리합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 자주 묻는 질문 */}
            <FaqSection isBg={false} />

            {/* 3. 둘러보기 섹션 */}
            <div id="tour" className="scroll-mt-20">
                <TourSwiper />
            </div>

            {/* 간편상담 폼 및 지도 */}
            <AskSection />
            <MapSection />
        </main>
    );
}
