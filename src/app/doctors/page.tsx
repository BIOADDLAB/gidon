import HeroSection from '@/components/HeroSection';

export default function DoctorsPage() {
    const doctorsMenuList = ['의료진소개'];
    return (
        <HeroSection
            mainTitle="의료진소개"
            subTitle="Medical Staff"
            pageName="의료진소개"
            subNavItem="의료진소개"
            imgSrc="/images/bg_hr_about.jpg"
            isNav={true}
            isGreen={true}
            subMenuList={doctorsMenuList}
        />
    );
}
