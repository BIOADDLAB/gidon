import HeroSection from '@/components/HeroSection';
import SectionHeading from './../../components/common/SectionHeading';

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

            <section className="py-[100px] bg-white">
                <div className="w-[1160px] mx-auto ">
                    <SectionHeading
                        topTitle="FEE GUIDE"
                        centerTitle="가격 안내"
                        desc={'처음 상담부터 최종 보철까지,\n감추는 비용 없이 처음부터 정확하게 안내해드립니다.'}
                        isDesc={true}
                    />

                    <span className="block w-[98px] h-[3px] bg-green-600 mt-[60px] mb-[130px] mx-auto"></span>

                    {/* 1. 임플란트 비용안내 */}
                    <div className="mb-[80px]">
                        <h3 className="text-center text-[30px] font-bold text-[#263C33] mb-[20px]">
                            임플란트 비용안내
                        </h3>
                        <div className="w-full border-b border-[#7c7c7c] overflow-hidden rounded-t-[10px]">
                            <table className="w-full text-center border-collapse">
                                <thead>
                                    {/* 💡 헤더 스펙: 22px, 500(font-medium) */}
                                    <tr className="bg-green-600 text-white text-[22px] font-medium">
                                        <th className="py-[18px] w-[34%] border-r border-[#335946]">구분</th>
                                        <th className="py-[18px] w-[33%] border-r border-[#335946]">오스템 임플란트</th>
                                        <th className="py-[18px] w-[33%]">스트라우만 임플란트</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#e2e2e2]">
                                        {/* 💡 구분 스펙: #313131, 20px, 600(font-semibold) */}
                                        <td className="py-[22px] bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            가격
                                        </td>
                                        {/* 💡 내용 스펙: #656565(가격강조색유지), 18px, 600(font-semibold) */}
                                        <td className="py-[22px] border-r border-[#e2e2e2] text-[18px] font-semibold text-[#244736]">
                                            00만원
                                        </td>
                                        <td className="py-[22px] text-[18px] font-semibold text-[#244736]">00만원</td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-[22px] bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            정밀 진단비 (3D CT 및 모의 시술)
                                        </td>
                                        <td className="py-[22px] border-r border-[#e2e2e2] text-[18px] text-[#656565] font-semibold">
                                            포함
                                        </td>
                                        <td className="py-[22px] text-[18px] text-[#656565] font-semibold">포함</td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-[22px] bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            맞춤형 지대주
                                        </td>
                                        <td className="py-[22px] border-r border-[#e2e2e2] text-[18px] text-[#656565] font-semibold">
                                            포함
                                        </td>
                                        <td className="py-[22px] text-[18px] text-[#656565] font-semibold">포함</td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-[22px] bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            보철물 업그레이드
                                        </td>
                                        <td className="py-[22px] border-r border-[#e2e2e2] text-[18px] text-[#656565] font-semibold">
                                            포함
                                        </td>
                                        <td className="py-[22px] text-[18px] text-[#656565] font-semibold">포함</td>
                                    </tr>
                                    <tr>
                                        <td className="py-[22px] bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            사후 보증제
                                        </td>
                                        <td className="py-[22px] border-r border-[#e2e2e2] text-[18px] text-[#656565] font-semibold">
                                            포함
                                        </td>
                                        <td className="py-[22px] text-[18px] text-[#656565] font-semibold">포함</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 2. 가격 포함 항목 안내 */}
                    <div className="mb-[80px]">
                        <h3 className="text-center text-[30px] font-bold text-[#263C33] mb-[20px]">
                            가격 포함 항목 안내
                        </h3>
                        <div className="w-full border-b border-[#7c7c7c] overflow-hidden rounded-t-[10px]">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#244736] text-white text-[22px] font-medium text-center">
                                        <th className="py-[18px] w-[34%] border-r border-[#335946]">포함 항목</th>
                                        <th className="py-[18px] w-[66%]">내용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            정밀 진단
                                        </td>
                                        <td className="py-[22px] px-[40px] text-[18px] text-[#656565] font-semibold">
                                            3D CT 촬영 및 모의 시술 진행
                                        </td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            맞춤형 지대주
                                        </td>
                                        <td className="py-[22px] px-[40px] text-[18px] text-[#656565] font-semibold">
                                            개인 구강 구조에 맞춘 지대주 사용
                                        </td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            보철물 업그레이드
                                        </td>
                                        <td className="py-[22px] px-[40px] text-[18px] text-[#656565] font-semibold">
                                            자연치아와 유사한 지르코니아 치아 적용
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            사후 보증제
                                        </td>
                                        <td className="py-[22px] px-[40px] text-[18px] text-[#656565] font-semibold">
                                            치료 후 무상 관리 제공
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 3. 건강보험 임플란트 안내 */}
                    <div>
                        <h3 className="text-center text-[30px] font-bold text-[#263C33] mb-[20px]">
                            건강보험 임플란트 안내
                        </h3>
                        <div className="w-full border-b border-[#7c7c7c] overflow-hidden rounded-t-[10px]">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#244736] text-white text-[22px] font-medium text-center">
                                        <th className="py-[18px] w-[34%] border-r border-[#335946]">구분</th>
                                        <th className="py-[22px] w-[66%]">내용</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            적용 대상
                                        </td>
                                        <td className="py-[22px] px-[40px] text-[18px] text-[#656565] font-semibold">
                                            만 65세 이상
                                        </td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            본인 부담금
                                        </td>
                                        <td className="py-[22px] px-[40px] text-[18px] text-[#656565] font-semibold">
                                            약 30% 수납
                                        </td>
                                    </tr>
                                    <tr className="border-b border-[#e2e2e2]">
                                        <td className="py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            예상 비용
                                        </td>
                                        <td className="py-[22px] px-[40px] text-[18px] text-[#656565] font-semibold">
                                            약 30만원 대 초중반 예상
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-[22px] text-center bg-[#f4f6f4] text-[#313131] text-[20px] font-semibold border-r border-[#e2e2e2]">
                                            수납
                                        </td>
                                        <td className="py-[22px] px-[40px] text-[18px] text-[#656565] font-semibold">
                                            치료 단계별 3회 분할 수납 가능
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 추가 안내사항 */}
                    <div className="flex flex-col items-center mt-[150px]">
                        <img src="/images/common/i_tooth_g.svg" className="w-[44px] block" alt="" />
                        <h3 className="text-[30px] font-bold text-[#354C43] mb-[12px]">추가 안내사항</h3>
                        <div>
                            <div className="flex items-center gap-[10px] mb-[10px] justify-center">
                                <span className="block w-[6px] h-[6px] bg-[#414141] rounded-full"></span>
                                <p className="text-[20px] font-semibold text-[#354C43]">
                                    진단부터 최종 보철까지 안내해드린 가격 외에 추가 비용을 요구하지 않습니다.
                                </p>
                            </div>
                            <div className="flex items-center gap-[10px] mb-[10px] justify-center">
                                <span className="block w-[6px] h-[6px] bg-[#414141] rounded-full"></span>
                                <p className="text-[20px] font-semibold text-[#354C43]">
                                    맞춤형 지대주와 지르코니아 보철 업그레이드 비용은 별도로 청구하지 않습니다.
                                </p>
                            </div>
                            <div className="flex items-center gap-[10px] justify-center">
                                <span className="block w-[6px] h-[6px] bg-[#414141] rounded-full"></span>
                                <p className="text-[20px] font-semibold text-[#354C43]">
                                    뼈이식 등 추가 치료가 필요한 경우에만 별도 비용이 발생할 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
