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
            imgAlt: '',
        },
        {
            stepNumber: 2,
            title: '안정적인 식립을 진행합니다.',
            description: '임플란트가 잇몸뼈와 단단하게 결합될 수 있도록 \n체계적으로 치료를 진행합니다.',
            imgSrc: '/images/pro_item_5.jpg',
            imgAlt: '',
        },
        {
            stepNumber: 3,
            title: '건강한 미소를 완성합니다.',
            description: '자연치아와 유사한 보철물을 제작하고 \n정기적인 관리로 오래 사용할 수 있도록 돕습니다.',
            imgSrc: '/images/pro_item_6.jpg',
            imgAlt: '',
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
                desc={`기드온의 임플란트는 환자 한 분 한 분의 구강 상태를 세심하게 고려하여
불편함은 줄이고 만족도는 높이는 치료를 제공하며, 편안한 일상 회복을 돕습니다.`}
                imageSrc="/images/tech_img_1.png"
                imageAlt="장비 이미지"
                imgClass="w-[370px] aspect-[180/91]"
                isMargin="mt-[60px] mb-[50px]"
            />

            {/* 치료과정 */}
            <ProcessSection topTitle="PROCESS" centerTitle="임플란트 진행과정" stepData={processProcessSteps} />

            {/* 자주 묻는 질문 */}
            <FaqSection isBg={false} />

            {/* 간편상담 폼 */}
            <AskSection />

            <MapSection />
        </main>
    );
}
