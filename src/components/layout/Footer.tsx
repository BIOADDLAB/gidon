import Link from 'next/link';
import { Fragment } from 'react';

const policyLinks = [
    { name: '비급여수가표', href: '/policy/non-benefit' },
    { name: '개인정보처리방침', href: '/policy/privacy' },
    { name: '이용약관', href: '/policy/terms' },
];

const info = [
    '기드온치과',
    '대표 : 000',
    '경기도 성남시 중원구 성남대로 1126, 메가프라자 3층',
    '전화 : 02-000-0000',
    '사업자등록번호 : 031-26-2473',
];

export default function Footer() {
    return (
        <footer className="w-full bg-[#2d433b] px-6 pt-16 pb-12 text-white/80 md:pt-20">
            <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
                <img src="/images/common/logo_f_w.svg" alt="기드온치과" className="mb-8 h-9" />

                <nav className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                    {policyLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="text-[12px] font-semibold text-white transition-colors hover:text-white/70"
                        >
                            {l.name}
                        </Link>
                    ))}
                </nav>

                <div className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] leading-relaxed">
                    {info.map((text, i) => (
                        <Fragment key={text}>
                            {i > 0 && <span className="hidden text-white/30 md:inline">|</span>}
                            <span>{text}</span>
                        </Fragment>
                    ))}
                </div>

                <p className="text-[10px] tracking-wide text-white/40">
                    COPYRIGHT (C) 2026 GIDEON DENTAL CLINIC ALL RIGHTS RESERVED. MADE BY 바이오애드랩.
                </p>
            </div>
        </footer>
    );
}
