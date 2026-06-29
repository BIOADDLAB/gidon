import HeroSection from '@/components/HeroSection';

export default function PricePage() {
    const priceMenuList = ['가격안내'];
    return (
        <HeroSection
            mainTitle="가격안내"
            subTitle="Price Guide"
            pageName="가격안내"
            subNavItem="가격안내"
            imgSrc="/images/bg_faq.jpg"
            isNav={true}
            isGreen={true}
            subMenuList={priceMenuList}
        />
    );
}
