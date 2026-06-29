import HeroSection from '@/components/HeroSection';
import SectionHeading from './../../components/common/SectionHeading';
import Image from 'next/image';

export default function LocationPage() {
    const locationMenuList = ['오시는길'];
    return (
        <main>
            {/* STYLE: 레이어 씌워야함 */}
            <HeroSection
                mainTitle="오시는길"
                subTitle="Location"
                pageName="오시는길"
                subNavItem="오시는길"
                imgSrc="/images/bg_interior_3.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={locationMenuList}
            />

            <section className="bg-[#F9FAF5] pt-[100px] pb-[124px]">
                <div className="w-[924px] mx-auto">
                    <SectionHeading
                        topTitle="GIDEON’S Location"
                        centerTitle="기드온치과 오시는 길"
                        desc="기드온치과로 오시는 안전하고 편안한 길을 안내해 드립니다."
                        isDesc={true}
                    />

                    <div className="flex justify-center items-stretch gap-[13px] mt-[60px]">
                        {/* 왼쪽 영역 (452px 고정) */}
                        <div className="w-[452px] relative shrink-0">
                            <Image
                                src="/images/bg_green2.jpg"
                                sizes="452px"
                                fill
                                className="object-cover rounded-[10px]"
                                alt="건물 외관 전경"
                            />
                        </div>

                        {/* 오른쪽 정보 영역 (459px로 수정 및 대문자 O오타 수정, 기존 스타일 원상복구) */}
                        <div className="w-[459px] border border-green-600 rounded-[10px] flex flex-col justify-between bg-white shrink-0">
                            {/* 주소 */}
                            <div className="p-[45px] flex-1">
                                <div className="flex items-center gap-2 pb-2 mb-4">
                                    <span className="w-[33px] h-[33px] bg-green-600 rounded-full flex items-center justify-center">
                                        <img
                                            src="/images/i_loca_m.svg"
                                            alt="주소 아이콘"
                                            className="w-5 h-5 object-contain"
                                        />
                                    </span>
                                    <h3 className="text-[25px] text-green-600 font-semibold tracking-[-0.03em] leading-[1.5] ">
                                        주소
                                    </h3>
                                </div>
                                <p className="text-[18px] text-[#3d3e3c] font-medium leading-relaxed tracking-[-0.03em]">
                                    경기도 성남시 중원구 성남대로 1126, 메가프라자 3층 <br />
                                    <span className="font-normal text-[16px] text-gray-500 block mt-1 tracking-[-0.03em]">
                                        모란역 4번출구 방향 도보 2분 국민은행 건물 3층
                                    </span>
                                </p>
                            </div>

                            {/* 전화 */}
                            <div className="p-[45px] flex-1 border-t border-green-600">
                                <div className="flex items-center gap-2 pb-2 mb-4">
                                    <span className="w-[33px] h-[33px] bg-green-600 rounded-full flex items-center justify-center">
                                        <img
                                            src="/images/i_loca_p.svg"
                                            alt="전화 아이콘"
                                            className="w-5 h-5 object-contain"
                                        />
                                    </span>
                                    <h3
                                        className=" text-[25px] text-green-600 font-semibold tracking-[-0.03em] leading-[1.5]
                                    tracking-[-0.03em]
                                    "
                                    >
                                        전화
                                    </h3>
                                </div>
                                <p className="text-[24px] text-[#3d3e3c] tracking-[-0.03em] font-bold  block mb-[18px]">
                                    031-XXXX-XXXX
                                </p>
                                {/* #LINK: 전화 연결 필요 */}
                                <a
                                    href="tel: 010-1111-"
                                    className="lnline-block text-[20px] font-bold py-[9px] px-[25px] rounded-[33px] mt-[16px] border border-green-600 bg-[#F4F1EA]"
                                >
                                    전화 걸기
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 지하철이용 */}
            <section className="relative w-full pt-[100px] pb-[130px]">
                <div className="w-[1140px] mx-auto">
                    <Image
                        src="/images/bg_info.jpg"
                        alt="배경 이미지"
                        fill
                        sizes="100vw"
                        className="object-cover object-center -z-10"
                    />

                    <SectionHeading
                        topTitle="TRAFFIC INFO"
                        centerTitle="방문 시 참고사항"
                        desc="교통편과 진료시간, 주차 정보를 상세히 확인하실 수 있습니다."
                        isDesc={true}
                    />
                    {/* 안내 */}
                    <div className="mt-[78px] flex justify-center flex-wrap gap-[20px] ">
                        <div className="w-[calc((100%-20px)/2)] h-[350px] bg-white rounded-[10px] overflow-hidden shadow-[3px_4px_14.6px_0px_rgba(72,72,72,0.1)] flex flex-col">
                            <div className="py-[20px] px-[48px] bg-green-600 flex items-center gap-[16px] shrink-0">
                                <img src="/images/i_info_1.svg" className="w-[38px] h-[42px]" alt="아이콘" />
                                <h3 className="font-ui text-[26px] font-bold text-white">지하철 이용</h3>
                            </div>
                            <div className="pt-[44px] pb-[32px] px-[50px] flex-1">
                                <div className="pb-[16px] border-b border-[#949494] mb-[26px] flex items-center gap-[14px]">
                                    <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-green-600 shrink-0">
                                        <span className="text-[20px] font-extrabold text-white">1</span>
                                    </div>
                                    <p className="text-[20px] font-semibold text-[#302e2e]">
                                        모란역 4번 출구에서 직진 후 도보 2분
                                    </p>
                                </div>
                                <div className="pb-[16px] border-b border-[#949494] flex gap-[14px]">
                                    <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-green-600 shrink-0">
                                        <span className="text-[20px] font-extrabold text-white">2</span>
                                    </div>
                                    <p className="text-[20px] font-semibold text-[#302e2e]">
                                        국민은행이 있는 메가프라자 3층에서 <br />
                                        기드온치과를 찾으실 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 버스 이용 */}
                        <div className="w-[calc((100%-20px)/2)] h-[350px] bg-white rounded-[10px] overflow-hidden shadow-[3px_4px_14.6px_0px_rgba(72,72,72,0.1)] flex flex-col">
                            <div className="py-[20px] px-[48px] bg-green-600 flex items-center gap-[16px] shrink-0">
                                <img src="/images/i_info_2.svg" className="w-[38px] h-[42px]" alt="아이콘" />
                                <h3 className="font-ui text-[26px] font-bold text-white">버스 이용</h3>
                            </div>
                            <div className="pt-[44px] pb-[32px] px-[50px] flex-1">
                                <div className="pb-[16px] border-b border-[#949494] mb-[26px] flex items-center gap-[14px]">
                                    <p className="text-[20px] font-semibold text-[#302e2e]">
                                        모란역 4번 출구 정류장 하차 후 <br />
                                        도보 이동이 가능합니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 진료 시간 안내 */}
                        <div className="w-[calc((100%-20px)/2)] h-[350px] bg-white rounded-[10px] overflow-hidden shadow-[3px_4px_14.6px_0px_rgba(72,72,72,0.1)] flex flex-col">
                            <div className="py-[20px] px-[48px] bg-green-600 flex items-center gap-[16px] shrink-0">
                                <img src="/images/i_info_3.svg" className="w-[38px] h-[42px]" alt="아이콘" />
                                <h3 className="font-ui text-[26px] font-bold text-white">진료 시간 안내</h3>
                            </div>
                            <div className="pt-[44px] pb-[32px] px-[50px] flex-1">
                                <div className="pb-[12px] flex items-center justify-between">
                                    <h4 className="text-[22px] font-semibold text-[#302e2e]">월 / 화 / 목</h4>
                                    <p className="text-[20px] font-semibold text-[#646464]">10:00 ~ 19:00</p>
                                </div>
                                <div className="pb-[12px] flex items-center justify-between">
                                    <h4 className="text-[22px] font-semibold text-[#302e2e]">금</h4>
                                    <p className="text-[20px] font-semibold text-[#646464]">10:00 ~ 20:00</p>
                                </div>
                                <div className="pb-[12px] flex items-center justify-between">
                                    <h4 className="text-[22px] font-semibold text-[#302e2e]">수 / 토 </h4>
                                    <p className="text-[20px] font-semibold text-[#646464]">10:00 ~ 16:00</p>
                                </div>
                                <div className="pb-[12px] flex items-center justify-between border-b border-[#949494]">
                                    <h4 className="text-[22px] font-semibold text-[#302e2e]">일 / 공휴일</h4>
                                    <p className="text-[20px] font-semibold text-[#AE4F4F]">휴진</p>
                                </div>
                            </div>
                        </div>

                        {/* 주차 안내 */}
                        <div className="w-[calc((100%-20px)/2)] h-[350px] bg-white rounded-[10px] overflow-hidden shadow-[3px_4px_14.6px_0px_rgba(72,72,72,0.1)] flex flex-col">
                            <div className="py-[20px] px-[48px] bg-green-600 flex items-center gap-[16px] shrink-0">
                                <img src="/images/i_info_4.svg" className="w-[38px] h-[42px]" alt="아이콘" />
                                <h3 className="font-ui text-[26px] font-bold text-white">주차 안내</h3>
                            </div>
                            <div className="pt-[44px] pb-[32px] px-[50px] flex-1">
                                <div className="pb-[16px] border-b border-[#949494] mb-[26px] flex items-center gap-[14px]">
                                    <p className="text-[20px] font-semibold text-[#302e2e]">
                                        건물 뒷편, 기계식 카리프트 <br />
                                        이용하시면 됩니다.
                                    </p>
                                </div>
                                <div className="pb-[16px] border-b border-[#949494] flex gap-[14px]">
                                    <p className="text-[20px] font-semibold text-[#302e2e]">
                                        접수 시 차량번호 말씀해 주시면 <br />
                                        필요한 안내를 도와드립니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
