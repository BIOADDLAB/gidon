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

export default function FullImplantPage() {
    const subMenuList = getSubNames('임플란트');

    const cards = [
        {
            id: 1,
            cardTitle: '필요한 범위만\n계획합니다',
            cardDesc: '무조건 많이 심는 것이 아니라,\n잇몸뼈와 씹는 힘에 맞춰 식립 개수와 위치를 정합니다.',
            specialSrc: '/images/i_special_1.svg',
            specialAlt: '',
        },
        {
            id: 2,
            cardTitle: '3D CT로 보는\n정밀 진단',
            cardDesc: '신경 위치와 뼈 두께를 입체적으로 확인해\n무리한 식립을 줄이고 계획을 세웁니다.',
            specialSrc: '/images/i_special_2.svg',
            specialAlt: '',
        },
        {
            id: 3,
            cardTitle: '네비게이션으로\n정확한 식립',
            cardDesc: '미리 정한 경로로 심어 오차를 줄이고,\n출혈과 회복 부담을 낮추는 방향을 우선합니다.',
            specialSrc: '/images/i_special_3.svg',
            specialAlt: '',
        },
        {
            id: 4,
            cardTitle: '보철과 관리까지\n이어서',
            cardDesc: '심는 것으로 끝내지 않습니다.\n잘 씹히도록 맞추고, 오래 쓰시도록 관리합니다.',
            specialSrc: '/images/i_special_4.svg',
            specialAlt: '',
        },
    ];

    const recommendList = [
        {
            title: '여러 치아가 없거나\n남아 있는 치아가 적으신 분',
            description: '빠진 자리를 하나씩만 볼 것이 아니라,\n전체 교합을 기준으로 계획을 안내합니다.',
            bgClass: 'bg-[#40584E]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '틀니가 흔들리거나\n식사하기 힘드신 분',
            description: '고정 보철이 가능한지, 임플란트 틀니가 나은지\n상태부터 정직하게 설명합니다.',
            bgClass: 'bg-[#7A9389]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '한 번에 치료 범위를\n확인하고 싶은 분',
            description: '진단-식립-보철-관리 순서를 미리 안내해\n기간과 부담을 함께 살펴봅니다.',
            bgClass: 'bg-[#F4F1EA]',
            textColorClass: 'text-[#414141]',
            iconSrc: '/images/common/i_tooth_b.png',
            lineColor: 'rgba(2, 2, 2, 0.3)',
        },
    ];

    const processSteps = [
        {
            stepNumber: 1,
            title: '정밀 진단으로 전체 계획 세우기',
            description:
                '3D CT와 구강 검진으로 뼈 상태, 남은 치아, 교합을 확인하고\n식립 개수와 보철 형태를 안내합니다.',
            imgSrc: '/images/pro_item_1.jpg',
            imgAlt: '성남 기드온치과 전체 임플란트 정밀 진단',
        },
        {
            stepNumber: 2,
            title: '계획한 위치에 식립',
            description: '네비게이션 등 디지털 계획을 바탕으로\n필요한 위치에 정확하게 심습니다.',
            imgSrc: '/images/pro_item_9.jpg',
            imgAlt: '성남 기드온치과 전체 임플란트 식립',
        },
        {
            stepNumber: 3,
            title: '보철 장착과 이후 관리',
            description: '잘 씹히도록 보철을 맞춘 뒤,\n정기 검진으로 오래 쓰시도록 관리합니다.',
            imgSrc: '/images/pro_item_5.jpg',
            imgAlt: '성남 기드온치과 전체 임플란트 보철 관리',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="임플란트"
                subTitle="Implant"
                pageName="임플란트"
                subNavItem="전체 임플란트"
                imgSrc="/images/bg_yellow.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={subMenuList}
            />

            <TechSection
                topTitle="Full Arch Implant"
                centerTitle="전체 임플란트"
                desc={
                    <>
                        <p>여러 치아, 또는 대부분의 치아가 없을 때 잇몸뼈와 교합을 보고 필요한 범위만큼 계획을 세웁니다.</p>
                        <p>
                            기드온치과는 무조건 많이 심는 치료를 권하지 않습니다. 3D CT와 네비게이션 식립으로 위치를
                            정한 뒤, 보철과 관리까지 이어서 안내합니다.
                        </p>
                        <p>식립 개수와 치료 기간은 환자분의 뼈 상태에 따라 달라질 수 있습니다.</p>
                    </>
                }
                imageSrc="/images/tech_img_2.png"
                imageAlt=""
                imgClass="w-[230px] sm:w-[300px] md:w-[380px] lg:w-[440px] aspect-[180/91]"
                isMargin="mt-[40px] md:mt-[60px] mb-[30px] md:mb-[50px]"
            />

            <SpecialSection topTitle="WHY GIDEON" centerTitle="기드온 전체 임플란트" cardList={cards} />
            <RecommendSection topTitle="WHO IS IT FOR" centerTitle="이런 분들에게 안내합니다" cardList={recommendList} />
            <ProcessSection topTitle="PROCESS" centerTitle="전체 임플란트 진행과정" stepData={processSteps} />
            <CareSection />
            <FaqSection isBg={false} />
            <AskSection />
            <MapSection />
        </main>
    );
}
