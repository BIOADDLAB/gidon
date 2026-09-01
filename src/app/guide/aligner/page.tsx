import HeroSection from '@/components/HeroSection';
import SpecialSection from '@/components/SpecialSection';
import ProcessSection from '@/components/ProcessSection';
import CareSection from '@/components/CareSection';
import FaqSection from '@/components/FaqSection';
import AskSection from '@/components/AskSection';
import MapSection from '@/components/MapStion';
import TechSection from '@/components/TechSection';
import { getSubNames } from '@/data/nav';

export default function AlignerPage() {
    const subMenuList = getSubNames('디지털 치아교정');

    const alignerCards = [
        {
            id: 1,
            cardTitle: '투명교정 특징',
            cardDesc:
                '특수 다층 구조의 투명 소재로 제작되어 장치가 거의 눈에 띄지 않으며, 식사나 양치 시 자유롭게 탈부착이 가능하여 구강 위생 관리가 용이합니다.',
            specialSrc: '/images/i_special_12.svg',
            specialAlt: '',
        },
        {
            id: 2,
            cardTitle: '투명교정 추천 대상',
            cardDesc:
                '중요한 면접, 예식, 비즈니스 미팅 등 사회활동이 활발하여 교정 장치가 보이면 안 되는 성인',
            specialSrc: '/images/i_special_7.svg',
            specialAlt: '',
        },
        {
            id: 3,
            cardTitle: '부분교정\n(MTA / 튜브 교정)',
            cardDesc:
                '틀어진 앞니나 공간이 벌어진 부위에만 미니 장치를 부착하여 필요한 부분만 신속하게 이동시킵니다. 전체 교정에 비해 통증이 적고 이물감이 적습니다.',
            specialSrc: '/images/i_special_5.svg',
            specialAlt: '',
        },
        {
            id: 4,
            cardTitle: '부분교정 추천 대상',
            cardDesc: '단기간(평균 3~6개월) 내에 앞니 심미성 개선을 원하는 환자',
            specialSrc: '/images/i_special_3.svg',
            specialAlt: '',
        },
    ];

    const alignerProcessSteps = [
        {
            stepNumber: 1,
            title: '3D 구강 스캐너 정밀 채득',
            description:
                '고무 인상재를 입에 물고 있는 불편함 없이,\n3D 구강 스캐너로 치아와 잇몸 라인을 입체 데이터로\n신속하고 정밀하게 채득합니다.',
            imgSrc: '/images/pro_item_8.jpg',
            imgAlt: '성남 기드온치과 투명교정 3D 스캔',
        },
        {
            stepNumber: 2,
            title: '3D 디지털 이동 경로 시뮬레이션',
            description:
                '치아가 단계별로 이동하는 과정을 3D 프로그램으로 예측하여\n오차를 줄인 맞춤 투명 장치를 제작합니다.',
            imgSrc: '/images/pro_item_4.jpg',
            imgAlt: '성남 기드온치과 투명교정 시뮬레이션',
        },
        {
            stepNumber: 3,
            title: 'T-Scan을 통한 교합 마무리',
            description:
                '교정이 완료된 후 앞니 부위에 과도한 힘이 쏠리지 않도록\nT-Scan 디지털 분석으로 맞물림 균형을 점검합니다.',
            imgSrc: '/images/pro_item_10.jpg',
            imgAlt: '성남 기드온치과 교정 후 교합 점검',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="디지털 치아교정"
                subTitle="Digital Orthodontics"
                pageName="디지털 치아교정"
                subNavItem="투명교정 / 부분교정"
                imgSrc="/images/bg_green1.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={subMenuList}
            />

            <TechSection
                topTitle="Clear & Partial Orthodontics"
                centerTitle="투명교정 / 부분교정"
                desc={
                    <>
                        <p>티 안 나고 빠르게, 필요한 부위만 집중 케어.</p>
                        <p>
                            교정 장치가 눈에 띄는 것이 부담스럽거나, 전체 교정을 진행하기에는 부담스러우신 분들을 위한
                            맞춤 솔루션입니다.
                        </p>
                        <p>
                            기드온치과의 투명·부분교정은 티 나지 않는 정밀 투명 장치와 앞니 집중 케어를 통해 일상생활의
                            불편함을 최소화하면서 빠르게 가지런한 미소를 찾아드립니다.
                        </p>
                    </>
                }
                imageSrc="/images/tech_img_1.png"
                imageAlt=""
                imgClass="w-[230px] sm:w-[300px] md:w-[380px] lg:w-[440px] aspect-[180/91]"
                isMargin="mt-[40px] md:mt-[60px] mb-[30px] md:mb-[50px]"
            />

            <SpecialSection topTitle="WHY GIDEON" centerTitle="투명교정 & 부분교정 특징 및 추천 대상" cardList={alignerCards} />
            <ProcessSection
                topTitle="PROCESS"
                centerTitle="디지털 정밀 진단 & 케어 프로세스"
                stepData={alignerProcessSteps}
            />
            <CareSection />
            <FaqSection isBg={false} />
            <AskSection />
            <MapSection />
        </main>
    );
}
