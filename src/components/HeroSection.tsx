// components/HeroSection.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
    mainTitle: string;
    subTitle: string;
    imgSrc: string;
    subNavItem: string;
    pageName: string;
    isNav?: boolean;
    isGreen?: boolean;
    subMenuList?: string[];
}

export default function HeroSection({
    mainTitle,
    subTitle,
    pageName,
    subNavItem,
    imgSrc,
    isNav,
    isGreen = false,
    subMenuList = [],
}: HeroProps) {
    const homeIconSrc = isGreen ? '/images/i_home_w.svg' : '/images/i_home.svg';
    const arrowIconSrc = isGreen ? '/images/i_arr_right_w.svg' : '/images/i_arr_right.svg';

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleHeaderMenuOpen = () => setIsMenuOpen(false);
        window.addEventListener('header-mobile-menu-open', handleHeaderMenuOpen);
        return () => window.removeEventListener('header-mobile-menu-open', handleHeaderMenuOpen);
    }, []);

    const getArrowIcon = () => {
        if (isGreen) {
            return isMenuOpen ? '/images/i_up_arr_w.svg' : '/images/i_down_arr_w.svg';
        } else {
            return isMenuOpen ? '/images/i_up_arr_b.svg' : '/images/i_down_arr_b.svg';
        }
    };

    return (
        <section className="flex flex-col justify-center items-center relative h-[380px] sm:h-[420px] md:h-[460px] lg:h-[440px] 2xl:h-[520px]">
            {/* #STYLE: 인테리어 사진 노출 극대화를 위해 모바일 높이를 h-[260px]에서 h-[380px]로 과감히 확장, 태블릿 구간(sm:, md:) 높이도 비례하여 상향 스케일링 */}
            <Image
                src={imgSrc}
                alt={`기드온치과 ${pageName || '진료실'} 인테리어`}
                fill
                priority
                sizes="100vw"
                /* #STYLE: 세로형 모바일 디바이스에서 인테리어 구도가 끊기거나 천장만 과하게 잘리지 않도록 황금 비율 보정(center_35%) */
                className="object-cover object-[center_35%] md:object-[center_25%] lg:object-center -z-10"
            />
            <div className="absolute inset-0 -z-10" style={{ backgroundColor: 'rgba(87, 87, 87, 0.40)' }} />

            {/* #STYLE: 가독성 보장을 위한 폰트 스펙 유지하되 레이아웃 확장으로 상하 마진 여유 확보 */}
            <h2 className="font-accent text-[14px] md:text-[17px] lg:text-[20px] mb-1.25 text-white">{subTitle}</h2>
            <h1 className="text-[26px] md:text-[33px] lg:text-[40px] 2xl:text-[46px] text-white font-hero text-center px-4 break-keep pb-10 sm:pb-12 md:pb-0">
                {mainTitle}
            </h1>

            {isNav ? (
                <div
                    className={`absolute bottom-0 w-full max-w-[1000px] px-4 md:px-[30px] 2xl:max-w-[1200px] py-[14px] md:py-[20px] ${
                        isGreen ? 'bg-green-600 text-white' : 'bg-white/20 text-black'
                    } rounded-t-[20px]`}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 min-w-0">
                            <Link className="block p-1 shrink-0" href="/">
                                <img
                                    src={homeIconSrc}
                                    alt="홈 바로가기"
                                    className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] block"
                                />
                            </Link>
                            <img src={arrowIconSrc} alt="" className="shrink-0" />
                            <h3 className="font-ui p-1 text-[14px] md:text-[18px] truncate">{pageName}</h3>
                        </div>

                        <div className="relative shrink-0">
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`flex items-center justify-between w-[160px] md:w-[240px] px-4 md:px-5 py-2 rounded-[8px] text-[14px] md:text-[18px] font-semibold focus:outline-none transition-colors border ${
                                    isGreen ? 'text-white border-[#fff]' : 'text-[#333] border-[#333]'
                                }`}
                            >
                                <span className="truncate">{subNavItem}</span>
                                <img
                                    src={getArrowIcon()}
                                    alt=""
                                    className="w-[20px] md:w-[24px] h-auto transition-transform duration-200 shrink-0 ml-1"
                                />
                            </button>

                            {isMenuOpen && subMenuList.length > 0 && (
                                <div className="absolute left-0 top-full mt-[8px] w-full bg-white rounded-[12px] shadow-[0_10px_25px_rgba(0,0,0,0.08)] py-3 z-40 border border-gray-100">
                                    <ul className="flex flex-col">
                                        {subMenuList.map((menu, idx) => {
                                            const isSelected = menu === subNavItem;

                                            let targetHref = '/';
                                            if (menu === '병원철학') targetHref = '/about/philosophy';
                                            else if (menu === '기드온의 약속') targetHref = '/about/promise';
                                            else if (menu === '둘러보기') targetHref = '/about/tour';
                                            else if (menu === '진행과정') targetHref = '/implant/process';
                                            else if (menu === '보험 임플란트') targetHref = '/implant/insurance';
                                            else if (menu === '의료진소개') targetHref = '/doctors';
                                            else if (menu === 'AI 네비게이션 임플란트')
                                                targetHref = '/guide/ai-navigation';
                                            else if (menu === '물방울레이저 치주관리') targetHref = '/guide/laser';
                                            else if (menu === '티스캔 교합관리') targetHref = '/guide/t-scan';
                                            else if (menu === '시니어 라미네이트') targetHref = '/guide/senior';
                                            else if (menu === '가격안내') targetHref = '/price';
                                            else if (menu === '기드온칼럼') targetHref = '/column';
                                            else if (menu === '오시는길') targetHref = '/about/location';

                                            return (
                                                <li key={idx}>
                                                    <Link
                                                        href={targetHref}
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className={`block relative px-5 py-2 text-[13px] md:text-[15px] transition-colors hover:bg-gray-50 ${
                                                            isSelected
                                                                ? 'text-green-600 bg-yellow/50 font-bold'
                                                                : 'text-[#555555]'
                                                        }`}
                                                    >
                                                        {menu}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    );
}
