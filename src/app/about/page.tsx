import HeroSection from './../../components/HeroSection';

export default function About() {
    const aboutMenuList = ['임플란트', '진행과정', '보험 임플란트'];

    return (
        <>
            <HeroSection
                mainTitle="기드온치과"
                subTitle="About GIDEON"
                pageName="임플란트"
                subNavItem="임플란트"
                imgSrc="/images/bg_hr_about.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={aboutMenuList}
            />
        </>
    );
}
