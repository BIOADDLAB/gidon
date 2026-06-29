import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import SectionHeading from './../../../components/common/SectionHeading';
import SpecialSection from './../../../components/SpecialSection';
import RecommendSection from '../../../components/RecommendSection';
import ProcessSection from '../../../components/ProcessSection';
import CareSection from '../../../components/CareSection';
import FaqSection from '../../../components/FaqSection';
import AskSection from '../../../components/AskSection';
import MapSection from '../../../components/MapStion';

export default function SeniorPage() {
    const guideMenuList = ['AI 네비게이션 임플란트', '물방울레이저 치주관리', '티스캔 교합관리', '시니어 라미네이트'];

    const seniorCards = [
        {
            id: 1,
            cardTitle: '치아 삭제를 최소화하여 \n내 치아를 안전하게 보존',
            cardDesc: '치아 표면만 미세하게 정리하여 \n시린 증상 없이 안전하게 치료합니다.',
            specialSrc: '/images/i_special_10.svg',
            specialAlt: '치아 아이콘',
        },
        {
            id: 2,
            cardTitle: '노화로 깨지고 벌어진 \n치아 모양과 배열 개선',
            cardDesc: '마모되고 틈이 벌어진 앞니를 바로잡아 \n젊고 건강한 미소를 되찾아 드립니다.',
            specialSrc: '/images/i_special_9.svg',
            specialAlt: '임플란트 아이콘',
        },
        {
            id: 3,
            cardTitle: '잇몸 라인까지 고려한 \n자연스럽고 편안한 조화',
            cardDesc: '인위적이고 과하게 하얀 치아가 아니라, \n원래 치조골과 잇몸에 맞게 제작합니다.',
            specialSrc: '/images/i_special_12.svg',
            specialAlt: '임플란트 아이콘',
        },
        {
            id: 4,
            cardTitle: '치아 본연의 기능을 살려 \n음식도 편안하게 씹도록',
            cardDesc: '단순한 미용 성형을 넘어 \n약해진 치아를 보강합니다.',
            specialSrc: '/images/i_special_11.svg',
            specialAlt: '임플란트 아이콘',
        },
    ];

    const seniorRecommendList = [
        {
            title: '노화로 앞니가 깨지거나 \n마모되어 신경 쓰이시는 분',
            description:
                '치아 삭제를 최소화하여 시린 증상 없이 \n약해진 앞니 표면을 단단하고 \n매끄럽게 보강해 드립니다.',
            bgClass: 'bg-[#40584E]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '나이가 들면서 이빨 사이가 \n점점 벌어져 고민이신 분',
            description:
                '벌어진 틈새를 정교하게 채워 앞니 \n배열을 만들고, 음식물이 끼는 \n불편함까지 깔끔하게 해결합니다.',
            bgClass: 'bg-[#7A9389]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: ' 내 나이에 맞는 \n자연스러운 미소를 원하는 분',
            description:
                '과하게 하얗고 네모난 치아가 아니라, \n기존 잇몸 라인과 조화를 이루는 \n맞춤 치아를 찾아드립니다.',
            bgClass: 'bg-[#F4F1EA]',
            textColorClass: 'text-[#414141]',
            iconSrc: '/images/common/i_tooth_b.png',
            lineColor: 'rgba(2, 2, 2, 0.3)',
        },
    ];

    // #ISSUE: 추후 이미지 경로변경
    const seniorProcessSteps = [
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
                pageName="진료안내"
                subNavItem="시니어 라미네이트"
                imgSrc="/images/bg_yellow.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={guideMenuList}
            />
            <section className="relative pt-[126px] pb-[435px]">
                <Image
                    src="/images/bg_senior.jpg"
                    alt="배경 이미지"
                    fill
                    sizes="100vw"
                    className="object-cover object-center -z-10"
                />

                <SectionHeading
                    topTitle="Senior Porcelain Veneers"
                    centerTitle="시니어 라미네이트"
                    desc={`치아 표면을 미세하게 정리하고 친환경 재료를 붙여 \n
치아를 바르고 튼튼하게 만드는 치료입니다. \n
노화로 인해 깨지거나 벌어진 치아 모양을 바로잡아 건강하고 환한 미소를 되찾아 드립니다.`}
                    isDesc={true}
                    isLh={true}
                />
            </section>
            <SpecialSection
                topTitle="WHY GIDEON"
                centerTitle="기드온 시니어 라미네이트만의 특별함"
                cardList={seniorCards}
            />
            <RecommendSection
                topTitle="RECOMMEND"
                centerTitle="이런 시니어 분들에게 추천합니다"
                cardList={seniorRecommendList}
            />
            {/* 치료과정 */}
            <ProcessSection topTitle="PROCESS" centerTitle="시니어 라미네이트 진행과정" stepData={seniorProcessSteps} />
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
