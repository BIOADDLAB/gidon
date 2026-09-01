import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/common/SectionHeading';
import RecommendSection from '@/components/RecommendSection';
import CareSection from '@/components/CareSection';
import FaqSection from '@/components/FaqSection';
import AskSection from '@/components/AskSection';
import MapSection from '@/components/MapStion';
import { getSubNames } from '@/data/nav';

export default function LaminatePage() {
    const subMenuList = getSubNames('심미보철·라미네이트');

    const laminateRecommendList = [
        {
            title: '벌어진 앞니',
            description: '치아 사이 공간을 자연스럽게 메워\n단정하고 깔끔한 미소를 완성합니다.',
            bgClass: 'bg-[#40584E]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '변색 및 착색치',
            description: '치아 미백으로 한계가 있는\n깊은 변색 치아의\n맑고 투명한 톤을 회복합니다.',
            bgClass: 'bg-[#7A9389]',
            textColorClass: 'text-white',
            iconSrc: '/images/common/i_tooth_w.svg',
            lineColor: 'rgba(255, 255, 255, 0.3)',
        },
        {
            title: '미세하게 삐뚤어진 앞니',
            description: '복잡한 교정 과정 없이\n앞니의 정돈된 라인을 개선합니다.',
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
                subNavItem="최소 삭제 라미네이트"
                imgSrc="/images/bg_yellow.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={subMenuList}
            />

            <section className="relative pt-[60px] pb-[200px] md:pt-[90px] md:pb-[320px] lg:pt-[126px] lg:pb-[435px]">
                <Image src="/images/bg_senior.jpg" alt="" fill sizes="100vw" className="object-cover object-center -z-20" />
                <div
                    className="absolute inset-0 -z-10 opacity-40"
                    style={{ backgroundImage: 'linear-gradient(180deg, #F9F9F9 0%, #8F8F8F 100%)' }}
                />
                <SectionHeading
                    topTitle="Minimal Prep Veneers"
                    centerTitle="최소 삭제 라미네이트"
                    desc={
                        <>
                            <p>내 치아는 최대한 지키고, 아름다움은 더하다.</p>
                            <p>치아는 한 번 깎아내면 다시 재생되지 않습니다.</p>
                            <p>
                                기드온치과의 라미네이트는 단순히 보기 좋은 미소를 넘어, 자연 치아의 건강을 최대한
                                보존하는 것을 최우선 가치로 둡니다.
                            </p>
                            <p>최소한의 정리만으로 치아 손상 부담을 낮추고 본연의 아름다움을 찾아드립니다.</p>
                        </>
                    }
                    isDesc={true}
                />
            </section>

            <section className="bg-white px-4 py-[70px] md:py-[100px] 2xl:py-[130px]">
                <div className="mx-auto w-full max-w-[900px]">
                    <SectionHeading
                        topTitle="WHY GIDEON"
                        centerTitle="치아 삭제 부담을 줄인 최소 삭제 라미네이트"
                        desc="치아를 크게 깎아내는 기존 방식에서 벗어나, 치아 겉면(법랑질)의 정돈을 최우선으로 합니다."
                        isDesc={true}
                    />
                    <div className="mt-10 overflow-x-auto rounded-[16px] border border-line">
                        <table className="w-full min-w-[560px] text-left text-[15px] md:text-[17px]">
                            <thead className="bg-green-600 text-white">
                                <tr>
                                    <th className="px-4 py-4 font-bold">구분</th>
                                    <th className="px-4 py-4 font-bold">일반 라미네이트</th>
                                    <th className="px-4 py-4 font-bold">기드온 라미네이트</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-[#444]">
                                <tr className="border-t border-line">
                                    <th className="px-4 py-4 font-bold text-green-900">치아 정리</th>
                                    <td className="px-4 py-4 break-keep">치아 삭제량이 많은 편</td>
                                    <td className="px-4 py-4 break-keep">치아 삭제를 최소화하거나 없는 방식 우선</td>
                                </tr>
                                <tr className="border-t border-line bg-[#FAF9F6]">
                                    <th className="px-4 py-4 font-bold text-green-900">시술 과정</th>
                                    <td className="px-4 py-4 break-keep">
                                        자극 차단을 위한 국소 마취 필요성 높음
                                    </td>
                                    <td className="px-4 py-4 break-keep">
                                        환자 상태에 따라 시림이나 통증 부담이 적어 마취없이 진행 가능
                                    </td>
                                </tr>
                                <tr className="border-t border-line">
                                    <th className="px-4 py-4 font-bold text-green-900">치아 보존</th>
                                    <td className="px-4 py-4 break-keep">치아 구조적 강도 약화 부담</td>
                                    <td className="px-4 py-4 break-keep">자연 치아의 건강함과 구조적 강도 유지</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-5 break-keep text-[14px] leading-relaxed text-ink-500 md:text-[15px]">
                        ※ 환자의 치열 상태, 돌출 정도, 치아 변색 심화도에 따라 치아 삭제량 및 마취 여부는 달라질 수
                        있습니다.
                    </p>
                </div>
            </section>

            <RecommendSection
                topTitle="WHO IS IT FOR"
                centerTitle="맞춤 라미네이트"
                cardList={laminateRecommendList}
            />
            <section className="bg-[#FAF9F6] px-4 py-[70px] md:py-[100px] 2xl:py-[130px]">
                <div className="mx-auto w-full max-w-[860px]">
                    <SectionHeading
                        topTitle="GIDEON'S POINT"
                        centerTitle="깨지지 않는 라미네이트의 비밀"
                    />
                    <div className="mx-auto mt-10 flex max-w-[38rem] flex-col gap-4">
                        <p className="break-keep text-center text-[17px] font-medium leading-[1.85] text-[#444] md:text-[19px]">
                            라미네이트 탈락이나 파절의 주요 원인은<br/>특정 치아에 몰리는 미세한 과교합 때문입니다.
                        </p>
                        <p className="break-keep text-center text-[17px] font-medium leading-[1.85] text-[#444] md:text-[19px]">
                            기드온치과는 수복 후 T-Scan 디지털 교합 분석을 통해 치아에 가해지는 힘의 균형을 점검하여,
                            겉만 아름다운 보철이 아닌<br/>오래 탈 없이 사용하는 안전한 미소를 완성합니다.
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
