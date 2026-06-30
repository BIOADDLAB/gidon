'use client';

import { useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionHeading from './common/SectionHeading';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface TechSectionProps {
    topTitle: string;
    centerTitle: string;
    desc: ReactNode;
    imageSrc: string;
    imageAlt: string;
    imgClass?: string;
    isMargin?: string;
}

export default function TechSection({
    topTitle,
    centerTitle,
    desc,
    imageSrc,
    imageAlt,
    imgClass = 'w-[65%] max-w-[420px]',
    isMargin,
}: TechSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const archRef = useRef<SVGSVGElement>(null);

    useGSAP(
        () => {
            gsap.from(archRef.current, {
                scaleY: 0,
                opacity: 0,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                },
            });
        },
        { scope: containerRef },
    );

    return (
        // #STYLE: 모바일 상단 패딩 축소(pt-14), 데스크톱(md:pt-[100px]) 원본 규격 보존
        <section className="relative flex w-full flex-col items-center overflow-hidden bg-[#F9F9F9] pt-14 md:pt-[100px]">
            <div className="px-4 text-center z-10 relative">
                <SectionHeading topTitle={topTitle} centerTitle={centerTitle} desc={desc} isDesc={true} />
            </div>

            {/* #STYLE: 마진 및 최소 높이 반응형 대응 */}
            <div
                ref={containerRef}
                className="relative mt-8 md:mt-[55px] flex w-full justify-center min-h-[200px] md:min-h-[320px]"
            >
                {/* #STYLE: 아치 배경판의 세로 높이 가변 분기 및 preserveAspectRatio 가로 와이드 핏 방어 */}
                <div className="absolute bottom-0 left-0 w-full h-[140px] md:h-[230px] bg-[#D9D9D9]/5 overflow-hidden pointer-events-none z-0">
                    <svg
                        ref={archRef}
                        className="w-full h-full origin-bottom"
                        viewBox="0 0 1359 230"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1358.9 195.588C1358.9 303.608 1095.11 244.465 719.863 244.465C344.612 244.465 0 303.608 0 195.588C0 87.5676 304.201 0 679.452 0C1054.7 0 1358.9 87.5676 1358.9 195.588Z"
                            fill="url(#paint0_linear_responsive_clear)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_responsive_clear"
                                x1="679.45"
                                y1="0"
                                x2="679.45"
                                y2="230"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0%" stopColor="#2C4A3E" stopOpacity="0.12" />
                                <stop offset="18%" stopColor="#2C4A3E" stopOpacity="0.04" />
                                <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* #STYLE: 1번 원본 사진의 완벽한 구도 유지를 위해 relative z-10 원래 위치값으로 복원 완료 */}
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className={`relative z-10 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.05)] ${imgClass}`}
                />
            </div>
        </section>
    );
}
