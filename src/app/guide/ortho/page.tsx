import HeroSection from '@/components/HeroSection';
import RecommendSection from '@/components/RecommendSection';
import ProcessSection from '@/components/ProcessSection';
import CareSection from '@/components/CareSection';
import FaqSection from '@/components/FaqSection';
import AskSection from '@/components/AskSection';
import MapSection from '@/components/MapStion';
import TechSection from '@/components/TechSection';
import { getSubNames } from '@/data/nav';

export default function OrthoPage() {
    const subMenuList = getSubNames('디지털 치아교정');

    const orthoRecommendList = [
        {
            title: '돌출입 / 주걱턱 교정',
            description:
                '치아 이동 경로와 잇몸뼈의 한계를\n정밀 계산하여 부작용 위험을 줄이고\n자연스러운 입매 라인과\n안면 비대칭 개선',
            bgClass: 'bg-[#40584E]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '복합 치열 불균형\n(심한 덧니 / 덧니 교정)',
            description:
                '치아 공간을 효율적으로 재배치하여\n잇몸 손상과 잇몸 퇴축 위험을 최소화하는\n안전한 교정',
            bgClass: 'bg-[#7A9389]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '턱관절 통증 동반 교정',
            description:
                '교정 과정에서 턱관절에 무리가 가지 않도록\n관절 안정성을 최우선으로 고려한\n교정 계획 수립',
            bgClass: 'bg-[#F4F1EA]',
            textColorClass: 'text-[#414141]',
            iconSrc: '/images/common/i_tooth_b.png',
            lineColor: 'rgba(2, 2, 2, 0.3)',
        },
    ];

    const orthoProcessSteps = [
        {
            stepNumber: 1,
            title: '3D CT 및 턱관절 입체 분석',
            description:
                '3D CT 정밀 진단으로 치아 뿌리의\n3차원 위치, 잇몸뼈 두께,\n턱관절 관절두의 안정성을 오차 없이 파악합니다.',
            imgSrc: '/images/pro_item_1.jpg',
            imgAlt: '성남 기드온치과 성인교정 3D CT 진단',
        },
        {
            stepNumber: 2,
            title: '맞춤 장치 선정 및 정밀 이동',
            description:
                '환자의 골밀도와 치아 이동 속도에 맞춰 최적의 브라켓 및\n교정 장치를 적용하여 안전하고 효율적인 치아 이동을 진행합니다.',
            imgSrc: '/images/pro_item_8.jpg',
            imgAlt: '성남 기드온치과 성인교정 장치',
        },
        {
            stepNumber: 3,
            title: 'T-Scan 교합 평형 점검 (Special Care)',
            description:
                '교정 장치 제거 후 눈으로 확인하기 힘든 미세한 깨물림 균형을 T-Scan으로 수치화하여 측정합니다. 치아 전체에 악력이 균등하게 분산되도록 완성하여 교정 후 재발 가능성을 낮추고 턱관절 질환을 예방합니다.',
            imgSrc: '/images/pro_item_10.jpg',
            imgAlt: '성남 기드온치과 교정 후 T-Scan',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="디지털 치아교정"
                subTitle="Digital Orthodontics"
                pageName="디지털 치아교정"
                subNavItem="성인/전체교정"
                imgSrc="/images/bg_green1.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={subMenuList}
            />

            <TechSection
                topTitle="Adult Orthodontics"
                centerTitle="성인/전체교정"
                desc={
                    <>
                        <p>교합 수치까지 측정하여 완성하는 바른 치열과 안면 균형.</p>
                        <p>단순히 겉으로 보이는 치열을 가지런히 정돈하는 것만으로는 부족합니다.</p>
                        <p>
                            기드온치과의 성인/전체교정은 치아의 뿌리 위치, 잇몸뼈 두께, 턱관절의 편안함, 그리고 얼굴
                            전체의 균형(입매 라인)까지 다각도로 고려합니다.
                        </p>
                        <p>수치화된 정밀 진단을 통해 장기적으로 안정적인 바른 교합을 완성합니다.</p>
                    </>
                }
                imageSrc="/images/tech_img_2.png"
                imageAlt=""
                imgClass="w-[230px] sm:w-[300px] md:w-[380px] lg:w-[440px] aspect-[180/91]"
                isMargin="mt-[40px] md:mt-[60px] mb-[30px] md:mb-[50px]"
            />

            <RecommendSection
                topTitle="WHO IS IT FOR"
                centerTitle="고민별 맞춤 전체교정 솔루션"
                cardList={orthoRecommendList}
            />
            <ProcessSection
                topTitle="PROCESS"
                centerTitle="기드온 디지털 정밀 진단 시스템"
                stepData={orthoProcessSteps}
            />
            <CareSection />
            <FaqSection isBg={false} />
            <AskSection />
            <MapSection />
        </main>
    );
}
