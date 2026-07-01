// pages/price/page.tsx

import HeroSection from '@/components/HeroSection';
import SectionHeading from './../../components/common/SectionHeading';
import MapSection from '../../components/MapStion';
import FaqSection from '@/components/FaqSection';

export default function PricePage() {
    const priceMenuList = ['가격안내'];
    return (
        <main>
            <HeroSection
                mainTitle="가격안내"
                subTitle="Price Guide"
                pageName="가격안내"
                subNavItem="가격안내"
                imgSrc="/images/bg_green2.jpg"
                isNav={true}
                isGreen={true}
                subMenuList={priceMenuList}
            />

            <section className="py-14 md:py-[100px] bg-white">
                <div className="w-full max-w-[1160px] mx-auto px-4 md:px-6">
                    <SectionHeading
                        topTitle="FEE GUIDE"
                        centerTitle="가격 안내"
                        desc={'처음 상담부터 최종 보철까지,\n감추는 비용 없이 처음부터 정확하게 안내해드립니다.'}
                        isDesc={true}
                    />

                    <span className="block w-[98px] h-[3px] bg-green-600 mt-10 mb-16 md:mt-[60px] md:mb-[130px] mx-auto"></span>

                    {/* 1. 임플란트 비용안내 */}
                    <div className="mb-[60px] md:mb-[80px]">
                        <h3 className="text-center text-2xl md:text-[30px] font-bold text-[#263C33] mb-[20px]">
                            임플란트 비용안내
                        </h3>
                        <div className="w-full border-b border-[#7c7c7c] overflow-x-auto rounded-t-[10px]">
                            <table className="w-full text-center border-collapse min-w-[600px] md:min-w-full">
                                <thead>
                                    <tr className="bg-green-600 text-white text-base md:text-[22px] font-medium">
                                        <th className="py-3 md:py-[18px] w-[34%] border-r border-[#335946]">구분</th>
                                        <th className="py-3 md:py-[18px] w-[33%] border-r border-[#335946]">
                                            오스템 임플란트
                                        </th>
                                        <th className="py-3 md:py-[18px] w-[33%]">스트라우만 임플란트</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-4 md:py-[22px] bg-[#f4f6f4] text-[#313131] text-base md:text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            가격
                                        </td>
                                        <td className="py-4 md:py-[22px] border-r border-[#e2e2e2] text-sm md:text-[18px] font-semibold text-[#244736]">
                                            00만원
                                        </td>
                                        <td className="py-4 md:py-[22px] text-sm md:text-[18px] font-semibold text-[#244736]">
                                            00만원
                                        </td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        {/* #STYLE: md:hidden 브레이크포인트로 모바일에서만 줄바꿈 작동, PC에서는 한 줄 유지 및 중앙 정렬 */}
                                        <td className="py-4 md:py-[22px] px-2 md:px-4 bg-[#f4f6f4] text-[#313131] text-sm md:text-[20px] font-semibold border-r border-[#e2e2e2] text-center leading-tight break-keep">
                                            정밀 진단비 <br className="md:hidden" />
                                            (3D CT 및 모의 시술)
                                        </td>
                                        <td className="py-4 md:py-[22px] border-r border-[#e2e2e2] text-sm md:text-[18px] text-[#656565] font-semibold">
                                            포함
                                        </td>
                                        <td className="py-4 md:py-[22px] text-sm md:text-[18px] text-[#656565] font-semibold">
                                            포함
                                        </td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-4 md:py-[22px] bg-[#f4f6f4] text-[#313131] text-base md:text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            맞춤형 지대주
                                        </td>
                                        <td className="py-4 md:py-[22px] border-r border-[#e2e2e2] text-sm md:text-[18px] text-[#656565] font-semibold">
                                            포함
                                        </td>
                                        <td className="py-4 md:py-[22px] text-sm md:text-[18px] text-[#656565] font-semibold">
                                            포함
                                        </td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-4 md:py-[22px] bg-[#f4f6f4] text-[#313131] text-base md:text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            보철물 업그레이드
                                        </td>
                                        <td className="py-4 md:py-[22px] border-r border-[#e2e2e2] text-sm md:text-[18px] text-[#656565] font-semibold">
                                            포함
                                        </td>
                                        <td className="py-4 md:py-[22px] text-sm md:text-[18px] text-[#656565] font-semibold">
                                            포함
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 md:py-[22px] bg-[#f4f6f4] text-[#313131] text-base md:text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            사후 보증제
                                        </td>
                                        <td className="py-4 md:py-[22px] border-r border-[#e2e2e2] text-sm md:text-[18px] text-[#656565] font-semibold">
                                            포함
                                        </td>
                                        <td className="py-4 md:py-[22px] text-sm md:text-[18px] text-[#656565] font-semibold">
                                            포함
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 2. 가격 포함 항목 안내 */}
                    <div className="mb-[60px] md:mb-[80px]">
                        <h3 className="text-center text-2xl md:text-[30px] font-bold text-[#263C33] mb-[20px]">
                            가격 포함 항목 안내
                        </h3>
                        <div className="w-full border-b border-[#7c7c7c] overflow-x-auto rounded-t-[10px]">
                            <table className="w-full border-collapse min-w-[500px] md:min-w-full">
                                <thead>
                                    <tr className="bg-[#244736] text-white text-base md:text-[22px] font-medium text-center">
                                        <th className="py-3 md:py-[18px] w-[34%] border-r border-[#335946]">
                                            포함 항목
                                        </th>
                                        <th className="py-3 md:py-[18px] w-[66%]">내용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-4 md:py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-base md:text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            정밀 진단
                                        </td>
                                        <td className="py-4 md:py-[22px] px-4 md:px-[40px] text-sm md:text-[18px] text-[#656565] font-semibold whitespace-normal break-keep">
                                            3D CT 촬영 및 모의 시술 진행
                                        </td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-4 md:py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-base md:text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            맞춤형 지대주
                                        </td>
                                        <td className="py-4 md:py-[22px] px-4 md:px-[40px] text-sm md:text-[18px] text-[#656565] font-semibold whitespace-normal break-keep">
                                            개인 구강 구조에 맞춘 지대주 사용
                                        </td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-4 md:py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-base md:text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            보철물 업그레이드
                                        </td>
                                        <td className="py-4 md:py-[22px] px-4 md:px-[40px] text-sm md:text-[18px] text-[#656565] font-semibold whitespace-normal break-keep">
                                            자연치아와 유사한 지르코니아 치아 적용
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 md:py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-base md:text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            사후 보증제
                                        </td>
                                        <td className="py-4 md:py-[22px] px-4 md:px-[40px] text-sm md:text-[18px] text-[#656565] font-semibold whitespace-normal break-keep">
                                            치료 후 무상 관리 제공
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 3. 건강보험 임플란트 안내 */}
                    <div className="mb-[80px] md:mb-0">
                        <h3 className="text-center text-2xl md:text-[30px] font-bold text-[#263C33] mb-[20px]">
                            건강보험 임플란트 안내
                        </h3>
                        <div className="w-full border-b border-[#7c7c7c] overflow-x-auto rounded-t-[10px]">
                            <table className="w-full border-collapse min-w-[500px] md:min-w-full">
                                <thead>
                                    <tr className="bg-[#244736] text-white text-base md:text-[22px] font-medium text-center">
                                        <th className="py-3 md:py-[18px] w-[34%] border-r border-[#335946]">구분</th>
                                        <th className="py-3 md:py-[18px] w-[66%]">내용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-4 md:py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-base md:text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            적용 대상
                                        </td>
                                        <td className="py-4 md:py-[22px] px-4 md:px-[40px] text-sm md:text-[18px] text-[#656565] font-semibold whitespace-normal break-keep">
                                            만 65세 이상
                                        </td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-4 md:py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-base md:text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            본인 부담금
                                        </td>
                                        <td className="py-4 md:py-[22px] px-4 md:px-[40px] text-sm md:text-[18px] text-[#656565] font-semibold whitespace-normal break-keep">
                                            약 30% 수납
                                        </td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-4 md:py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-base md:text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            예상 비용
                                        </td>
                                        <td className="py-4 md:py-[22px] px-4 md:px-[40px] text-sm md:text-[18px] text-[#656565] font-semibold whitespace-normal break-keep">
                                            약 30만원 대 초중반 예상
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 md:py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-base md:text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            수납
                                        </td>
                                        <td className="py-4 md:py-[22px] px-4 md:px-[40px] text-sm md:text-[18px] text-[#656565] font-semibold whitespace-normal break-keep">
                                            치료 단계별 3회 분할 수납 가능
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 추가 안내사항 */}
                    {/* #STYLE: 모바일 전용 카드 백그라운드 분리. md 이상 환경에서는 배경과 패딩을 지워 기존 레이아웃 가이드 완벽 보존 */}
                    <div className="mt-16 md:mt-[150px] w-full md:max-w-none bg-[#f8f9f8] md:bg-transparent rounded-[16px] md:rounded-none p-6 md:p-0 border border-[#e8ebe8] md:border-none flex flex-col items-center">
                        <div className="flex flex-col items-center mb-6 md:mb-0">
                            <img src="/images/common/i_tooth_g.svg" className="w-9 md:w-[44px] block md:mb-0" alt="" />
                            <h3 className="text-xl md:text-[30px] font-bold text-[#263C33] md:text-[#354C43] md:mt-[0px] md:mb-[12px]">
                                추가 안내사항
                            </h3>
                        </div>

                        {/* #STYLE: 모바일에서는 좌측 정렬 및 리스트 간격 할당, md 이상 환경에서는 기존 원본 스펙 매핑 */}
                        <div className="w-full md:w-auto space-y-4 md:space-y-0 text-left md:text-center">
                            <div className="flex items-start md:items-center gap-3 md:gap-[10px] md:mb-[10px] justify-start md:justify-center">
                                <span className="block w-1.5 h-1.5 bg-green-600 md:bg-[#414141] rounded-full mt-2 md:mt-0 md:w-[6px] md:h-[6px] shrink-0"></span>
                                <p className="text-sm md:text-[20px] font-medium md:font-semibold text-[#4a5f55] md:text-[#354C43] leading-relaxed md:leading-normal break-keep">
                                    진단부터 최종 보철까지 안내해드린 가격 외에 추가 비용을 요구하지 않습니다.
                                </p>
                            </div>
                            <div className="flex items-start md:items-center gap-3 md:gap-[10px] md:mb-[10px] justify-start md:justify-center">
                                <span className="block w-1.5 h-1.5 bg-green-600 md:bg-[#414141] rounded-full mt-2 md:mt-0 md:w-[6px] md:h-[6px] shrink-0"></span>
                                <p className="text-sm md:text-[20px] font-medium md:font-semibold text-[#4a5f55] md:text-[#354C43] leading-relaxed md:leading-normal break-keep">
                                    맞춤형 지대주와 지르코니아 보철 업그레이드 비용은 별도로 청구하지 않습니다.
                                </p>
                            </div>
                            <div className="flex items-start md:items-center gap-3 md:gap-[10px] justify-start md:justify-center">
                                <span className="block w-1.5 h-1.5 bg-green-600 md:bg-[#414141] rounded-full mt-2 md:mt-0 md:w-[6px] md:h-[6px] shrink-0"></span>
                                <p className="text-sm md:text-[20px] font-medium md:font-semibold text-[#4a5f55] md:text-[#354C43] leading-relaxed md:leading-normal break-keep">
                                    뼈이식 등 추가 치료가 필요한 경우에만 별도 비용이 발생할 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FaqSection isBg={true} />

            <MapSection />
        </main>
    );
}
