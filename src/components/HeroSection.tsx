'use client';

import { useState } from 'react';
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

    // isGreen 여부와 열림/닫힘 상태에 따른 화살표 아이콘 로직
    const getArrowIcon = () => {
        if (isGreen) {
            return isMenuOpen ? '/images/i_up_arr_w.svg' : '/images/i_down_arr_w.svg';
        } else {
            return isMenuOpen ? '/images/i_up_arr_b.svg' : '/images/i_down_arr_b.svg';
        }
    };

    return (
        <section className="flex flex-col justify-center items-center relative h-[440px]">
            <Image
                src={imgSrc}
                alt="배경 이미지"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center -z-10"
            />
            <h2 className="font-accent text-[20px] mb-1.25 text-white">{subTitle}</h2>
            <h1 className="text-[40px] text-white font-hero">{mainTitle}</h1>

            {isNav ? (
                <div
                    className={`absolute bottom-0 w-[1000px] mx-auto px-[30px] py-[20px] ${
                        isGreen ? 'bg-green-600 text-white' : 'bg-white/20 text-black'
                    } rounded-t-[20px]`}
                >
                    <div className="flex items-center justify-between">
                        {/* 왼쪽 영역: 홈 아이콘 및 히스토리 경로 */}
                        <div className="flex items-center gap-1">
                            <Link className="block p-1" href="/">
                                <img src={homeIconSrc} alt="홈 바로가기 버튼" className="w-[24px] h-[24px] block" />
                            </Link>
                            <img src={arrowIconSrc} alt="" />
                            <h3 className="font-ui p-1 text-[18px]">{pageName}</h3>
                        </div>

                        {/* 오른쪽 영역: 너비 맞춤 드롭다운 */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`flex items-center justify-between w-[240px] px-5 py-2 rounded-[8px] text-[18px] font-semibold focus:outline-none transition-colors border rounded-[8px] ${
                                    isGreen ? 'text-white  border-[#fff] ' : 'border-[#333]'
                                }`}
                            >
                                <span>{subNavItem}</span>
                                <img
                                    src={getArrowIcon()}
                                    alt=""
                                    className="w-[24px] h-auto transition-transform duration-200"
                                />
                            </button>

                            {/* 하단 드롭다운 박스: left-0 w-full로 부모 버튼 너비 그대로 상속 */}
                            {isMenuOpen && subMenuList.length > 0 && (
                                <div className="absolute left-0 top-full mt-[8px] w-full bg-white rounded-[12px] shadow-[0_10px_25px_rgba(0,0,0,0.08)] py-3 z-50 border border-gray-100">
                                    <ul className="flex flex-col">
                                        {subMenuList.map((menu, idx) => {
                                            const isSelected = menu === subNavItem;
                                            return (
                                                <li key={idx}>
                                                    <Link
                                                        href="/"
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className={`block relative px-5 py-2 text-[15px]  ${
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
