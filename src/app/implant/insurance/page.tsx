import HeroSection from '@/components/HeroSection';
import FaqSection from '../../../components/FaqSection';
import AskSection from '../../../components/AskSection';
import MapSection from '../../../components/MapStion';
import SectionHeading from './../../../components/common/SectionHeading';

export default function InsurancePage() {
    const insuranceMenuList = ['진행과정', '보험 임플란트'];

    return (
        <main>
            <HeroSection
                mainTitle="임플란트"
                subTitle="Implant"
                pageName="임플란트"
                subNavItem="보험 임플란트"
                imgSrc="/images/bg_green1.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={insuranceMenuList}
            />

            {/* 보험임플란트란 */}
            <section className="w-full py-[100px] flex flex-col items-center bg-white">
                <div className="w-full max-w-[1000px] px-4 flex flex-col items-center">
                    {/* 상단 타이틀 영역 */}
                    <SectionHeading
                        topTitle="GIDEON DENTAL CLINIC"
                        centerTitle="보험 임플란트"
                        desc={`보험 임플란트는 만 65세 이상 어르신을 대상으로 \n건강보험 혜택을 받을 수 있는 임플란트 치료입니다. \n치료 비용 부담은 줄이고, 건강한 치아 기능을 회복할 수 있도록 돕습니다.`}
                        isDesc={true}
                    />

                    <div className="flex flex-col md:flex-row items-stretch border border-[#b0b0b0] rounded-[15px] w-full max-w-[760px] mt-[50px] overflow-hidden">
                        {/* 적용대상 */}
                        <div className="flex-1 flex flex-col items-center text-center px-6 py-[45px] border-b md:border-b-0 md:border-r border-[#b0b0b0]">
                            <img src="/images/i_insu_1.svg" className="w-[74px] mb-4 block" alt="적용대상 아이콘" />
                            <h4 className="text-[25px] font-bold text-[#233a31] mb-3">적용대상</h4>
                            <p className="text-[18px] text-[#363636] leading-[1.7] break-keep">
                                만 65세 이상 건강보험
                                <br />
                                가입자 또는 피부양자
                                <br />
                                (무치악이 아닌 환자)
                            </p>
                        </div>

                        {/* 지원내용 */}
                        <div className="flex-1 flex flex-col items-center text-center px-6 py-[45px] border-b md:border-b-0 md:border-r border-[#b0b0b0]">
                            <img src="/images/i_insu_2.svg" className="w-[74px] mb-4 block" alt="지원내용 아이콘" />
                            <h4 className="text-[25px] font-bold text-[#233a31] mb-3">지원내용</h4>
                            <p className="text-[18px] text-[#363636] leading-[1.7] break-keep">
                                진료비 환자 본인
                                <br />
                                부담률 30%
                            </p>
                        </div>

                        {/* 적용개수 */}
                        <div className="flex-1 flex flex-col items-center text-center px-6 py-[45px]">
                            <img src="/images/i_insu_3.svg" className="w-[74px] mb-4 block" alt="적용개수 아이콘" />
                            <h4 className="text-[25px] font-bold text-[#233a31] mb-3">적용개수</h4>
                            <p className="text-[18px] text-[#363636] leading-[1.7] break-keep">1인당 평생 2개</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 자주 묻는 질문 */}
            <FaqSection isBg={false} />

            {/* 간편상담 폼 */}
            <AskSection />

            <MapSection />
        </main>
    );
}
