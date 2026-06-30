import HeroSection from '@/components/HeroSection';
import SpecialSection from './../../../components/SpecialSection';
import RecommendSection from '../../../components/RecommendSection';
import ProcessSection from '../../../components/ProcessSection';
import CareSection from '../../../components/CareSection';
import FaqSection from '../../../components/FaqSection';
import AskSection from '../../../components/AskSection';
import MapSection from '../../../components/MapStion';
import TechSection from '../../../components/TechSection';

export default function ProcessPage() {
    const implantMenuList = ['진행과정', '보험 임플란트'];

    // #ISSUE: 추후 이미지 경로변경
    const processProcessSteps = [
        {
            stepNumber: 1,
            title: '나에게 맞는 치료를 설계합니다.',
            description: '정밀 진단을 통해 구강 상태를 정확하게 파악하고 \n맞춤 치료 계획을 수립합니다.',
            imgSrc: '/images/pro_item_1.jpg',
            imgAlt: '기드온치과 임플란트 정밀 진단 과정',
        },
        {
            stepNumber: 2,
            title: '안정적인 식립을 진행합니다.',
            description: '임플란트가 잇몸뼈와 단단하게 결합될 수 있도록 \n체계적으로 치료를 진행합니다.',
            imgSrc: '/images/pro_item_5.jpg',
            imgAlt: '기드온치과 임플란트 식립 과정',
        },
        {
            stepNumber: 3,
            title: '건강한 미소를 완성합니다.',
            description: '자연치아와 유사한 보철물을 제작하고 \n정기적인 관리로 오래 사용할 수 있도록 돕습니다.',
            imgSrc: '/images/pro_item_6.jpg',
            imgAlt: '기드온치과 임플란트 보철물 완성 과정',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="임플란트"
                subTitle="GIDEON DENTAL CLINIC"
                pageName="임플란트"
                subNavItem="진행과정"
                imgSrc="/images/bg_yellow.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={implantMenuList}
            />

            <TechSection
                topTitle="GIDEON DENTAL CLINIC"
                centerTitle="기드온 임플란트"
                // #STYLE반응형줄바꿈: br에 반응형 클래스로 사이즈별 줄바꿈 위치 제어
                desc={
                    <>
                        기드온의 임플란트는 환자 한 분 한 분의 구강 상태를 세심하게 고려하여
                        <br className="hidden md:block" />
                        불편함은 줄이고 만족도는 높이는 치료를 제공하며, 편안한 일상 회복을 돕습니다.
                    </>
                }
                imageSrc="/images/tech_img_1.png"
                imageAlt="기드온치과 임플란트 장비 이미지"
                // #STYLE: 픽셀 고정값(w-[370px]) → 반응형 단계별 너비로 변경, aspect-ratio는 유지
                imgClass="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[370px] aspect-[180/91]"
                isMargin="mt-[40px] md:mt-[60px] mb-[30px] md:mb-[50px]"
            />

            <ProcessSection topTitle="PROCESS" centerTitle="임플란트 진행과정" stepData={processProcessSteps} />

            <FaqSection isBg={false} />
            <AskSection />
            <MapSection />
        </main>
    );
}
