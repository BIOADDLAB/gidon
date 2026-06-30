import HeroSection from '@/components/HeroSection';
import SpecialSection from './../../../components/SpecialSection';
import RecommendSection from '../../../components/RecommendSection';
import ProcessSection from '../../../components/ProcessSection';
import CareSection from '../../../components/CareSection';
import FaqSection from '../../../components/FaqSection';
import AskSection from '../../../components/AskSection';
import MapSection from '../../../components/MapStion';
import TechSection from '../../../components/TechSection';

export default function LaserPage() {
    const guideMenuList = ['AI 네비게이션 임플란트', '물방울레이저 치주관리', '티스캔 교합관리', '시니어 라미네이트'];

    const laserCards = [
        {
            id: 1,
            cardTitle: '덜 아프고 편안한 \n맞춤형 잇몸 치료',
            cardDesc: '치아 표면만 미세하게 정리하여 \n시린 증상 없이 안전하게 치료합니다.',
            specialSrc: '/images/i_special_1.svg',
            specialAlt: '치아 아이콘',
        },
        {
            id: 2,
            cardTitle: '입속 나쁜 세균만 \n쏙쏙 살균 청소',
            cardDesc: '잇몸 깊은 곳에 숨은 미세 염증과 \n원인균을 뿌리째 강력하게 살균합니다.',
            specialSrc: '/images/i_special_5.svg',
            specialAlt: '임플란트 아이콘',
        },
        {
            id: 3,
            cardTitle: '붓기와 출혈을 줄여 \n빠른 일상 회복',
            cardDesc: '잇몸 세포의 재생을 부드럽게 자극하여 \n치료 후 부기 없이 빠르게 아뭅니다.',
            specialSrc: '/images/i_special_3.svg',
            specialAlt: '임플란트 아이콘',
        },
        {
            id: 4,
            cardTitle: '내 치아와 임플란트를 \n오래오래 튼튼하게',
            cardDesc: '물리적 자극 없이 안전하게 케어하여 \n자연치아와 임플란트 수명을 늘려줍니다.',
            specialSrc: '/images/i_special_7.svg',
            specialAlt: '임플란트 아이콘',
        },
    ];

    const laserRecommendList = [
        {
            title: '잇몸이 자주 붓고 피가 나 \n식사가 불편하신 분',
            description: '미세 염증과 원인균을 통증 없이 \n깨끗하게 제거하여 \n건강한 식사를 도와드립니다.',
            bgClass: 'bg-[#40584E]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '수술 시 통증과 마취가 \n무섭고 걱정되시는 분',
            description: '부드러운 레이저 빛으로 \n아픔과 붓기, 출혈 부담을 \n싹 덜어드립니다.',
            bgClass: 'bg-[#7A9389]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '만성 질환이 있거나 \n약을 복용 중이신 분',
            description:
                '자극과 출혈이 적어 당뇨, 고혈압 \n환자분이나 연세가 많으신 어르신도 \n안심하고 받으실 수 있습니다.',
            bgClass: 'bg-[#F4F1EA]',
            textColorClass: 'text-[#414141]',
            iconSrc: '/images/common/i_tooth_b.png',
            lineColor: 'rgba(2, 2, 2, 0.3)',
        },
    ];

    // #ISSUE: 추후 이미지 경로변경
    const laserProcessSteps = [
        {
            stepNumber: 1,
            title: '꼼꼼한 정밀 검사로 치아 상태 확인',
            description:
                '디지털 장비와 구강 검진을 통해 치아와 잇몸 뼈 상태를 \n철저히 분석하고, 안전한 치료 계획을 세웁니다.',
            imgSrc: '/images/pro_item_8.jpg',
            imgAlt: '기드온치과 물방울레이저 치주관리 정밀 진단 과정',
        },
        {
            stepNumber: 2,
            title: '물방울레이저로 아프지 않게 세균 제거',
            description:
                '부드러운 물방울과 레이저 빛을 사용하여 통증 없이 \n잇몸 속 나쁜 세균과 염증만을 깨끗하게 치료합니다.',
            imgSrc: '/images/pro_item_2.jpg',
            imgAlt: '기드온치과 물방울레이저 치료 과정',
        },
        {
            stepNumber: 3,
            title: '정기적인 사후 관리로 튼튼하게 유지',
            description:
                '치료 후 잇몸이 건강하게 잘 아물었는지 확인하고, \n정기 검진을 통해 잇몸을 오래 쓰도록 관리합니다.',
            imgSrc: '/images/pro_item_6.jpg',
            imgAlt: '기드온치과 물방울레이저 치주관리 사후 관리 과정',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="진료안내"
                subTitle="Medical Guide"
                pageName="진료안내"
                subNavItem="물방울레이저 치주관리"
                imgSrc="/images/bg_yellow.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={guideMenuList}
            />

            <TechSection
                topTitle="WaterLase Periodontal Care"
                centerTitle="물방울레이저 치주관리"
                // #STYLE반응형줄바꿈: br에 반응형 클래스로 사이즈별 줄바꿈 위치 제어
                desc={
                    <>
                        물방울레이저 치주관리는 레이저를 이용해 <br />
                        잇몸을 건강하게 관리하는 치료입니다. <br />
                        <br className="hidden md:block" />
                        잇몸 염증과 불편함을 줄이고, 건강한 치아를 오래 유지할 수 있도록 돕습니다.
                    </>
                }
                imageSrc="/images/tech_img_3.png"
                imageAlt="기드온치과 물방울레이저 장비 이미지"
                // #STYLE: 픽셀 고정값(w-[440px]) → 반응형 단계별 너비로 변경
                imgClass="w-[230px] sm:w-[300px] md:w-[380px] lg:w-[440px] aspect-[180/91]"
                isMargin="mt-[40px] md:mt-[60px] mb-[30px] md:mb-[50px]"
            />

            <SpecialSection
                topTitle="WHY GIDEON"
                centerTitle="기드온 시니어 라미네이트만의 특별함"
                cardList={laserCards}
            />
            <RecommendSection
                topTitle="WHY GIDEON"
                centerTitle="기드온 물방울레이저 치주관리만의 특별함"
                cardList={laserRecommendList}
            />
            <ProcessSection
                topTitle="WHO IS IT FOR"
                centerTitle="이런 분들에게 추천합니다"
                stepData={laserProcessSteps}
            />
            <CareSection />
            <FaqSection isBg={false} />
            <AskSection />
            <MapSection />
        </main>
    );
}
