import Link from 'next/link';
import { Fragment } from 'react';

const policyLinks = [
    { name: '비급여수가표', href: '/policy/non-benefit' },
    { name: '개인정보처리방침', href: '/policy/privacy' },
    { name: '이용약관', href: '/policy/terms' },
];

//#LINK: 사업자등록증 기준 정보로 업데이트. 전화번호는 사업자등록증에 명시되어 있지 않아 임시값 유지 — 실제 대표번호로 교체 필요
const info = [
    '기드온치과',
    '대표 : 성요길',
    '경기도 성남시 중원구 성남대로 1126, 303호·304호·305호(메가프라자)',
    '전화 : 02-000-0000',
    '사업자등록번호 : 898-23-02423',
];

export default function Footer() {
    return (
        // #STYLE: 모바일 좌측 정렬(items-start, text-left), md 이상 가운데 정렬(items-center, text-center)로 반응형 구조 변경
        <footer className="w-full bg-[#2d433b] px-5 md:px-6 pt-12 md:pt-16 2xl:pt-20 pb-10 md:pb-12 text-white/80">
            <div className="mx-auto flex max-w-7xl 2xl:max-w-[1600px] flex-col items-start text-left md:items-center md:text-center">
                <img src="/images/common/logo_f_w.svg" alt="기드온치과" className="mb-6 md:mb-8 h-7 md:h-9" />

                {/* #STYLE: 모바일 터치 영역 확보를 위해 텍스트 크기(13px) 및 gap 조정 */}
                <nav className="mb-6 md:mb-6 flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2">
                    {policyLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="text-[13px] md:text-[12px] font-semibold text-white transition-colors hover:text-white/70"
                        >
                            {l.name}
                        </Link>
                    ))}
                </nav>

                {/* #STYLE: 모바일 세로 배치 시 위계 구분을 위해 첫 번째 항목(상호명) 폰트 가중치 추가 */}
                {/* #ISSUE: 모바일에서 주소 등 정보 텍스트가 길어 줄바꿈이 발생할 때 가독성이 떨어지는지 실기기 확인 필요 */}
                <div className="mb-8 md:mb-4 flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center gap-y-2 md:gap-y-1 md:gap-x-3 text-[12px] md:text-[11px] leading-relaxed break-keep text-white/70">
                    {info.map((text, i) => (
                        <Fragment key={text}>
                            {i > 0 && <span className="hidden text-white/30 md:inline">|</span>}
                            <span className={i === 0 ? 'font-semibold text-white' : ''}>{text}</span>
                        </Fragment>
                    ))}
                </div>

                <p className="text-[10px] tracking-wide text-white/40 break-keep">
                    COPYRIGHT (C) 2026 GIDEON DENTAL CLINIC ALL RIGHTS RESERVED. MADE BY 바이오애드랩.
                </p>
            </div>
        </footer>
    );
}
