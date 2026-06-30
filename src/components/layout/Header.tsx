'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
        href: '/about/philosophy',
        subs: [
            { name: '병원철학', href: '/about/philosophy' },
            { name: '기드온의 약속', href: '/about/promise' },
            { name: '오시는길', href: '/about/location' },
            { name: '둘러보기', href: '/about/tour' },
        ],
    },
    {
        title: '의료진소개',
        href: '/doctors',
        subs: [{ name: '의료진소개', href: '/doctors' }],
    },
    {
        title: '임플란트',
        href: '/implant/process',
        subs: [
            { name: '진행과정', href: '/implant/process' },
            { name: '보험 임플란트', href: '/implant/insurance' },
        ],
    },
    {
        title: '진료안내',
        href: '/guide/ai-navigation',
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
        title: '기드온칼럼',
        href: '/column',
        subs: [{ name: '기드온칼럼', href: '/column' }],
    },
];

export default function Header() {
    const navRef = useRef<HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [subOpen, setSubOpen] = useState<number | null>(null);
    const pathname = usePathname();

    // GSAP 로직 — 절대 수정 금지
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
            {/* #STYLE: 모바일에서 헤더(로고 영역/상단바) 클릭 시 펼쳐진 메뉴가 닫히도록 처리.
                햄버거 버튼은 자체 onClick에서 setMenuOpen을 직접 토글하므로 이 핸들러와 중복 호출돼도
                동일한 다음 상태로 수렴해 문제없음(버튼 클릭 시: 상단바 onClick으로 close → 버튼 onClick으로 toggle) */}
            <div
                className={`relative z-20 w-full transition-colors duration-300
                    bg-transparent
                    group-hover:bg-white group-hover:shadow-md
                    group-[.on]:bg-white group-[.on]:shadow-md
                    ${menuOpen ? 'bg-white shadow-md' : ''}`}
                onClick={(e) => {
                    // 햄버거 버튼이나 그 자식 요소 클릭은 버튼 자체 로직에 맡기고 여기서는 무시
                    const target = e.target as HTMLElement;
                    if (target.closest('button[aria-label="메뉴"]')) return;
                    setMenuOpen(false);
                }}
            >
                {/* #STYLE: 헤더 max-w 대화면 확장 */}
                <div className="mx-auto flex h-20 max-w-7xl 2xl:max-w-[1600px] items-center justify-between px-4 md:px-6 2xl:px-10">
                    <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
                        <img
                            src="/images/common/logo_w.svg"
                            alt="기드온치과 로고"
                            className={`h-8 md:h-9 ${menuOpen ? 'hidden' : 'block group-hover:hidden group-[.on]:hidden'}`}
                        />
                        <img
                            src="/images/common/logo_g.svg"
                            alt="기드온치과 로고"
                            className={`h-8 md:h-9 ${menuOpen ? 'block' : 'hidden group-hover:block group-[.on]:block'}`}
                        />
                    </Link>

                    {/* PC 메뉴 */}
                    <nav className="hidden lg:flex">
                        {menus.map((menu) => (
                            <div
                                key={menu.title}
                                // #STYLE: 2xl에서 메뉴 아이템 너비 확장
                                className="group/menu relative flex h-20 w-[110px] xl:w-[120px] 2xl:w-[140px] items-center justify-center"
                            >
                                <Link
                                    href={menu.href}
                                    className="px-2 py-4 text-[16px] xl:text-[17px] 2xl:text-[18px] font-semibold text-white transition-colors
                                        group-hover:text-green-600
                                        group-[.on]:text-green-600
                                        group-hover/menu:text-[#1c2f2a]"
                                >
                                    {menu.title}
                                </Link>

                                <div className="absolute left-0 top-20 flex h-[280px] w-full origin-top scale-y-0 flex-col items-center gap-4 px-2 pt-[30px] pb-8 opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100 group-hover/menu:bg-[#DAB551] z-30">
                                    {menu.subs.map((sub) => {
                                        // #STYLE: 현재 보고 있는 페이지의 서브메뉴는 호버 여부와 상관없이 밑줄 항상 표시
                                        const isCurrentPage = pathname === sub.href;
                                        return (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="group/sub relative break-keep text-center text-[13px] xl:text-[14px] font-semibold leading-snug text-ink-500 transition-colors group-hover/menu:text-white"
                                            >
                                                {sub.name}
                                                {/* #STYLE: 밑줄 두께 1px로 축소 (이전 2px가 너무 굵다는 피드백 반영) */}
                                                <span
                                                    className={`absolute -bottom-1 left-1/2 h-[1px] -translate-x-1/2 bg-white transition-all duration-300 group-hover/sub:w-full ${
                                                        isCurrentPage ? 'w-full' : 'w-0'
                                                    }`}
                                                />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* 햄버거 버튼 */}
                    <div className="flex items-center gap-3">
                        <button
                            className="lg:hidden flex items-center justify-center w-8 h-8 focus:outline-none"
                            onClick={() => {
                                setMenuOpen((v) => {
                                    const next = !v;
                                    // #STYLE: 햄버거 메뉴를 열 때 히어로 안의 드롭다운도 닫히도록 전역 이벤트 발행
                                    // (헤더와 히어로가 서로 다른 컴포넌트라 직접 상태 공유가 안 되어 이벤트로 연결)
                                    if (next) {
                                        window.dispatchEvent(new Event('header-mobile-menu-open'));
                                    }
                                    return next;
                                });
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

            {/* PC 서브 패널 배경판 */}
            <div className="absolute left-0 top-20 z-10 hidden h-[280px] w-full origin-top scale-y-0 border-b border-gray-200 bg-white opacity-0 shadow-md transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100 lg:block" />

            {/* 모바일 2-Pane 서브 메뉴 */}
            {menuOpen &&
                (() => {
                    // #STYLE: 현재 페이지가 속한 메뉴를 기본 열림 상태로 매칭
                    const currentMenuIndex = menus.findIndex((m) => m.subs.some((s) => s.href === pathname));
                    const defaultIndex = currentMenuIndex !== -1 ? currentMenuIndex : 0;

                    return (
                        <nav className="fixed inset-x-0 top-20 bottom-0 z-50 flex bg-white lg:hidden">
                            {/* #STYLE: 모바일 서브메뉴 스크롤 — 항목 수가 적으면(특히 오른쪽 패널) 실제로는 스크롤이 발생하지 않음.
                            화면이 작아 항목이 넘칠 때만 스크롤되도록 overflow-y-auto는 유지하되,
                            스크롤바 자체가 시각적으로 거슬리지 않도록 얇게 처리(scrollbar-thin은 브라우저 지원에 따라 다름) */}
                            <div className="w-1/3 border-r border-gray-100 bg-gray-50 flex flex-col overflow-y-auto [scrollbar-width:thin]">
                                {menus.map((menu, i) => {
                                    const isSelected = subOpen === i || (subOpen === null && i === defaultIndex);
                                    if (subOpen === null && i === defaultIndex) {
                                        setTimeout(() => setSubOpen(defaultIndex), 0);
                                    }

                                    return (
                                        <button
                                            key={menu.title}
                                            className={`w-full px-3 py-4 text-left text-[13px] font-semibold border-b border-gray-100 transition-all ${
                                                isSelected
                                                    ? 'bg-white text-green-600 border-l-2 border-l-green-600'
                                                    : 'text-gray-500'
                                            }`}
                                            onClick={() => setSubOpen(i)}
                                        >
                                            {menu.title}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="w-2/3 bg-[#DAB551] p-5 flex flex-col gap-2 overflow-y-auto [scrollbar-width:thin]">
                                <span className="text-[11px] uppercase tracking-wider text-white/60 font-bold mb-2">
                                    {menus[subOpen ?? defaultIndex]?.title} MENU
                                </span>
                                {menus[subOpen ?? defaultIndex]?.subs.map((sub) => {
                                    const isCurrentPage = pathname === sub.href;
                                    return (
                                        <Link
                                            key={sub.name}
                                            href={sub.href}
                                            // #STYLE: 현재 페이지인 서브메뉴에 밑줄 표시
                                            className={`relative break-keep rounded-lg py-3 px-4 text-[14px] font-semibold text-white hover:bg-black/5 active:bg-black/10 transition-colors block ${
                                                isCurrentPage ? 'underline underline-offset-4 decoration-2' : ''
                                            }`}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {sub.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </nav>
                    );
                })()}
        </header>
    );
}
