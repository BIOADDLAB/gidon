'use client';

import { useState } from 'react';

export default function FloatingBanner() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // #STYLE: 모바일 right/bottom 조정 (엄지 손가락 닿기 쉬운 위치)
        <div className="fixed right-3 md:right-6 bottom-5 md:bottom-10 z-50 flex flex-col items-end select-none">
            <div
                className={`flex flex-col gap-[6px] md:gap-[10px] items-end w-[140px] md:w-[180px] mb-2.5 md:mb-4 transition-all duration-300 origin-bottom ${
                    isOpen
                        ? 'opacity-100 transform translate-y-0 pointer-events-auto'
                        : 'opacity-0 transform translate-y-4 pointer-events-none h-0 overflow-hidden'
                }`}
            >
                {/* #LINK: 챗봇 URL 연결 필요 */}
                {/* #STYLE: 모바일 버튼 높이/패딩 축소, 텍스트 줄바꿈 방지 */}
                <a
                    href="#"
                    className="flex items-center w-full h-[42px] md:h-[55px] bg-[#233a31] text-white rounded-full shadow-lg hover:bg-[#192b24] transition-all px-3 md:px-5 gap-2 md:gap-3 group"
                >
                    <img
                        src="/images/i_flo_01.svg"
                        alt=""
                        className="w-[20px] md:w-[30px] shrink-0 object-contain opacity-95 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-[12px] md:text-[14px] font-bold whitespace-nowrap">챗봇</span>
                </a>

                {/* #LINK: 실제 전화번호 교체 필요 */}
                <a
                    href="tel:032-564-2875"
                    className="flex items-center w-full h-[42px] md:h-[55px] bg-[#233a31] text-white rounded-full shadow-lg hover:bg-[#192b24] transition-all px-3 md:px-5 gap-2 md:gap-3 group"
                >
                    <img
                        src="/images/i_flo_02.svg"
                        alt=""
                        className="w-[20px] md:w-[30px] shrink-0 object-contain opacity-95 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-[12px] md:text-[14px] font-bold whitespace-nowrap">상담예약</span>
                </a>

                {/* #LINK: 네이버 예약 실제 URL 교체 필요 */}
                <a
                    href="https://booking.naver.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full h-[42px] md:h-[55px] bg-[#233a31] text-white rounded-full shadow-lg hover:bg-[#192b24] transition-all px-3 md:px-5 gap-2 md:gap-3 group"
                >
                    <img
                        src="/images/i_flo_03.svg"
                        alt=""
                        className="w-[20px] md:w-[30px] shrink-0 object-contain opacity-95 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-[12px] md:text-[14px] font-bold whitespace-nowrap">네이버예약</span>
                </a>

                {/* #LINK: 카카오 채널 실제 URL 교체 필요 */}
                <a
                    href="https://kakao.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full h-[42px] md:h-[55px] bg-[#233a31] text-white rounded-full shadow-lg hover:bg-[#192b24] transition-all px-3 md:px-5 gap-2 md:gap-3 group"
                >
                    <img
                        src="/images/i_flo_04.svg"
                        alt=""
                        className="w-[20px] md:w-[30px] shrink-0 object-contain opacity-95 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-[12px] md:text-[14px] font-bold whitespace-nowrap">카카오채널</span>
                </a>
            </div>

            {/* #STYLE: 메인 버튼 2개(예약/토글) — 모바일은 flex-col(세로), md부터 flex-row(가로)
                모바일 세로 정렬 시 펼침 메뉴(챗봇~카카오채널)와 동선이 이어지도록 토글 버튼을 위, 예약 버튼을 아래로 배치
                md 이상 가로 정렬에서는 기존처럼 예약이 왼쪽(먼저) 오도록 order로 위치만 되돌림 */}
            <div className="flex flex-col md:flex-row items-end md:items-center gap-2.5 md:gap-4">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="order-1 md:order-2 flex flex-col items-center justify-center w-[54px] md:w-[75px] h-[54px] md:h-[75px] bg-[#233a31] text-white rounded-full shadow-xl hover:bg-[#192b24] transition-all duration-300 active:scale-95 focus:outline-none"
                    aria-label={isOpen ? '퀵메뉴 닫기' : '퀵메뉴 열기'}
                >
                    {isOpen ? (
                        <span className="text-[34px] md:text-[50px] font-light leading-none">×</span>
                    ) : (
                        <img
                            src="/images/common/l_teeth.svg"
                            alt="퀵메뉴 열기"
                            className="w-[24px] md:w-[36px] h-[24px] md:h-[36px] block object-contain"
                        />
                    )}
                </button>

                {/* #LINK: 실제 전화번호 교체 필요 */}
                <a
                    href="tel:032-564-2875"
                    className="order-2 md:order-1 flex flex-col items-center justify-center w-[54px] md:w-[75px] h-[54px] md:h-[75px] bg-[#233a31] text-white rounded-full shadow-xl hover:bg-[#192b24] transition-all active:scale-95"
                >
                    <img
                        src="/images/common/l_phone.svg"
                        alt=""
                        className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] mb-0.5 object-contain"
                    />
                    <span className="text-[11px] md:text-[15px] font-ui mt-[2px] md:mt-[3px] font-bold">예약</span>
                </a>
            </div>
        </div>
    );
}
