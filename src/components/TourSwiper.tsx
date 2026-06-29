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
        '/images/bg_hr_about.jpg',
        '/images/bg_care.jpg',
        '/images/bg_hr_test.jpg',
        '/images/bg_reco.jpg',
    ];

    return (
        <section className="w-full relative h-[750px] overflow-hidden">
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
                    <SwiperSlide key={idx} className="w-full h-full">
                        <img src={src} alt="기드온치과 인테리어" className="w-full h-full object-/20%" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute inset-x-0 bottom-[80px] z-10 w-full border-y border-white/40  h-[90px] flex items-center">
                <div className="w-full max-w-[1400px] mx-auto px-4 flex items-center justify-between text-white">
                    <h3 className="text-[30px] font-bold select-none">기드온치과 둘러보기</h3>

                    <div className="flex items-center gap-[40px]">
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="swiper-button-prev-custom flex items-center justify-center text-[22px] font-light opacity-80 hover:opacity-100 transition-opacity focus:outline-none w-8 h-8"
                            >
                                <span>←</span>
                            </button>

                            <button
                                type="button"
                                className="swiper-button-next-custom flex items-center justify-center text-[22px] font-light opacity-80 hover:opacity-100 transition-opacity focus:outline-none w-8 h-8"
                            >
                                <span>→</span>
                            </button>
                        </div>

                        <div className="text-[18px] font-light tracking-wider min-w-[50px] text-right opacity-90 select-none">
                            <span>{currentIndex}</span>
                            <span className="mx-1 text-[15px] opacity-60">/</span>
                            <span className="text-[16px] opacity-70">{tourImages.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
