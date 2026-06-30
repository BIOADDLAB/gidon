'use client';

import React from 'react';

export default function KakaoMap() {
    return (
        <div className="relative bg-gray-400 w-full h-full">
            {/* 카카오맵 영역 */}
            {/* #STYLE: 모바일 left/bottom 여백 축소, 버튼 텍스트 줄바꿈 방지(whitespace-nowrap) */}
            <div className="flex justify-center items-center gap-2 md:gap-3 absolute left-[16px] md:left-[40px] bottom-[16px] md:bottom-[30px]">
                {/* #LINK: 네이버지도 실제 URL 연결 필요 */}
                <a
                    href="#"
                    className="flex items-center justify-center gap-1 p-2 border border-black rounded-[7px] bg-white whitespace-nowrap"
                >
                    <img
                        src="/images/common/i_map_naver.svg"
                        alt="네이버지도 아이콘"
                        className="block w-[24px] md:w-[30px] h-auto"
                    />
                    <span className="text-[12px] md:text-[13px] font-semibold">네이버지도로 보기</span>
                </a>
                {/* #LINK: 구글지도 실제 URL 연결 필요 */}
                <a
                    href="#"
                    className="flex items-center justify-center gap-1 p-2 border border-black rounded-[7px] bg-white whitespace-nowrap"
                >
                    <img
                        src="/images/common/i_map_google.svg"
                        alt="구글지도 아이콘"
                        className="block w-[24px] md:w-[30px] h-[24px] md:h-[30px]"
                    />
                    <span className="text-[12px] md:text-[13px] font-semibold">구글지도로 보기</span>
                </a>
            </div>
        </div>
    );
}
