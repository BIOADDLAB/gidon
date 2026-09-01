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

export default function ImplantDenturePage() {
    const subMenuList = getSubNames('임플란트');

    const cards = [
        {
            id: 1,
            cardTitle: '덜 흔들리는\n틀니',
            cardDesc: '임플란트가 틀니를 잡아 주어\n식사와 말할 때 덜 움직이도록 돕습니다.',
            specialSrc: '/images/i_special_11.svg',
            specialAlt: '',
        },
        {
            id: 2,
            cardTitle: '적은 개수로\n유지합니다',
            cardDesc: '전체 고정 임플란트보다 식립 개수를 줄여\n부담을 낮추는 선택이 될 수 있습니다.',
            specialSrc: '/images/i_special_1.svg',
            specialAlt: '',
        },
        {
            id: 3,
            cardTitle: '빼고 관리할 수\n있습니다',
            cardDesc: '탈착식 구조라 구강 위생을 챙기기 수월하고,\n정기 검진으로 상태를 확인합니다.',
            specialSrc: '/images/i_special_7.svg',
            specialAlt: '',
        },
        {
            id: 4,
            cardTitle: '뼈 상태에 맞춘\n설계',
            cardDesc: '잇몸뼈가 충분하지 않아도\n가능한 범위를 진단 후 정직하게 안내합니다.',
            specialSrc: '/images/i_special_9.svg',
            specialAlt: '',
        },
    ];

    const recommendList = [
        {
            title: '기존 틀니가 헐겁거나\n잘 빠지시는 분',
            description: '임플란트로 유지력을 보강해\n흔들림을 줄이는 방법을 안내합니다.',
            bgClass: 'bg-[#40584E]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '전체 고정 임플란트가\n부담스러우신 분',
            description: '수술 범위와 비용을 나눠 보고,\n임플란트 틀니가 맞는지 함께 판단합니다.',
            bgClass: 'bg-[#7A9389]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '씹는 힘을 조금 더\n찾고 싶은 분',
            description: '일반 틀니보다 안정적으로 잡아 주어\n식사 불편을 줄이는 데 도움이 됩니다.',
            bgClass: 'bg-[#F4F1EA]',
            textColorClass: 'text-[#414141]',
            iconSrc: '/images/common/i_tooth_b.png',
            lineColor: 'rgba(2, 2, 2, 0.3)',
        },
    ];

    const processSteps = [
        {
            stepNumber: 1,
            title: '틀니와 잇몸뼈 상태 진단',
            description: '3D CT로 뼈 두께와 신경 위치를 확인하고\n몇 개의 임플란트로 유지할지 안내합니다.',
            imgSrc: '/images/pro_item_1.jpg',
            imgAlt: '성남 기드온치과 임플란트 틀니 진단',
        },
        {
            stepNumber: 2,
            title: '임플란트 식립',
            description: '계획한 위치에 심어 틀니를 잡아 줄\n유지 장치를 준비합니다.',
            imgSrc: '/images/pro_item_9.jpg',
            imgAlt: '성남 기드온치과 임플란트 틀니 식립',
        },
        {
            stepNumber: 3,
            title: '맞춤 틀니 연결과 관리',
            description: '임플란트에 맞게 틀니를 연결한 뒤,\n착용감과 위생을 정기적으로 확인합니다.',
            imgSrc: '/images/pro_item_6.jpg',
            imgAlt: '성남 기드온치과 임플란트 틀니 맞춤',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="임플란트"
                subTitle="Implant"
                pageName="임플란트"
                subNavItem="임플란트 틀니"
                imgSrc="/images/bg_green1.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={subMenuList}
            />

            <TechSection
                topTitle="Implant Overdenture"
                centerTitle="임플란트 틀니"
                desc={
                    <>
                        <p>일반 틀니보다 덜 흔들리고, 전체 고정 임플란트보다 수술 부담을 줄일 수 있는 선택입니다.</p>
                        <p>
                            소수의 임플란트가 틀니를 잡아 주어 식사와 말할 때 움직임을 줄입니다. 기드온치과는 뼈 상태를
                            확인한 뒤, 고정 임플란트가 나은지 임플란트 틀니가 나은지 정직하게 안내합니다.
                        </p>
                    </>
                }
                imageSrc="/images/tech_img_1.png"
                imageAlt=""
                imgClass="w-[230px] sm:w-[300px] md:w-[380px] lg:w-[440px] aspect-[180/91]"
                isMargin="mt-[40px] md:mt-[60px] mb-[30px] md:mb-[50px]"
            />

            <SpecialSection topTitle="WHY GIDEON" centerTitle="기드온 임플란트 틀니" cardList={cards} />
            <RecommendSection topTitle="WHO IS IT FOR" centerTitle="이런 분들에게 안내합니다" cardList={recommendList} />
            <ProcessSection topTitle="PROCESS" centerTitle="임플란트 틀니 진행과정" stepData={processSteps} />
            <CareSection />
            <FaqSection isBg={false} />
            <AskSection />
            <MapSection />
        </main>
    );
}
