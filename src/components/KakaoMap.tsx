'use client';

import React from 'react';
import Image from 'next/image';

const NAVER_MAP_URL =
    'https://map.naver.com/p/entry/place/2054269887?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607081735%26locale%3Dko%26svcName%3Dmap_pcv5';
const GOOGLE_MAP_URL =
    'https://www.google.com/maps/place/%EA%B8%B0%EB%93%9C%EC%98%A8%EC%B9%98%EA%B3%BC/data=!3m1!4b1!4m6!3m5!1s0x357ca9a1f93ed0b1:0xb0acb96b3571c575!8m2!3d37.4303456!4d127.1298975!16s%2Fg%2F11z8s06776?entry=ttu&g_ep=EgoyMDI2MDcwNS4wIKXMDSoASAFQAw%3D%3D';

export default function KakaoMap() {
    return (
        <div className="flex h-full w-full justify-center overflow-hidden">
            <div className="relative h-full aspect-square max-w-full shrink-0">
                <Image
                    src="/images/map.jpeg"
                    alt="기드온치과 위치 지도"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                    priority={false}
                />
                {/* #STYLE: 모바일 left/bottom 여백 축소, 버튼 텍스트 줄바꿈 방지(whitespace-nowrap) */}
                <div className="absolute right-[16px] bottom-[16px] flex flex-col items-end justify-center gap-2 md:right-[24px]  md:bottom-[24px]">
                    <a
                        href={NAVER_MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center  justify-center gap-1 border border-black w-[126px] h-[38px] rounded-[7px] bg-white whitespace-nowrap"
                    >
                        <img
                            src="/images/common/i_map_naver.svg"
                            alt="네이버지도 아이콘"
                            className="block w-auto  h-[22px]"
                        />
                        <span className="text-[12px] md:text-[13px] font-semibold">네이버지도로 보기</span>
                    </a>
                    <a
                        href={GOOGLE_MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center  border border-black w-[126px] h-[38px] gap-1 justify-center rounded-[7px] bg-white whitespace-nowrap"
                    >
                        <img
                            src="/images/common/i_map_google.svg"
                            alt="구글지도 아이콘"
                            className="block w-auto  h-[22px]"
                        />
                        <span className="text-[12px] md:text-[13px] font-semibold">구글지도로 보기</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
