import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/common/SectionHeading';
import SpecialSection from '@/components/SpecialSection';
import RecommendSection from '@/components/RecommendSection';
import CareSection from '@/components/CareSection';
import FaqSection from '@/components/FaqSection';
import AskSection from '@/components/AskSection';
import MapSection from '@/components/MapStion';
import TechSection from '@/components/TechSection';
import { getSubNames } from '@/data/nav';

export default function ProstheticsPage() {
    const subMenuList = getSubNames('심미보철·라미네이트');

    const prostheticCards = [
        {
            id: 1,
            cardTitle: '올세라믹\n(All-Ceramic)',
            cardDesc:
                '빛 투과율이 자연치와 매우 유사합니다.\n잇몸이 검게 보이지 않으며 투명감이 중요시되는\n앞니 치료에 탁월합니다.',
            specialSrc: '/images/i_special_12.svg',
            specialAlt: '',
        },
        {
            id: 2,
            cardTitle: '지르코니아\n(Zirconia)',
            cardDesc:
                '인공 다이아몬드라 불릴 만큼 단단한 내구성과 강도를 자랑합니다.\n강한 씹는 힘을 견뎌야 하는 어금니 부위나\n다수치 보철이 필요한 경우 적합합니다.',
            specialSrc: '/images/i_special_11.svg',
            specialAlt: '',
        },
    ];

    const prostheticRecommendList = [
        {
            title: '파절 및 왜소치',
            description: '충격으로 크게 깨지거나 유독 작은 치아의\n형태적 균형과 강도를 회복합니다.',
            bgClass: 'bg-[#40584E]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '충치가 깊은 치아',
            description: '신경치료 후 약해진 치아 전체를 씌워\n파절을 방지하고 수명을 연장합니다.',
            bgClass: 'bg-[#7A9389]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '기존 보철물 교체',
            description: '오래되어 변색되거나 잇몸 경계가\n검게 노출된\n예전 보철물의 심미적 재치료입니다.',
            bgClass: 'bg-[#F4F1EA]',
            textColorClass: 'text-[#414141]',
            iconSrc: '/images/common/i_tooth_b.png',
            lineColor: 'rgba(2, 2, 2, 0.3)',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="심미보철·라미네이트"
                subTitle="Esthetic Care"
                pageName="심미보철·라미네이트"
                subNavItem="심미보철"
                imgSrc="/images/bg_yellow.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={subMenuList}
            />

            <TechSection
                topTitle="All-Ceramic & Zirconia"
                centerTitle="심미보철"
                desc={
                    <>
                        <p>기능과 심미성, 어느 하나도 놓치지 않는 정밀 보철.</p>
                        <p>손상 범위가 넓거나 강한 씹는 힘이 필요한 치아에는 그에 맞는 단단하고 정교한 옷이 필요합니다.</p>
                        <p>
                            기존 시니어 라미네이트 환자분들의 케어까지 통합하여, 치아의 본래 기능을 완벽히 회복하면서도
                            자연치아와 구분이 안 되는 심미보철 솔루션을 제공합니다.
                        </p>
                        <p>환자의 치아 위치와 씹는 힘(교합력)에 맞춰 가장 적합한 생체 친화적 재료를 선택합니다.</p>
                    </>
                }
                imageSrc="/images/tech_img_2.png"
                imageAlt=""
                imgClass="w-[230px] sm:w-[300px] md:w-[380px] lg:w-[440px] aspect-[180/91]"
                isMargin="mt-[40px] md:mt-[60px] mb-[30px] md:mb-[50px]"
            />

            <SpecialSection
                topTitle="WHY GIDEON"
                centerTitle="정밀 보철 재질 안내"
                cardList={prostheticCards}
            />
            <RecommendSection
                topTitle="WHO IS IT FOR"
                centerTitle="맞춤 심미보철"
                cardList={prostheticRecommendList}
            />
            <section className="bg-[#FAF9F6] px-4 py-[70px] md:py-[100px] 2xl:py-[130px]">
                <div className="mx-auto w-full max-w-[860px]">
                    <SectionHeading
                        topTitle="GIDEON'S POINT"
                        centerTitle="씹는 기능까지 완벽한 교합 평형"
                    />
                    <div className="mx-auto mt-10 flex max-w-[38rem] flex-col gap-4">
                        <p className="break-keep text-center text-[17px] font-medium leading-[1.85] text-[#444] md:text-[19px]">
                            단단한 보철물일수록 맞물리는 반대편 치아나 턱관절에 무리를 주지 않는 정밀한 교합 맞춤이
                            필수적입니다.
                        </p>
                        <p className="break-keep text-center text-[17px] font-medium leading-[1.85] text-[#444] md:text-[19px]">
                            보철 세팅 후 T-Scan 진단을 통해 치아 전체의 압력 분포를 확인하고 0.01mm의 오차까지 조정하여
                            편안한 저작 기능을 약속합니다.
                        </p>
                    </div>
                </div>
            </section>
            <CareSection />
            <FaqSection isBg={false} />
            <AskSection />
            <MapSection />
        </main>
    );
}
