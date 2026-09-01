import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/common/SectionHeading';
import SpecialSection from '@/components/SpecialSection';
import RecommendSection from '@/components/RecommendSection';
import CareSection from '@/components/CareSection';
import FaqSection from '@/components/FaqSection';
import AskSection from '@/components/AskSection';
import MapSection from '@/components/MapStion';
import TechSection from '@/components/TechSection';
import { getSubNames } from '@/data/nav';

export default function TScanPage() {
    const guideMenuList = getSubNames('턱관절·교합케어');

    const tScanCards = [
        {
            id: 1,
            cardTitle: '교합 압력의\n정밀 수치화',
            cardDesc:
                '좌우 치아 전체에 분산되는 악력의 퍼센티지(%)와\n중심축 이동 경로를 실시간 그래프로 데이터화합니다.',
            specialSrc: '/images/i_special_8.svg',
            specialAlt: '',
        },
        {
            id: 2,
            cardTitle: '1/1,000초 단위의\n시간 분석',
            cardDesc: '입을 다물 때 어느 치아에 가장 먼저\n강한 힘이 닿는지 미세한 타이밍 차이를 감지합니다.',
            specialSrc: '/images/i_special_9.svg',
            specialAlt: '',
        },
        {
            id: 3,
            cardTitle: '치료 성공률 향상',
            cardDesc:
                '보철물 깨짐 방지, 교정 후 재발 위험감소, 턱관절 유해 간섭 제거 등\n치과 치료의 완성도를 극대화합니다.',
            specialSrc: '/images/i_special_10.svg',
            specialAlt: '',
        },
    ];

    const tScanRecommendList = [
        {
            title: '턱관절 및 교합 치료',
            description: '턱관절 통증과 만성 두통을 유발하는\n특정 치아의 과교합(초기 접촉) 선별 및\n정밀 미세 조정',
            bgClass: 'bg-[#40584E]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '임플란트 & 심미보철 수복 후',
            description:
                '보철물에 과도한 부하가 쏠려\n발생할 수 있는 보철 파절, 나사 풀림, 잇몸뼈 흡수를 사전 예방합니다.',
            bgClass: 'bg-[#7A9389]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '치아교정 완료 단계',
            description: '교정 장치 제거 후 치아 전체에 악력이\n균등하게 분산되도록 맞물림 평형을 점검합니다.',
            bgClass: 'bg-[#F4F1EA]',
            textColorClass: 'text-[#414141]',
            iconSrc: '/images/common/i_tooth_b.png',
            lineColor: 'rgba(2, 2, 2, 0.3)',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="턱관절·교합케어"
                subTitle="TMJ & Occlusion"
                pageName="턱관절·교합케어"
                subNavItem="T-Scan 디지털 교합분석"
                imgSrc="/images/bg_yellow.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={guideMenuList}
            />

            <TechSection
                topTitle="T-Scan Occlusal Analysis"
                centerTitle="T-Scan 디지털 교합분석"
                desc={
                    <>
                        <p>눈에 보이지 않는 씹는 힘(교합)을 1/1,000초 단위 수치로 측정.</p>
                        <p>“치료 후에도 계속 이가 얼얼하거나 턱이 아프신가요?”</p>
                        <p>
                            기존의 씹는 종이(치은지) 진단만으로는 치아에 가해지는 실제 압력의 크기와 시간차를 정확히
                            측정하기 어렵습니다.
                        </p>
                        <p>
                            기드온치과는 T-Scan III 디지털 교합 분석 시스템을 통해 객관적 수치 데이터 기반의 초정밀 교합
                            케어를 제공합니다.
                        </p>
                    </>
                }
                imageSrc="/images/tech_img_4.png"
                imageAlt=""
                imgClass="w-[230px] sm:w-[300px] md:w-[380px] lg:w-[440px] aspect-[180/91]"
                isMargin="mt-[40px] md:mt-[60px] mb-[30px] md:mb-[50px]"
            />

            <SpecialSection
                topTitle="WHY T-SCAN"
                centerTitle="T-Scan 디지털 교합분석이 필요한 이유"
                cardList={tScanCards}
            />
            <RecommendSection
                topTitle="APPLICATION"
                centerTitle="T-Scan 정밀 교합케어 적용 분야"
                cardList={tScanRecommendList}
            />
            <section className="bg-[#FAF9F6] px-4 py-[70px] md:py-[100px] 2xl:py-[130px]">
                <div className="mx-auto w-full max-w-[860px]">
                    <SectionHeading
                        topTitle="GIDEON'S POINT"
                        centerTitle="수치로 증명하는 정밀한 교합 평형"
                    />
                    <div className="mx-auto mt-10 flex max-w-[38rem] flex-col gap-4">
                        <p className="break-keep text-center text-[17px] font-medium leading-[1.85] text-[#444] md:text-[19px]">
                            “단순 통증 완화에 그치지 않고, 수치화된 교합 평형을 완성합니다.”
                        </p>
                        <p className="break-keep text-center text-[17px] font-medium leading-[1.85] text-[#444] md:text-[19px]">
                            턱관절 및 치과 치료의 핵심은 눈대중이 아닌 정밀 데이터에 있습니다.
                        </p>
                        <p className="break-keep text-center text-[17px] font-medium leading-[1.85] text-[#444] md:text-[19px]">
                            기드온치과는 T-Scan 디지털 교합 측정 결과를 바탕으로 턱관절에 유해한 교합 간섭만을 정교하게
                            다듬어, 재발 위험을 낮추고 가장 편안한 씹는 즐거움을 약속합니다.
                        </p>
                    </div>
                </div>
            </section>
            <CareSection />
            <FaqSection isBg={false} />
            <AskSection />
            <MapSection />
        </main>
    );
}
