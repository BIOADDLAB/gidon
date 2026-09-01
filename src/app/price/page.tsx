import HeroSection from '@/components/HeroSection';
import SectionHeading from './../../components/common/SectionHeading';
import MapSection from '../../components/MapStion';
import FaqSection from '@/components/FaqSection';
import PriceTables from '@/components/PriceTables';
import { getSubNames } from '@/data/nav';

export default function PricePage() {
    const aboutMenuList = getSubNames('기드온소개');
    return (
        <main>
            <HeroSection
                mainTitle="기드온소개"
                subTitle="Price Guide"
                pageName="기드온소개"
                subNavItem="가격안내"
                imgSrc="/images/bg_green2.jpg"
                isNav={true}
                isGreen={true}
                subMenuList={aboutMenuList}
            />

            <section className="bg-white py-14 md:py-[100px]">
                <div className="mx-auto w-full max-w-[1160px] px-4 md:px-6">
                    <SectionHeading
                        topTitle="FEE GUIDE"
                        centerTitle="비급여진료비 안내"
                        desc={'처음 상담부터 최종 보철까지,\n감추는 비용 없이 처음부터 정확하게 안내해드립니다.'}
                        isDesc={true}
                    />

                    <span className="mx-auto mt-10 mb-16 block h-[3px] w-[98px] bg-green-600 md:mt-[60px] md:mb-[130px]" />

                    <PriceTables />
                </div>
            </section>

            <FaqSection isBg={true} />

            <MapSection />
        </main>
    );
}
