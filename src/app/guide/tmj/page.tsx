import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/common/SectionHeading';
import SpecialSection from '@/components/SpecialSection';
import ProcessSection from '@/components/ProcessSection';
import CareSection from '@/components/CareSection';
import FaqSection from '@/components/FaqSection';
import AskSection from '@/components/AskSection';
import MapSection from '@/components/MapStion';
import TechSection from '@/components/TechSection';
import { getSubNames } from '@/data/nav';

const checklist = [
    {
        label: '관절음',
        text: '입을 벌리거나 닫을 때 턱에서 ‘딱-’ 소리가 나거나 ‘모래 비비는’ 소리가 난다.',
    },
    {
        label: '개구 장애',
        text: '입을 크게 벌리기 힘들거나(손가락 3개를 세로로 넣기 어려움), 턱이 어긋나며 벌어진다.',
    },
    {
        label: '관절 통증',
        text: '음식을 씹거나 하품할 때 턱관절 주변이나 귀 앞쪽 관절 부위가 뻐근하고 아프다.',
    },
    {
        label: '전신 연관 증상',
        text: '원인을 알 수 없는 만성 두통, 목·어깨 결림, 이명, 눈 주변 피로감이 지속된다.',
    },
    {
        label: '수면/습관',
        text: '자고 일어났을 때 턱관절이 얼얼하거나, 평소 이갈이·이악물기 습관이 있다.',
    },
];

export default function TmjPage() {
    const subMenuList = getSubNames('턱관절·교합케어');

    const tmjCards = [
        {
            id: 1,
            cardTitle: '미세 교합 불균형',
            cardDesc: '특정 치아에 몰리는 이상 깨물림 힘이 발생합니다.',
            specialSrc: '/images/i_special_8.svg',
            specialAlt: '',
        },
        {
            id: 2,
            cardTitle: '턱관절 부하 &\n관절원판(디스크) 이탈',
            cardDesc: '턱관절의 균형이 깨지고 디스크가 밀려나며\n통증/소리를 유발합니다.',
            specialSrc: '/images/i_special_1.svg',
            specialAlt: '',
        },
        {
            id: 3,
            cardTitle: '주변 근육 긴장 &\n신경 자극',
            cardDesc: '턱 주변 씹는 근육(저작근)이 뭉치면서\n머리, 목, 어깨 신경을 자극합니다.',
            specialSrc: '/images/i_special_12.svg',
            specialAlt: '',
        },
        {
            id: 4,
            cardTitle: '만성 질환 발전',
            cardDesc: '만성 두통, 목·어깨 결림, 척추 불균형 등\n전신 불편감으로 확장됩니다.',
            specialSrc: '/images/i_special_3.svg',
            specialAlt: '',
        },
    ];

    const tmjProcessSteps = [
        {
            stepNumber: 1,
            title: '정밀 원인 진단 (3D CT & T-Scan)',
            description:
                '3D CT 관절두 분석을 통해 턱관절 관절두의 위치 변형, 골 흡수 여부, 디스크 공간을 입체 진단하고 T-Scan으로 교합 부하를 확인합니다.',
            imgSrc: '/images/pro_item_10.jpg',
            imgAlt: '성남 기드온치과 턱관절 3D CT T-Scan 진단',
        },
        {
            stepNumber: 2,
            title: '통증 완화 및 근육 이완 (물방울레이저 & 약물케어)',
            description:
                '물방울 레이저 및 약물 치료를 병행하여 턱관절 주변의 과도하게 뭉친 근육을 이완시키고 통증/염증을 빠르게 완화합니다.',
            imgSrc: '/images/pro_item_2.jpg',
            imgAlt: '성남 기드온치과 턱관절 통증 완화',
        },
        {
            stepNumber: 3,
            title: '맞춤 장치 치료 (Splint)',
            description:
                '환자 구강에 최적화된 맞춤형 스플린트 장치를 착용하여 턱관절에 가해지는 물리적 부하를 줄이고 안정적인 관절 위치를 유도합니다.',
            imgSrc: '/images/pro_item_6.jpg',
            imgAlt: '성남 기드온치과 턱관절 스플린트',
        },
    ];

    return (
        <main>
            <HeroSection
                mainTitle="턱관절·교합케어"
                subTitle="TMJ & Occlusion"
                pageName="턱관절·교합케어"
                subNavItem="턱관절 질환 & 통증케어"
                imgSrc="/images/bg_green1.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={subMenuList}
            />

            <TechSection
                topTitle="TMJ Pain Care"
                centerTitle="턱관절 질환 & 통증케어"
                desc={
                    <>
                        <p>턱 소리, 통증, 원인 불명의 두통 – 턱관절과 교합의 균형에서 답을 찾다.</p>
                        <p>
                            원인을 알 수 없는 만성 두통이나 턱관절의 뻐근함, 입을 벌릴 때마다 나는 소리로 고생하고
                            계시나요?
                        </p>
                        <p>
                            턱관절은 두개골과 아래턱을 연결하는 중심 축이자, 구강 내 치아의 맞물림(교합)과 직접 연결되어
                            있습니다.
                        </p>
                        <p>
                            치아의 미세한 맞물림 불균형은 턱관절에 지속적인 부하를 주고 주변 신경과 근육을 자극합니다.
                        </p>
                        <p>
                            기드온치과는 디지털 교합 측정(T-Scan)과 정밀 진단을 통해 턱관절 불편감의 근본 원인을 찾아
                            치료합니다.
                        </p>
                    </>
                }
                imageSrc="/images/tech_img_4.png"
                imageAlt=""
                imgClass="w-[230px] sm:w-[300px] md:w-[380px] lg:w-[440px] aspect-[180/91]"
                isMargin="mt-[40px] md:mt-[60px] mb-[30px] md:mb-[50px]"
            />

            <section className="bg-[#FAF9F6] px-4 py-[70px] md:py-[100px] 2xl:py-[130px]">
                <div className="mx-auto w-full max-w-[860px]">
                    <SectionHeading
                        topTitle="CHECKLIST"
                        centerTitle="턱관절 장애 자가진단"
                        desc="다음 증상 중 2개 이상 해당된다면, 턱관절 및 교합 상태에 대한 정밀 점검이 필요합니다."
                        isDesc={true}
                    />
                    <ul className="mt-10 flex flex-col gap-3">
                        {checklist.map((item) => (
                            <li
                                key={item.label}
                                className="flex items-start gap-3 rounded-[14px] border border-line bg-white px-5 py-4"
                            >
                                <span
                                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-green-600 text-[12px] font-bold text-green-600"
                                    aria-hidden="true"
                                >
                                    ✓
                                </span>
                                <span className="break-keep text-[16px] font-medium leading-relaxed text-[#444] md:text-[17px]">
                                    <strong className="font-bold text-green-900">{item.label}</strong>
                                    {` ${item.text}`}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <SpecialSection
                topTitle="WHY IT MATTERS"
                centerTitle="턱관절 질환이 전신 통증으로 이어지는 이유"
                cardList={tmjCards}
            />
            <ProcessSection topTitle="PROCESS" centerTitle="턱관절 맞춤 치료 프로세스" stepData={tmjProcessSteps} />
            <CareSection />
            <FaqSection isBg={false} />
            <AskSection />
            <MapSection />
        </main>
    );
}
