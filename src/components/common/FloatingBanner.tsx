'use client';

import { useState } from 'react';

export default function FloatingBanner() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed right-6 bottom-10 z-50 flex flex-col items-end select-none">
            <div
                className={`flex flex-col gap-[10px] items-end w-[180px] mb-4 transition-all duration-300 origin-bottom ${
                    isOpen
                        ? 'opacity-100 transform translate-y-0 pointer-events-auto'
                        : 'opacity-0 transform translate-y-4 pointer-events-none h-0 overflow-hidden'
                }`}
            >
                <a
                    href="#"
                    className="flex items-center w-full h-[55px] bg-[#233a31] text-white rounded-full shadow-lg hover:bg-[#192b24] transition-all px-5 gap-3 group"
                >
                    <img
                        src="/images/i_flo_01.svg"
                        alt=""
                        className="w-[30px] h-6 object-contain opacity-95 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-[14px] font-bold ">챗봇</span>
                </a>

                <a
                    href="tel:032-564-2875"
                    className="flex items-center w-full h-[55px] bg-[#233a31] text-white rounded-full shadow-lg hover:bg-[#192b24] transition-all px-5 gap-3 group"
                >
                    <img
                        src="/images/i_flo_02.svg"
                        alt=""
                        className="w-[30px] h-6 object-contain opacity-95 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-[14px] font-bold ">상담예약</span>
                </a>

                <a
                    href="https://booking.naver.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full h-[55px] bg-[#233a31] text-white rounded-full shadow-lg hover:bg-[#192b24] transition-all px-5 gap-3 group"
                >
                    <img
                        src="/images/i_flo_03.svg"
                        alt=""
                        className="w-[30px] object-contain opacity-95 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-[14px] font-bold ">네이버예약</span>
                </a>

                <a
                    href="https://kakao.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full h-[55px] bg-[#233a31] text-white rounded-full shadow-lg hover:bg-[#192b24] transition-all px-5 gap-3 group"
                >
                    <img
                        src="/images/i_flo_04.svg"
                        alt=""
                        className="w-6 h-6 object-contain opacity-95 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-[14px] font-bold">카카오채널</span>
                </a>
            </div>

            <div className="flex items-center gap-4">
                <a
                    href="tel:032-564-2875"
                    className="flex flex-col items-center justify-center w-[75px] h-[75px] bg-[#233a31] text-white rounded-full shadow-xl hover:bg-[#192b24] transition-all active:scale-95"
                >
                    <img src="/images/common/l_phone.svg" alt="" className="w-[24px] h-[24px] mb-0.5 object-contain" />
                    <span className="text-[15px] font-ui mt-[3px] font-bold ">예약</span>
                </a>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col items-center justify-center w-[75px] h-[75px] bg-[#233a31] text-white rounded-full shadow-xl hover:bg-[#192b24] transition-all duration-300 active:scale-95 focus:outline-none"
                >
                    {isOpen ? (
                        <span className="text-[50px] font-light leading-none">×</span>
                    ) : (
                        <img
                            src="/images/common/l_teeth.svg"
                            alt="퀵메뉴 열기"
                            className="w-[36px] h-[36px] block object-contain"
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
