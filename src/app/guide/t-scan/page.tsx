import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import SpecialSection from './../../../components/SpecialSection';
import RecommendSection from '../../../components/RecommendSection';
import ProcessSection from '../../../components/ProcessSection';
import CareSection from '../../../components/CareSection';
import FaqSection from '../../../components/FaqSection';
import AskSection from '../../../components/AskSection';
import MapSection from '../../../components/MapStion';
import TechSection from '../../../components/TechSection';

export default function TScanPage() {
    const guideMenuList = ['AI 네비게이션 임플란트', '물방울레이저 치주관리', '티스캔 교합관리', '시니어 라미네이트'];

    const tScanCards = [
        {
            id: 1,
            cardTitle: '컴퓨터 분석으로 \n맞물림을 눈으로 확인',
            cardDesc: '치아 표면만 미세하게 정리하여 \n시린 증상 없이 안전하게 치료합니다.',
            specialSrc: '/images/i_special_8.svg',
            specialAlt: '치아 아이콘',
        },
        {
            id: 2,
            cardTitle: '치아 하나하나 \n씹는 힘을 고르게 조절',
            cardDesc: '특정 치아에만 힘이 쏠리지 않도록 \n전체 치아를 균형 있게 지켜줍니다.',
            specialSrc: '/images/i_special_9.svg',
            specialAlt: '임플란트 아이콘',
        },
        {
            id: 3,
            cardTitle: '자연 치아와 임플란트 \n파손 걱정 없이 오래 사용',
            cardDesc: '맞물림 균형을 맞춰, 치아가 깨지거나 \n임플란트가 망가지는 것을 예방합니다.',
            specialSrc: '/images/i_special_10.svg',
            specialAlt: '임플란트 아이콘',
        },
        {
            id: 4,
            cardTitle: '보철물 수명은 늘리고 \n시림 증상은 줄여줌',
            cardDesc: '보철물의 수명을 늘려주고 \n치아 시림 증상도 개선해줍니다.',
            specialSrc: '/images/i_special_11.svg',
            specialAlt: '임플란트 아이콘',
        },
    ];

    const tScanRecommendList = [
        {
            title: '음식을 씹을 때마다 치아가 \n아프거나 시큰거리시는 분',
            description:
                '틀어지거나 과도한 치아 압박을 \n정밀하게 찾아내어, 편안하고 \n질기지 않은 식사를 도와드립니다.',
            bgClass: 'bg-[#40584E]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '임플란트나 보철 치료 후 \n맞물림이 불편하신 분',
            description: '디지털로 오차를 \n정확히 측정하여, 내 치아처럼 \n딱 맞는 편안함을 드립니다.',
            bgClass: 'bg-[#7A9389]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '두통이나 턱관절 통증으로 \n고생하고 계신 분',
            description:
                '치아 균형만 잘 맞춰도 턱과 목의 긴장이 \n풀리므로, 연세가 많으신 어르신도 \n쉽게 통증을 개선할 수 있습니다.',
            bgClass: 'bg-[#F4F1EA]',
            textColorClass: 'text-[#414141]',
            iconSrc: '/images/common/i_tooth_b.png',
            lineColor: 'rgba(2, 2, 2, 0.3)',
        },
    ];

    // #ISSUE: 추후 이미지 경로변경
    const tScanProcessSteps = [
        {
            stepNumber: 1,
            title: '디지털 장비로 정밀한 교합 상태 측정',
            description:
                '컴퓨터 분석 시스템을 통해 눈에 보이지 않는 치아의 \n맞물림 압력과 불균형한 위치를 정확하게 찾아냅니다.',
            imgSrc: '/images/pro_item_10.jpg',
            imgAlt: '기드온치과 티스캔 교합관리 정밀 진단 과정',
        },
        {
            stepNumber: 2,
            title: '맞춤형 미세 조절로 치아 균형 맞춤',
            description:
                '검사 결과를 바탕으로 과도하게 힘을 받는 치아 표면을 \n다듬어, 전체적인 씹는 힘을 고르게 분산시킵니다.',
            imgSrc: '/images/pro_item_4.jpg',
            imgAlt: '기드온치과 티스캔 교합관리 미세 조절 과정',
        },
        {
            stepNumber: 3,
            title: '정기적인 사후 관리로 튼튼하게 유지',
            description: '정기적인 검진을 통해 균형 잡힌 \n치아 건강을 오래 쓰도록 관리합니다.',
            imgSrc: '/images/pro_item_12.jpg',
            imgAlt: '기드온치과 티스캔 교합관리 사후 관리 과정',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="진료안내"
                subTitle="Medical Guide"
                pageName="티스캔 교합관리"
                subNavItem="티스캔 교합관리"
                imgSrc="/images/bg_yellow.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={guideMenuList}
            />

            <TechSection
                topTitle="T-Scan Occlusal Analysis"
                centerTitle="티스캔 교합관리"
                // #STYLE반응형줄바꿈: br에 반응형 클래스로 사이즈별 줄바꿈 위치 제어
                desc={
                    <>
                        티스캔 교합관리는 컴퓨터 장비로 치아가 씹는 힘과 맞물림을 바르게 맞춰주는 치료입니다.
                        <br className="hidden md:block" />
                        특정 치아에만 힘이 쏠리지 않게 도와주어,
                        <br className="hidden md:block" />내 치아와 임플란트를 부러짐 없이 오래 쓰도록 지켜줍니다.
                    </>
                }
                imageSrc="/images/tech_img_4.png"
                imageAlt="기드온치과 티스캔 장비 이미지"
                // #STYLE: 픽셀 고정값(w-[440px]) → 반응형 단계별 너비로 변경
                imgClass="w-[230px] sm:w-[300px] md:w-[380px] lg:w-[440px] aspect-[180/91]"
                isMargin="mt-[40px] md:mt-[60px] mb-[30px] md:mb-[50px]"
            />

            <SpecialSection topTitle="PROCESS" centerTitle="티스캔 교합관리 진행과정" cardList={tScanCards} />

            <RecommendSection
                topTitle="RECOMMEND"
                centerTitle="이런 시니어 분들에게 추천합니다"
                cardList={tScanRecommendList}
            />
            <ProcessSection topTitle="PROCESS" centerTitle="시니어 라미네이트 진행과정" stepData={tScanProcessSteps} />
            <CareSection />
            <FaqSection isBg={false} />
            <AskSection />
            <MapSection />
        </main>
    );
}
