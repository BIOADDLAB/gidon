// components/TourSwiper.tsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TourSwiper() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const tourImages = [
        '/images/img_tour_01.jpg',
        '/images/img_tour_02.jpg',
        '/images/img_tour_03.jpg',
        '/images/img_tour_04.jpg',
        '/images/img_tour_05.jpg',
    ];

    return (
        <section className="w-full relative aspect-[3/4] sm:aspect-auto sm:h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[700px] overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                onSlideChange={(swiper) => {
                    setCurrentIndex(swiper.realIndex + 1);
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                className="w-full h-full"
            >
                {tourImages.map((src, idx) => (
                    <SwiperSlide key={idx} className="w-full h-full relative">
                        {/* #STYLE: 이미지 가독성을 높이기 위한 오버레이 레이어 추가 */}
                        <div className="absolute inset-0 bg-[rgba(87,87,87,0.4)] z-10" />

                        <img
                            src={src}
                            alt={`기드온치과 인테리어 ${idx + 1}`}
                            className="w-full h-full object-cover object-center"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-x-0 bottom-[40px] md:bottom-[60px] lg:bottom-[80px] z-20 w-full border-y border-white/40 h-[70px] md:h-[90px] flex items-center">
                <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 md:px-6 flex items-center justify-between text-white">
                    <h3 className="text-[20px] md:text-[26px] lg:text-[30px] 2xl:text-[34px] font-bold select-none">
                        기드온치과 둘러보기
                    </h3>

                    <div className="flex items-center gap-[24px] md:gap-[40px]">
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="swiper-button-prev-custom flex items-center justify-center text-[20px] md:text-[22px] font-light opacity-80 hover:opacity-100 transition-opacity focus:outline-none w-8 h-8"
                            >
                                <span>←</span>
                            </button>

                            <button
                                type="button"
                                className="swiper-button-next-custom flex items-center justify-center text-[20px] md:text-[22px] font-light opacity-80 hover:opacity-100 transition-opacity focus:outline-none w-8 h-8"
                            >
                                <span>→</span>
                            </button>
                        </div>

                        <div className="text-[16px] md:text-[18px] font-light tracking-wider min-w-[50px] text-right opacity-90 select-none">
                            <span>{currentIndex}</span>
                            <span className="mx-1 text-[13px] md:text-[15px] opacity-60">/</span>
                            <span className="text-[14px] md:text-[16px] opacity-70">{tourImages.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
