import HeroSection from '@/components/HeroSection';

export default function AiNavigationPage() {
    const guideMenuList = ['AI 네비게이션 임플란트', '물방울레이저 치주관리', '티스캔 교합관리', '시니어 라미네이트'];
    return (
        <HeroSection
            mainTitle="진료안내"
            subTitle="Medical Guide"
            pageName="진료안내"
            subNavItem="AI 네비게이션 임플란트"
            imgSrc="/images/bg_care.jpg"
            isNav={true}
            isGreen={false}
            subMenuList={guideMenuList}
        />
    );
}
