import HeroSection from './../../components/HeroSection';

export default function About() {
    // 💡 해당 페이지에 맞는 커스텀 드롭다운 메뉴 배열 생성!
    const aboutMenuList = ['임플란트', '진행과정', '보험 임플란트'];

    return (
        <>
            <HeroSection
                mainTitle="기드온치과"
                subTitle="About GIDEON"
                pageName="임플란트"
                subNavItem="임플란트" // 현재 선택되어 보여줄 텍스트
                imgSrc="/images/bg_hr_about.jpg"
                isNav={true}
                isGreen={false}
                subMenuList={aboutMenuList} // 💡 만든 배열을 Props로 깔끔하게 토스!
            />
        </>
    );
}
