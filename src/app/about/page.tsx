import HeroSection from './../../components/HeroSection';

export default function About() {
    return (
        <>
            <HeroSection
                mainTitle="기드온치과"
                subTitle="About GIDEON"
                imgSrc="/images/bg_hr_about.jpg"
                isNav={true}
                isGreen={true}
            />
        </>
    );
}
