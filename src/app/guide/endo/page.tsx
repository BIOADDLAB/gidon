import HeroSection from '@/components/HeroSection';
import SpecialSection from '@/components/SpecialSection';
import RecommendSection from '@/components/RecommendSection';
import ProcessSection from '@/components/ProcessSection';
import CareSection from '@/components/CareSection';
import FaqSection from '@/components/FaqSection';
import AskSection from '@/components/AskSection';
import MapSection from '@/components/MapStion';
import TechSection from '@/components/TechSection';
import { getSubNames } from '@/data/nav';

export default function EndoPage() {
    const subMenuList = getSubNames('일반·치주진료');

    const endoCards = [
        {
            id: 1,
            cardTitle: '충치를 초기에\n정확히 확인',
            cardDesc: '눈에 잘 보이지 않는 우식까지 살펴\n필요한 만큼만 치료합니다.',
            specialSrc: '/images/i_special_1.svg',
            specialAlt: '',
        },
        {
            id: 2,
            cardTitle: '자연치아를\n최대한 남김',
            cardDesc: '깎아내기 전에 살릴 수 있는 치아인지\n먼저 판단하고 안내합니다.',
            specialSrc: '/images/i_special_10.svg',
            specialAlt: '',
        },
        {
            id: 3,
            cardTitle: '신경치료는\n필요할 때만',
            cardDesc: '통증이 심하거나 신경까지 진행된 경우에\n염증을 정리하고 치아를 보존합니다.',
            specialSrc: '/images/i_special_3.svg',
            specialAlt: '',
        },
        {
            id: 4,
            cardTitle: '치료 후 관리까지\n이어서',
            cardDesc: '약해진 치아는 보철 보강이 필요한지\n함께 살펴 오래 쓰시도록 돕습니다.',
            specialSrc: '/images/i_special_4.svg',
            specialAlt: '',
        },
    ];

    const endoRecommendList = [
        {
            title: '이가 시리거나\n찬 것에 불편한 분',
            description: '충치 위치와 깊이를 확인하고\n필요한 치료만 진행합니다.',
            bgClass: 'bg-[#40584E]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '욱신거리는 통증으로\n잠을 설치는 분',
            description: '신경까지 염증이 퍼진 경우\n신경치료로 통증을 가라앉히고 치아를 남깁니다.',
            bgClass: 'bg-[#7A9389]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '예전 치료 부위가\n다시 아픈 분',
            description: '기존 충전·신경치료 상태를 살펴\n재치료가 필요한지 정직하게 안내합니다.',
            bgClass: 'bg-[#F4F1EA]',
            textColorClass: 'text-[#414141]',
            iconSrc: '/images/common/i_tooth_b.png',
            lineColor: 'rgba(2, 2, 2, 0.3)',
        },
    ];

    const endoProcessSteps = [
        {
            stepNumber: 1,
            title: '검진과 영상으로 충치·염증 확인',
            description: '구강 검진과 필요 시 영상 검사로\n충치 깊이와 신경 상태를 파악합니다.',
            imgSrc: '/images/pro_item_8.jpg',
            imgAlt: '성남 기드온치과 충치 신경치료 진단',
        },
        {
            stepNumber: 2,
            title: '필요한 범위만 치료',
            description: '충치면 충전, 신경까지 진행됐다면 신경치료로\n염증을 정리하고 치아를 보존합니다.',
            imgSrc: '/images/pro_item_2.jpg',
            imgAlt: '성남 기드온치과 충치 신경치료',
        },
        {
            stepNumber: 3,
            title: '보강과 정기 관리',
            description: '약해진 치아는 씌우거나 보강해\n다시 아프지 않도록 관리합니다.',
            imgSrc: '/images/pro_item_6.jpg',
            imgAlt: '성남 기드온치과 충치 신경치료 사후 관리',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="일반·치주진료"
                subTitle="General Dentistry"
                pageName="일반·치주진료"
                subNavItem="충치·신경치료"
                imgSrc="/images/bg_yellow.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={subMenuList}
            />

            <TechSection
                topTitle="Cavity & Root Canal Care"
                centerTitle="충치·신경치료"
                desc={
                    <>
                        <p>아프기 전에, 그리고 아플 때도 자연치아를 최대한 남기는 진료입니다.</p>
                        <p>기드온치과는 필요하지 않은 삭제를 하지 않고, 충치와 신경 상태를 확인한 뒤 치료 범위를 안내합니다.</p>
                    </>
                }
                imageSrc="/images/tech_img_3.png"
                imageAlt=""
                imgClass="w-[230px] sm:w-[300px] md:w-[380px] lg:w-[440px] aspect-[180/91]"
                isMargin="mt-[40px] md:mt-[60px] mb-[30px] md:mb-[50px]"
            />

            <SpecialSection topTitle="WHY GIDEON" centerTitle="기드온 충치·신경치료" cardList={endoCards} />
            <RecommendSection
                topTitle="WHO IS IT FOR"
                centerTitle="이런 분들에게 안내합니다"
                cardList={endoRecommendList}
            />
            <ProcessSection topTitle="PROCESS" centerTitle="충치·신경치료 진행과정" stepData={endoProcessSteps} />
            <CareSection />
            <FaqSection isBg={false} />
            <AskSection />
            <MapSection />
        </main>
    );
}
