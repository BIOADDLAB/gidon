import HeroSection from '@/components/HeroSection';

export default function PhilosophyPage() {
    const aboutMenuList = ['병원철학', '기드온의 약속', '둘러보기'];
    return (
        <HeroSection
            mainTitle="기드온치과"
            subTitle="About GIDEON"
            pageName="기드온치과"
            subNavItem="병원철학"
            imgSrc="/images/bg_hr_about.jpg"
            isNav={true}
            isGreen={true}
            subMenuList={aboutMenuList}
        />
    );
}
