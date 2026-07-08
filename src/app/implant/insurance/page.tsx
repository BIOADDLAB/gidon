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

            <section className="w-full py-[70px] md:py-[100px] 2xl:py-[130px] flex flex-col items-center bg-white">
                <div className="w-full max-w-[1000px] 2xl:max-w-[1180px] px-4 flex flex-col items-center">
                    <SectionHeading
                        topTitle="GIDEON DENTAL CLINIC"
                        centerTitle="보험 임플란트"
                        desc={
                            <>
                                보험 임플란트는 만 65세 이상 어르신을
                                <br className="hidden min-[360px]:block md:hidden" /> 대상으로
                                <br className="hidden md:block" />
                                건강보험 혜택을 받을 수 있는
                                <br className="hidden min-[360px]:block md:hidden" />
                                임플란트 치료입니다.
                                <br className="hidden md:block" />
                                <br className="hidden min-[360px]:block md:hidden" />
                                <br className="hidden min-[360px]:block md:hidden" />
                                치료 비용 부담은 줄이고, 건강한 치아 기능을
                                <br className="hidden min-[360px]:block md:hidden" />
                                회복할 수 있도록 돕습니다.
                            </>
                        }
                        isDesc={true}
                    />

                    <div className="flex flex-col md:flex-row items-stretch border border-[#b0b0b0] rounded-[15px] w-full max-w-[760px] 2xl:max-w-[880px] mt-[36px] md:mt-[50px] overflow-hidden">
                        <div className="flex-1 flex flex-col items-center text-center px-6 py-[32px] md:py-[45px] border-b md:border-b-0 md:border-r border-[#b0b0b0]">
                            <img
                                src="/images/i_insu_1.svg"
                                className="w-[58px] md:w-[74px] mb-3 md:mb-4 block"
                                alt="보험 임플란트 적용대상 아이콘"
                            />
                            <h4 className="text-[20px] md:text-[25px] font-bold text-[#233a31] mb-2 md:mb-3">
                                적용대상
                            </h4>
                            <p className="text-[15px] md:text-[18px] text-[#363636] leading-[1.7] break-keep">
                                만 65세 이상 건강보험 가입자 또는 피부양자 (무치악이 아닌 환자)
                            </p>
                        </div>

                        <div className="flex-1 flex flex-col items-center text-center px-6 py-[32px] md:py-[45px] border-b md:border-b-0 md:border-r border-[#b0b0b0]">
                            <img
                                src="/images/i_insu_2.svg"
                                className="w-[58px] md:w-[74px] mb-3 md:mb-4 block"
                                alt="보험 임플란트 지원내용 아이콘"
                            />
                            <h4 className="text-[20px] md:text-[25px] font-bold text-[#233a31] mb-2 md:mb-3">
                                지원내용
                            </h4>
                            <p className="text-[15px] md:text-[18px] text-[#363636] leading-[1.7] break-keep">
                                진료비 환자 본인 부담률 30%
                            </p>
                        </div>

                        <div className="flex-1 flex flex-col items-center text-center px-6 py-[32px] md:py-[45px]">
                            <img
                                src="/images/i_insu_3.svg"
                                className="w-[58px] md:w-[74px] mb-3 md:mb-4 block"
                                alt="보험 임플란트 적용개수 아이콘"
                            />
                            <h4 className="text-[20px] md:text-[25px] font-bold text-[#233a31] mb-2 md:mb-3">
                                적용개수
                            </h4>
                            <p className="text-[15px] md:text-[18px] text-[#363636] leading-[1.7] break-keep">
                                1인당 평생 2개
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <FaqSection isBg={true} />
            <AskSection />
            <MapSection />
        </main>
    );
}
