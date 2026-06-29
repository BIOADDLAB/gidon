'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SectionHeading from './common/SectionHeading';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface TechSectionProps {
    topTitle: string;
    centerTitle: string;
    desc: string;
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
        <section className="relative flex w-full flex-col items-center overflow-hidden bg-[#F9F9F9] pt-[100px]">
            <div className="px-4 text-center z-10 relative">
                <SectionHeading topTitle={topTitle} centerTitle={centerTitle} desc={desc} isDesc={true} />
            </div>

            <div ref={containerRef} className="relative mt-[55px] flex w-full justify-center min-h-[320px]">
                <div className="absolute bottom-0 left-0 w-full h-[230px] bg-[#D9D9D9]/5 overflow-hidden pointer-events-none z-0">
                    <svg
                        ref={archRef}
                        className="w-full h-[230px] origin-bottom"
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

                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className={`relative z-10  object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.05)] ${imgClass}`}
                />
            </div>
        </section>
    );
}
