'use client';
import RecommendSection from '../components/RecommendSection';
import FaqSection from '../components/FaqSection';
import ProcessSection from '../components/ProcessSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import AskSection from '@/components/AskSection';
import MapSection from '../components/MapStion';
import CareSection from '../components/CareSection';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import SectionHeading from '@/components/common/SectionHeading';

interface implantdDtaProps {
    stepNumber: number;
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
}

export default function Home() {
    const implantData: implantdDtaProps[] = [
        {
            stepNumber: 1,
            title: 'AI 구강스캔을 통해 정밀한 진단 진행',
            description:
                '3D CT 촬영과 구강 검진을 통해 치아와 잇몸 상태를 분석하고, 가상 모의 수술로 식립 위치를 계획합니다.',
            imgSrc: '/images/bg_procecss_test.jpg',
            imgAlt: 'AI 구강스캔 진단 이미지',
        },
        {
            stepNumber: 2,
            title: '네비게이션 임플란트 식립',
            description: '사전에 계획된 치료 위치 가이드를 바탕으로 보다 정교하게 임플란트를 식립합니다.',
            imgSrc: '/images/bg_procecss_test.jpg',
            imgAlt: '임플란트 식립 예시 이미지',
        },
        {
            stepNumber: 3,
            title: '보철 완성 & 사후 관리',
            description:
                '임플란트가 잇몸뼈와 안정적으로 결합된 후 맞춤 보철물을 장착하고, 정기 검진을 통해 관리합니다.',
            imgSrc: '/images/bg_procecss_test.jpg',
            imgAlt: '사후 관리 진료 이미지',
        },
    ];
    return (
        <>
            {/* 메인 히어로 최상단 */}
            <div className="relative w-full h-full block">
                <div className="absolute bottom-12 left-1/2 -translate-1/2 z-3 flex flex-col items-center gap-2">
                    <p className="text-white text-base">Scroll Down</p>
                    <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white p-1 ">
                        <div className="h-2 w-0.5 rounded-full bg-white animate-wheel" />
                    </div>
                    <img src="/images/down_arr2.svg" alt="마우스 아래 화살표" />
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    // navigation
                    pagination={{ type: 'fraction' }}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="[&_.swiper-pagination]:!left-100 [&_.swiper-pagination]:!bottom-24 [&_.swiper-pagination]:!right-auto [&_.swiper-pagination]:!w-auto [&_.swiper-pagination]:!text-left text-[20px] text-white tracking-[0.2em]"
                >
                    <SwiperSlide>
                        <div className="relative">
                            <div className="bg-[#575757] absolute w-full h-full top-0 left-0 z-1 opacity-50"></div>
                            <Image
                                src="/images/bg_main_01_1.jpg"
                                alt="메인 히어로 배경 이미지1"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                            <div className="flex flex-col justify-center items-center py-64  z-2 relative text-white">
                                <h1 className="text-[40px]">치과를 오래 쓰는 길,</h1>
                                <h1 className="text-[40px]">기드온이 안내합니다.</h1>
                                <p className="text-3xl mt-7">흔들리지 않는 판단, 끝까지 지키는 약속.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative ">
                            <div className="bg-[#575757] absolute w-full h-full top-0 left-0 z-1 opacity-50"></div>
                            <Image
                                src="/images/bg_main_02.jpg"
                                alt="메인 히어로 배경 이미지2"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                            <div className="flex flex-col justify-center items-center py-64  z-2 relative text-white">
                                <h1 className="text-[40px]">정해진 길로 정확하게 안내하고,</h1>
                                <h1 className="text-[40px]">치아를 오래 쓰게 하는 안정적인 치과입니다.</h1>
                                <p className="text-3xl mt-7">흔들리지 않는 판단, 끝까지 지키는 약속.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/*메인 두번째*/}
            <div className={'relative py-40'}>
                <Image
                    src="/images/bg_main_03.jpg"
                    alt="메인 히어로 배경 이미지3"
                    fill
                    sizes="100vw"
                    className="object-cover object-center -z-10 absolute top-0 left-0"
                />
                <div>
                    <SectionHeading
                        topTitle={'GIDEON’S Philosophy'}
                        centerTitle={'기드온치과의 철학'}
                        desc={
                            '기드온치과는 화려한 장비나 최신 기술을 앞세우는 치과가 아닙니다.\n' +
                            '한결같이 바른 마음과 정직한 손길로, 당신의 평생 구강 건강을 지켜드립니다.'
                        }
                        isDesc={true}
                    />
                </div>
                <div className="flex justify-center mt-12 mb-20">
                    <div className="relative rounded-full border border-gray-600 flex items-center justify-center w-64 h-64 -mr-10">
                        <div className="absolute inset-2 rounded-full opacity-60 bg-[linear-gradient(180deg,rgba(103,120,113,0.58)_0%,rgba(139,152,147,0.33)_53.85%,rgba(251,251,251,0)_100%)]" />
                        <p className="relative z-10 text-center text-2xl font-semibold">
                            정직한 <br /> 진료
                        </p>
                    </div>

                    <div className="relative rounded-full border border-gray-600 flex items-center justify-center w-64 h-64 -mr-10">
                        <div className="absolute inset-2 rounded-full opacity-60 bg-[linear-gradient(180deg,rgba(103,120,113,0.58)_0%,rgba(139,152,147,0.33)_53.85%,rgba(251,251,251,0)_100%)]" />
                        <p className="relative z-10 text-center text-2xl font-semibold">
                            투명한 <br /> 안내
                        </p>
                    </div>
                    <div className="relative rounded-full border border-gray-600 flex items-center justify-center w-64 h-64">
                        <div className="absolute inset-2 rounded-full opacity-60 bg-[linear-gradient(180deg,rgba(103,120,113,0.58)_0%,rgba(139,152,147,0.33)_53.85%,rgba(251,251,251,0)_100%)]" />
                        <p className="relative z-10 text-center text-2xl font-semibold">
                            끝까지 <br /> 책임
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center p-4 rounded-full border-2 font-bold border-[#2C4A3E] gap-2 bg-white text-[#2C4A3E] text-xl py-4 px-10">
                        <span>병원철학 자세히보기</span>
                        <span>
                            <img src="/images/right_arr.svg" alt="" />
                        </span>
                    </div>
                </div>
            </div>

            {/*메인 세번째*/}
            <div className="py-40">
                <SectionHeading
                    topTitle={'GIDEON’S Signature'}
                    centerTitle={'진료 과목'}
                    desc={'다양한 임상 경험과 전문성을 바탕으로\n' + '정밀한 시술을 약속드립니다.'}
                    isDesc={true}
                />

                <div className="flex justify-center items-center gap-5 mt-14">
                    <div className="group relative overflow-hidden rounded-md">
                        <img src="/images/main_hover_01.jpg" alt="메인 호버 1" />

                        <div className="absolute inset-0 flex translate-y-full flex-col justify-start bg-[#2d4a3e] p-5 transition-transform duration-300 group-hover:translate-y-0">
                            <h3 className="text-2xl font-bold text-white">
                                AI 네비게이션
                                <br />
                                임플란트
                            </h3>
                            <div className="my-5 h-px w-4 bg-white/50" />
                            <p className="text-lg text-white/80">
                                모의 시술로 오차 없이
                                <br />
                                안전하고 아픔을 줄인
                                <br />
                                디지털 임플란트.
                            </p>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-md">
                        <img src="/images/main_hover_02.jpg" alt="메인 호버 1" />

                        <div className="absolute inset-0 flex translate-y-full flex-col justify-start bg-[#2d4a3e] p-5 transition-transform duration-300 group-hover:translate-y-0">
                            <h3 className="text-2xl font-bold text-white">
                                물방울 레이저 <br />
                                치주관리
                            </h3>
                            <div className="my-5 h-px w-4 bg-white/50" />
                            <p className="text-lg text-white/80">
                                드릴 소리 없이
                                <br />
                                물방울로 치료하는
                                <br />
                                잇몸 케어.
                            </p>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-md">
                        <img src="/images/main_hover_03.jpg" alt="메인 호버 1" />

                        <div className="absolute inset-0 flex translate-y-full flex-col justify-start bg-[#2d4a3e] p-5 transition-transform duration-300 group-hover:translate-y-0">
                            <h3 className="text-2xl font-bold text-white">
                                티스캔
                                <br />
                                교합관리
                            </h3>
                            <div className="my-5 h-px w-4 bg-white/50" />
                            <p className="text-lg text-white/80">
                                씹는 힘의 균형을 <br />
                                디지털 수치로 <br />
                                정밀하게 맞추는 진료.
                            </p>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-md">
                        <img src="/images/main_hover_04.jpg" alt="메인 호버 1" />

                        <div className="absolute inset-0 flex translate-y-full flex-col justify-start bg-[#2d4a3e] p-5 transition-transform duration-300 group-hover:translate-y-0">
                            <h3 className="text-2xl font-bold text-white">
                                시니어
                                <br />
                                라미네이트
                            </h3>
                            <div className="my-5 h-px w-4 bg-white/50" />
                            <p className="text-lg text-white/80">
                                중장년층을 위한 <br />
                                자연스럽고 품격 있는 <br />
                                미소 성형.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-25">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 p-4 px-8 rounded-full bg-[#2C4A3E] text-white text-xl"
                    >
                        <span>진료과목 자세히보기</span>
                        <span>
                            <img src="/images/right_arr_white.svg" alt="" />
                        </span>
                    </button>
                </div>
            </div>

            {/* 상담 및 문의 영역 */}
            <AskSection />

            {/* 오시는 길 */}
            <MapSection />

            {/* 주의사항 */}
            <CareSection />

            {/* 추천 영역 */}
            <RecommendSection />

            {/* 자주묻는질문 */}
            <FaqSection />

            {/* 진행과정 */}
            <ProcessSection topTitle="PROCESS" centerTitle="임플란트 진행과정" stepData={implantData} />
        </>
    );
}
