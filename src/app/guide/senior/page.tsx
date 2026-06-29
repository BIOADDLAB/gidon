import HeroSection from '@/components/HeroSection';
import SectionHeading from './../../../components/common/SectionHeading';
import Image from 'next/image';
import SpecialSection from './../../../components/SpecialSection';
import RecommendSection from '../../../components/RecommendSection';

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
                {/* #STYLE: 레이어 씌워야함 */}
                {/* 위 0% - f9f9f9
    아래100% - 8F8F8F */}
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
        </main>
    );
}
