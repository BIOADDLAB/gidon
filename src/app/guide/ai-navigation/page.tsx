import HeroSection from '@/components/HeroSection';
import SpecialSection from './../../../components/SpecialSection';
import RecommendSection from '../../../components/RecommendSection';
import ProcessSection from '../../../components/ProcessSection';
import CareSection from '../../../components/CareSection';
import FaqSection from '../../../components/FaqSection';
import AskSection from '../../../components/AskSection';
import MapSection from '../../../components/MapStion';
import TechSection from '../../../components/TechSection';

export default function AiNavigationPage() {
    const guideMenuList = ['AI 네비게이션 임플란트', '물방울레이저 치주관리', '티스캔 교합관리', '시니어 라미네이트'];

    const aiCards = [
        {
            id: 1,
            cardTitle: '내 치아 상태에 맞춘 \n맞춤 계획',
            cardDesc:
                '3D 정밀 검사를 통해 잇몸뼈와 \n치아 상태를 꼼꼼히 확인하고, \n환자분에게 맞는 치료 계획을 세웁니다.',
            specialSrc: '/images/i_special_1.svg',
            specialAlt: '치아 아이콘',
        },
        {
            id: 2,
            cardTitle: '더욱 정확한 \n임플란트 수술',
            cardDesc: '미리 계획한 위치에 정확하게 \n식립하여 더욱 안정적이고 \n자연스러운 결과를 추구합니다.',
            specialSrc: '/images/i_special_2.svg',
            specialAlt: '임플란트 아이콘',
        },
        {
            id: 3,
            cardTitle: '통증과 부담은 \n줄이고',
            cardDesc: '불필요한 절개를 최소화하여 \n출혈과 붓기, 회복에 \n대한 부담을 줄여드립니다.',
            specialSrc: '/images/i_special_3.svg',
            specialAlt: '임플란트 아이콘',
        },
        {
            id: 4,
            cardTitle: '수술 후 관리까지 \n책임지고',
            cardDesc: '임플란트를 심는 것에서 끝나지 않고, \n오래 사용할 수 있도록 \n꾸준히 관리해드립니다.',
            specialSrc: '/images/i_special_4.svg',
            specialAlt: '임플란트 아이콘',
        },
    ];

    const aiRecommendList = [
        {
            title: '임플란트 치료가 \n걱정되시는 분',
            description: '정확한 진단과 체계적인 계획을 \n바탕으로 보다 안전한 \n임플란트 치료를 진행합니다.',
            bgClass: 'bg-[#40584E]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '치아가 빠져 불편함을 \n겪고 계신 분',
            description: '저작 기능 회복을 통해 \n편안한 식사와 \n일상생활을 돕습니다.',
            bgClass: 'bg-[#7A9389]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '보다 정밀한 치료를 \n원하시는 분',
            description: '디지털 진단 데이터를 활용하여 \n개인 맞춤형 임플란트 치료를 \n제공합니다.',
            bgClass: 'bg-[#F4F1EA]',
            textColorClass: 'text-[#414141]',
            iconSrc: '/images/common/i_tooth_b.png',
            lineColor: 'rgba(2, 2, 2, 0.3)',
        },
    ];

    // #ISSUE: 추후 이미지 경로변경
    const aiProcessSteps = [
        {
            stepNumber: 1,
            title: '꼼꼼한 정밀 검사로 치아 상태 확인',
            description:
                '디지털 장비와 구강 검진을 통해 치아 마모도와 \n잇몸 상태를 분석하고, 안전한 맞춤 치료 계획을 세웁니다.',
            imgSrc: '/images/pro_item_9.jpg',
            imgAlt: '정밀 진단 과정',
        },
        {
            stepNumber: 2,
            title: '최소 삭제와 미세 조절로 치아 보강',
            description:
                '치아를 마구 깎아내지 않고 표면만 미세하게 정리한 뒤, \n친환경 재료를 정교하게 붙여 바르고 튼튼하게 만듭니다.',
            imgSrc: '/images/pro_item_3.jpg',
            imgAlt: '치아 정돈 과정',
        },
        {
            stepNumber: 3,
            title: '정기적인 사후 관리로 튼튼하게 유지',
            description:
                '치료 후 잇몸이 건강하게 잘 아물었는지 확인하고, \n정기 검진을 통해 잇몸을 오래 쓰도록 관리합니다.',
            imgSrc: '/images/pro_item_6.jpg',
            imgAlt: '최종 부착 과정',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="진료안내"
                subTitle="Medical Guide"
                pageName="AI 네비게이션 임플란트"
                subNavItem="AI 네비게이션 임플란트"
                imgSrc="/images/bg_yellow.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={guideMenuList}
            />

            <TechSection
                topTitle="Navigation Implant"
                centerTitle="네비게이션 임플란트"
                desc={`네비게이션 임플란트는 3D CT를 통해 환자 개개인의 구강 상태를 분석하고,
식립 위치를 정밀하게 계획하여 정밀한 임플란트 치료를 제공합니다.`}
                imageSrc="/images/tech_img_2.png"
                imageAlt="장비 이미지"
                imgClass="w-[440px] aspect-[180/91]"
                isMargin="mt-[60px] mb-[50px]"
            />

            <SpecialSection
                topTitle="WHY GIDEON"
                centerTitle="기드온 네비게이션 임플란트만의 특별함"
                cardList={aiCards}
            />
            <RecommendSection topTitle="RECOMMEND" centerTitle="이런 분들에게 추천합니다" cardList={aiRecommendList} />
            {/* 치료과정 */}
            <ProcessSection topTitle="PROCESS" centerTitle="네비게이션 임플란트 진행과정" stepData={aiProcessSteps} />
            {/* 주의사항 */}
            <CareSection />

            {/* 자주 묻는 질문 */}
            <FaqSection isBg={false} />

            {/* 간편상담 폼 */}
            <AskSection />

            <MapSection />
        </main>
    );
}
