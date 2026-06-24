'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface SubItem {
    name: string;
    href: string;
}
interface MenuItem {
    title: string;
    href: string;
    subs: SubItem[];
}

const menus: MenuItem[] = [
    {
        title: '기드온치과',
        href: '/about',
        subs: [
            { name: '병원철학', href: '/about/philosophy' },
            { name: '기드온의 약속', href: '/about/promise' },
            { name: '둘러보기', href: '/about/tour' },
        ],
    },
    {
        title: '임플란트',
        href: '/implant',
        subs: [
            { name: '진행과정', href: '/implant/process' },
            { name: '보험 임플란트', href: '/implant/insurance' },
        ],
    },
    {
        title: '의료진소개',
        href: '/doctors',
        subs: [{ name: '의료진소개', href: '/doctors' }],
    },
    {
        title: '진료안내',
        href: '/guide',
        subs: [
            { name: 'AI 네비게이션 임플란트', href: '/guide/ai-navigation' },
            { name: '물방울레이저 치주관리', href: '/guide/laser' },
            { name: '티스캔 교합관리', href: '/guide/t-scan' },
            { name: '시니어 라미네이트', href: '/guide/senior' },
        ],
    },
    {
        title: '가격안내',
        href: '/price',
        subs: [{ name: '가격안내', href: '/price' }],
    },
    {
        title: '오시는길',
        href: '/location',
        subs: [{ name: '오시는길', href: '/location' }],
    },
];

export default function Header() {
    const navRef = useRef<HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false); // 모바일 메뉴 열림
    const [subOpen, setSubOpen] = useState<number | null>(null); // 모바일 열린 서브 index

    // 스크롤 시 상단 복구 완벽 제어
    useGSAP(
        () => {
            ScrollTrigger.create({
                start: 'top top',
                end: 80,
                onLeave: () => navRef.current?.classList.add('on'),
                onEnterBack: () => navRef.current?.classList.remove('on'),
            });
        },
        { scope: navRef },
    );

    return (
        <header ref={navRef} className="group fixed inset-x-0 top-0 z-50 flex flex-col">
            {/* [1층 레이어] 메인 GNB 감싸는 전체 배경판 */}
            <div
                className={`relative z-20 w-full transition-colors duration-300
                    bg-transparent
                    group-hover:bg-white group-hover:shadow-md
                    group-[.on]:bg-white group-[.on]:shadow-md
                    ${menuOpen ? 'bg-white shadow-md' : ''}`}
            >
                {/* [경아 님 원본 복구] 중앙 정렬 및 여백을 담당하는 내부 마스터 컨테이너 */}
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                    {/* 로고 */}
                    <Link href="/" className="flex items-center">
                        <img
                            src="/images/common/logo_w.svg"
                            alt="기드온치과"
                            className={`h-8 ${menuOpen ? 'hidden' : 'block group-hover:hidden group-[.on]:hidden'}`}
                        />
                        <img
                            src="/images/common/logo_g.svg"
                            alt="기드온치과"
                            className={`h-8 ${menuOpen ? 'block' : 'hidden group-hover:block group-[.on]:block'}`}
                        />
                    </Link>

                    {/* PC 메뉴 */}
                    <nav className="hidden lg:flex">
                        {menus.map((menu) => (
                            <div
                                key={menu.title}
                                className="group/menu relative flex h-20 w-[120px] items-center justify-center"
                            >
                                <Link
                                    href={menu.href}
                                    className="px-2 py-4 text-[16px] font-semibold text-white transition-colors
                                        group-hover:text-green-600
                                        group-[.on]:text-green-600
                                        group-hover/menu:text-[#1c2f2a]"
                                >
                                    {menu.title}
                                </Link>

                                {/* 각 메뉴별 서브 콘텐츠 텍스트 */}
                                <div className="absolute left-0 top-20 flex h-[280px] w-full origin-top scale-y-0 flex-col items-center gap-4 px-2 pt-[30px] pb-8 opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100 group-hover/menu:bg-[#DAB551] z-30">
                                    {menu.subs.map((sub) => (
                                        <Link
                                            key={sub.name}
                                            href={sub.href}
                                            className="group/sub relative break-keep text-center text-[14px] font-semibold leading-snug text-ink-500 transition-colors group-hover/menu:text-white"
                                        >
                                            {sub.name}
                                            <span className="absolute -bottom-1 left-1/2 h-[1.5px] w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover/sub:w-full" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* 우측 유틸리티 */}
                    <div className="flex items-center gap-3">
                        <button
                            className={`flex items-center gap-2 rounded-full border px-3 py-2 transition-colors ${
                                menuOpen
                                    ? 'border-gray-300 text-green-600'
                                    : 'border-white/60 text-white group-hover:border-gray-300 group-hover:text-green-600 group-[.on]:border-gray-300 group-[.on]:text-green-600'
                            }`}
                        >
                            <img
                                src="/images/common/l_lang_w.svg"
                                alt="언어"
                                className={`h-4 w-4 ${menuOpen ? 'hidden' : 'block group-hover:hidden group-[.on]:hidden'}`}
                            />
                            <img
                                src="/images/common/l_lang_g.svg"
                                alt="언어"
                                className={`h-4 w-4 ${menuOpen ? 'block' : 'hidden group-hover:block group-[.on]:block'}`}
                            />
                            <span className="font-ui text-xs font-semibold">KO</span>
                        </button>

                        {/* 햄버거 버튼 분기 처리 */}
                        <button
                            className="lg:hidden flex items-center justify-center w-8 h-8 focus:outline-none"
                            onClick={() => {
                                setMenuOpen((v) => !v);
                                setSubOpen(null);
                            }}
                            aria-label="메뉴"
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? (
                                <svg
                                    width="26"
                                    height="26"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#2c4a3e"
                                    strokeWidth="2"
                                >
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                    <line x1="6" y1="18" x2="18" y2="6" />
                                </svg>
                            ) : (
                                <>
                                    <img
                                        src="/images/common/l_m_ham_w.png"
                                        alt="메뉴 열기"
                                        className={`h-6 w-6 ${menuOpen ? 'hidden' : 'block group-hover:hidden group-[.on]:hidden'}`}
                                    />
                                    <img
                                        src="/images/common/l_m_ham_g.png"
                                        alt="메뉴 열기"
                                        className={`h-6 w-6 ${menuOpen ? 'block' : 'hidden group-hover:block group-[.on]:block'}`}
                                    />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* [2층 레이어] PC 서브 패널 배경판: 메인메뉴 바로 밑에서 열리며 독립 그림자(shadow-md) 생성 */}
            <div className="absolute left-0 top-20 z-10 hidden h-[280px] w-full origin-top scale-y-0 border-b border-gray-200 bg-white opacity-0 shadow-md transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100 lg:block" />

            {/* 모바일 2-Pane 서브 메뉴 디자인 */}
            {menuOpen && (
                <nav className="fixed inset-x-0 top-20 bottom-0 z-50 flex bg-white lg:hidden">
                    <div className="w-1/3 border-r border-gray-100 bg-gray-50 flex flex-col">
                        {menus.map((menu, i) => {
                            const isSelected = subOpen === i || (subOpen === null && i === 0);
                            if (subOpen === null && i === 0) {
                                setTimeout(() => setSubOpen(0), 0);
                            }

                            return (
                                <button
                                    key={menu.title}
                                    className={`w-full px-4 py-5 text-left text-[14px] font-semibold border-b border-gray-100 transition-all ${
                                        isSelected
                                            ? 'bg-white text-green-600 border-l-4 border-l-green-600'
                                            : 'text-gray-500'
                                    }`}
                                    onClick={() => setSubOpen(i)}
                                >
                                    {menu.title}
                                </button>
                            );
                        })}
                    </div>

                    <div className="w-2/3 bg-[#DAB551] p-6 flex flex-col gap-2 overflow-y-auto">
                        <span className="text-[11px] uppercase tracking-wider text-white/60 font-bold mb-2">
                            {menus[subOpen ?? 0]?.title} MENU
                        </span>
                        {menus[subOpen ?? 0]?.subs.map((sub) => (
                            <Link
                                key={sub.name}
                                href={sub.href}
                                className="break-keep rounded-lg py-3 px-4 text-[15px] font-semibold text-white hover:bg-black/5 active:bg-black/10 transition-colors block"
                                onClick={() => setMenuOpen(false)}
                            >
                                {sub.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
