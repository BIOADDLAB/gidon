import Image from 'next/image';
import SectionHeading from './common/SectionHeading';

export default function LocationSections() {
    return (
        <>
            <section
                id="location"
                className="bg-[#F9FAF5] pt-[60px] pb-[80px] md:pt-[80px] md:pb-[100px] lg:pt-[100px] lg:pb-[124px] px-4 scroll-mt-20"
            >
                <div className="w-full max-w-[924px] 2xl:max-w-[1080px] mx-auto">
                    <SectionHeading
                        topTitle="GIDEON'S Location"
                        centerTitle="기드온치과 오시는 길"
                        desc="기드온치과로 오시는 안전하고 편안한 길을 안내해 드립니다."
                        isDesc={true}
                    />

                    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 lg:gap-[13px] mt-[40px] md:mt-[60px]">
                        <div className="relative w-full lg:w-[452px] h-[220px] sm:h-[280px] lg:h-auto shrink-0">
                            <Image
                                src="/images/bg_interior_1.jpg"
                                sizes="(max-width: 1024px) 100vw, 452px"
                                fill
                                className="object-cover rounded-[10px]"
                                alt="기드온치과가 위치한 건물 외관 전경"
                            />
                        </div>

                        <div className="w-full lg:flex-1 border border-green-600 rounded-[10px] flex flex-col justify-between bg-[#f9faf5] shrink-0">
                            <div className="p-6 md:p-[45px] flex-1">
                                <div className="flex items-center gap-2 pb-2 mb-3 md:mb-4">
                                    <span className="w-[28px] h-[28px] md:w-[33px] md:h-[33px] bg-green-600 rounded-full flex items-center justify-center shrink-0">
                                        <img
                                            src="/images/i_loca_m.svg"
                                            alt="주소 아이콘"
                                            className="w-4 h-4 md:w-5 md:h-5 object-contain"
                                        />
                                    </span>
                                    <h3 className="text-[20px] md:text-[25px] text-green-600 font-semibold tracking-[-0.03em] leading-[1.5]">
                                        주소
                                    </h3>
                                </div>
                                <p className="text-[15px] md:text-[18px] text-[#3d3e3c] font-medium leading-relaxed tracking-[-0.03em] break-keep">
                                    경기도 성남시 중원구 성남대로 1126, 메가프라자 3층
                                    <span className="font-normal text-[13px] md:text-[16px] text-gray-500 block mt-1 tracking-[-0.03em]">
                                        모란역 4번출구 방향 도보 2분 국민은행 건물 3층
                                    </span>
                                </p>
                            </div>

                            <div className="p-6 md:p-[45px] flex-1 border-t border-green-600">
                                <div className="flex items-center gap-2 pb-2 mb-3 md:mb-4">
                                    <span className="w-[28px] h-[28px] md:w-[33px] md:h-[33px] bg-green-600 rounded-full flex items-center justify-center shrink-0">
                                        <img
                                            src="/images/i_loca_p.svg"
                                            alt="전화 아이콘"
                                            className="w-4 h-4 md:w-5 md:h-5 object-contain"
                                        />
                                    </span>
                                    <h3 className="text-[20px] md:text-[25px] text-green-600 font-semibold tracking-[-0.03em] leading-[1.5]">
                                        전화
                                    </h3>
                                </div>
                                <p className="text-[19px] md:text-[24px] text-[#3d3e3c] tracking-[-0.03em] font-bold block mb-3 md:mb-[18px]">
                                    031-XXXX-XXXX
                                </p>
                                <a
                                    href="tel:031-0000-0000"
                                    className="inline-block text-[16px] md:text-[20px] font-bold py-2 md:py-[9px] px-5 md:px-[25px] rounded-[33px] mt-2 md:mt-[16px] border border-green-600 bg-[#F4F1EA]"
                                >
                                    전화 걸기
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full pt-[60px] pb-[80px] md:pt-[100px] md:pb-[130px]">
                {/* #STYLE: 고정폭 w-[1140px]를 max-w 제약으로 변경하고 px-4를 주어 가로폭이 터지는 현상 원천 방어 */}
                <div className="w-full max-w-[1140px] px-4 mx-auto">
                    <Image
                        src="/images/bg_location.jpg"
                        alt="배경 이미지"
                        fill
                        sizes="100vw"
                        className="object-cover object-center -z-10"
                    />
                    <SectionHeading topTitle="MAP" centerTitle="지도에서 바로 확인하기" isWhite={true} />

                    {/* 구글지도영역 */}
                    {/* #STYLE: 모바일 화면에서 지도가 너무 거대해져 발생하는 스크롤 가로막기 현상을 방지하기 위해 높이 및 상단 마진 반응형 조율 */}
                    <div className="w-full h-[300px] sm:h-[380px] md:h-[456px] bg-[#D9D9D9] rounded-[10px] mt-8 md:mt-[58px]"></div>
                </div>
            </section>
            <section className="relative w-full pt-[70px] pb-[90px] md:pt-[90px] md:pb-[110px] lg:pt-[100px] lg:pb-[130px]">
                <Image
                    src="/images/bg_info.jpg"
                    alt="기드온치과 방문 안내 배경"
                    fill
                    sizes="100vw"
                    className="object-cover object-center -z-10"
                />

                <div className="relative w-full max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-4">
                    <SectionHeading
                        topTitle="TRAFFIC INFO"
                        centerTitle="방문 시 참고사항"
                        desc="교통편과 진료시간, 주차 정보를 상세히 확인하실 수 있습니다."
                        isDesc={true}
                    />

                    <div className="mt-[50px] md:mt-[78px] grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[20px]">
                        <div className="min-h-[280px] md:min-h-[350px] bg-white rounded-[10px] overflow-hidden shadow-[3px_4px_14.6px_0px_rgba(72,72,72,0.1)] flex flex-col">
                            <div className="py-4 md:py-[20px] px-6 md:px-[48px] bg-green-600 flex items-center gap-3 md:gap-[16px] shrink-0">
                                <img
                                    src="/images/i_info_1.svg"
                                    className="w-[28px] h-[31px] md:w-[38px] md:h-[42px]"
                                    alt="지하철 이용 아이콘"
                                />
                                <h3 className="font-ui text-[19px] md:text-[26px] font-bold text-white">지하철 이용</h3>
                            </div>
                            <div className="pt-6 md:pt-[44px] pb-5 md:pb-[32px] px-6 md:px-[50px] flex-1">
                                <div className="pb-3 md:pb-[16px] border-b border-[#949494] mb-4 md:mb-[26px] flex items-center gap-3 md:gap-[14px]">
                                    <div className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] rounded-full flex justify-center items-center bg-green-600 shrink-0">
                                        <span className="text-[15px] md:text-[20px] font-extrabold text-white">1</span>
                                    </div>
                                    <p className="text-[14px] md:text-[20px] font-semibold text-[#302e2e] break-keep">
                                        모란역 4번 출구에서 직진 후 도보 2분
                                    </p>
                                </div>
                                <div className="pb-3 md:pb-[16px] border-b border-[#949494] flex gap-3 md:gap-[14px]">
                                    <div className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] rounded-full flex justify-center items-center bg-green-600 shrink-0">
                                        <span className="text-[15px] md:text-[20px] font-extrabold text-white">2</span>
                                    </div>
                                    <p className="text-[14px] md:text-[20px] font-semibold text-[#302e2e] break-keep">
                                        국민은행이 있는 메가프라자 3층에서 기드온치과를 찾으실 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="min-h-[180px] md:min-h-[350px] bg-white rounded-[10px] overflow-hidden shadow-[3px_4px_14.6px_0px_rgba(72,72,72,0.1)] flex flex-col">
                            <div className="py-4 md:py-[20px] px-6 md:px-[48px] bg-green-600 flex items-center gap-3 md:gap-[16px] shrink-0">
                                <img
                                    src="/images/i_info_2.svg"
                                    className="w-[28px] h-[31px] md:w-[38px] md:h-[42px]"
                                    alt="버스 이용 아이콘"
                                />
                                <h3 className="font-ui text-[19px] md:text-[26px] font-bold text-white">버스 이용</h3>
                            </div>
                            <div className="pt-6 md:pt-[44px] pb-5 md:pb-[32px] px-6 md:px-[50px] flex-1">
                                <div className="flex items-center gap-3 md:gap-[14px]">
                                    <p className="text-[14px] md:text-[20px] font-semibold text-[#302e2e] break-keep">
                                        모란역 4번 출구 정류장 하차 후 도보 이동이 가능합니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="min-h-[260px] md:min-h-[350px] bg-white rounded-[10px] overflow-hidden shadow-[3px_4px_14.6px_0px_rgba(72,72,72,0.1)] flex flex-col">
                            <div className="py-4 md:py-[20px] px-6 md:px-[48px] bg-green-600 flex items-center gap-3 md:gap-[16px] shrink-0">
                                <img
                                    src="/images/i_info_3.svg"
                                    className="w-[28px] h-[31px] md:w-[38px] md:h-[42px]"
                                    alt="진료 시간 안내 아이콘"
                                />
                                <h3 className="font-ui text-[19px] md:text-[26px] font-bold text-white">
                                    진료 시간 안내
                                </h3>
                            </div>
                            <div className="pt-6 md:pt-[44px] pb-5 md:pb-[32px] px-6 md:px-[50px] flex-1">
                                <div className="pb-2.5 md:pb-[12px] flex items-center justify-between">
                                    <h4 className="text-[16px] md:text-[22px] font-semibold text-[#302e2e]">
                                        월 / 화 / 목
                                    </h4>
                                    <p className="text-[14px] md:text-[20px] font-semibold text-[#646464]">
                                        10:00 ~ 19:00
                                    </p>
                                </div>
                                <div className="pb-2.5 md:pb-[12px] flex items-center justify-between">
                                    <h4 className="text-[16px] md:text-[22px] font-semibold text-[#302e2e]">금</h4>
                                    <p className="text-[14px] md:text-[20px] font-semibold text-[#646464]">
                                        10:00 ~ 20:00
                                    </p>
                                </div>
                                <div className="pb-2.5 md:pb-[12px] flex items-center justify-between">
                                    <h4 className="text-[16px] md:text-[22px] font-semibold text-[#302e2e]">수 / 토</h4>
                                    <p className="text-[14px] md:text-[20px] font-semibold text-[#646464]">
                                        10:00 ~ 16:00
                                    </p>
                                </div>
                                <div className="pb-2.5 md:pb-[12px] flex items-center justify-between border-b border-[#949494]">
                                    <h4 className="text-[16px] md:text-[22px] font-semibold text-[#302e2e]">
                                        일 / 공휴일
                                    </h4>
                                    <p className="text-[14px] md:text-[20px] font-semibold text-[#AE4F4F]">휴진</p>
                                </div>
                            </div>
                        </div>

                        <div className="min-h-[220px] md:min-h-[350px] bg-white rounded-[10px] overflow-hidden shadow-[3px_4px_14.6px_0px_rgba(72,72,72,0.1)] flex flex-col">
                            <div className="py-4 md:py-[20px] px-6 md:px-[48px] bg-green-600 flex items-center gap-3 md:gap-[16px] shrink-0">
                                <img
                                    src="/images/i_info_4.svg"
                                    className="w-[28px] h-[31px] md:w-[38px] md:h-[42px]"
                                    alt="주차 안내 아이콘"
                                />
                                <h3 className="font-ui text-[19px] md:text-[26px] font-bold text-white">주차 안내</h3>
                            </div>
                            <div className="pt-6 md:pt-[44px] pb-5 md:pb-[32px] px-6 md:px-[50px] flex-1">
                                <div className="pb-3 md:pb-[16px] border-b border-[#949494] mb-4 md:mb-[26px] flex items-center gap-3 md:gap-[14px]">
                                    <p className="text-[14px] md:text-[20px] font-semibold text-[#302e2e] break-keep">
                                        건물 뒷편, 기계식 카리프트 이용하시면 됩니다.
                                    </p>
                                </div>
                                <div className="pb-3 md:pb-[16px] border-b border-[#949494] flex gap-3 md:gap-[14px]">
                                    <p className="text-[14px] md:text-[20px] font-semibold text-[#302e2e] break-keep">
                                        접수 시 차량번호 말씀해 주시면 필요한 안내를 도와드립니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
