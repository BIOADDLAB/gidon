import HeroSection from '@/components/HeroSection';

export default function LocationPage() {
    const locationMenuList = ['오시는길'];
    return (
        <HeroSection
            mainTitle="오시는길"
            subTitle="Location"
            pageName="오시는길"
            subNavItem="오시는길"
            imgSrc="/images/bg_reco.jpg"
            isNav={true}
            isGreen={false}
            subMenuList={locationMenuList}
        />
    );
}
