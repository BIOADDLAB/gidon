import HeroSection from '@/components/HeroSection';

export default function ProcessPage() {
    const implantMenuList = ['진행과정', '보험 임플란트'];
    return (
        <HeroSection
            mainTitle="임플란트"
            subTitle="Implant"
            pageName="임플란트"
            subNavItem="진행과정"
            imgSrc="/images/bg_hr_test.jpg"
            isNav={true}
            isGreen={false}
            subMenuList={implantMenuList}
        />
    );
}
