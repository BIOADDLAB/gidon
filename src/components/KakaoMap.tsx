'use client';

import React from 'react';

export default function KakaoMap() {
    return (
        <div className="relative bg-gray-400 w-full h-full">
            {/* 카카오맵 영역 */}
            <div className="flex justify-center items-center gap-3 absolute left-[40px] bottom-[30px]">
                {/* 네이버, 구글 지도 영역 */}
                <a
                    href=""
                    className="flex items-center justify-center    p-2 border border-black rounded-[7px] bg-white"
                >
                    <img
                        src="/images/common/i_map_naver.svg"
                        alt="네이버지도 아이콘"
                        className="bolck w-[30px] h-auto"
                    />
                    <span className="fext-[13px] font-semibold">네이버지도로 보기</span>
                </a>
                <a
                    href=""
                    className="flex items-center justify-center    p-2 border border-black rounded-[7px] bg-white"
                >
                    <img
                        src="/images/common/i_map_google.svg"
                        alt="네이버지도 아이콘"
                        className="bolck w-[30px] h-[30px]"
                    />
                    <span className="fext-[13px] font-semibold">구글지도로 보기</span>
                </a>
            </div>
        </div>
    );
}
