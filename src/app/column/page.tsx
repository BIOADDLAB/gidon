import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/common/SectionHeading';
import ColumnList from '@/components/column/ColumnList';

export const metadata: Metadata = {
    title: '기드온칼럼 | 기드온치과',
    description: '기드온치과의 진료 철학과 치과 치료 정보를 전하는 칼럼입니다.',
};

export default function ColumnPage() {
    const columnMenuList = ['기드온칼럼'];

    return (
        <main>
            <HeroSection
                mainTitle="기드온칼럼"
                subTitle="GIDEON Column"
                pageName="기드온칼럼"
                subNavItem="기드온칼럼"
                imgSrc="/images/bg_green2.jpg"
                isNav={true}
                isGreen={true}
                subMenuList={columnMenuList}
            />

            <section className="bg-white px-4 py-16 md:py-[110px]">
                <div className="mx-auto w-full max-w-[1160px]">
                    <SectionHeading
                        topTitle="GIDEON COLUMN"
                        centerTitle="기드온칼럼"
                        desc={'환자분들이 치료를 더 쉽게 이해하실 수 있도록\n기드온치과의 생각과 정보를 전합니다.'}
                        isDesc={true}
                    />

                    <ColumnList />
                </div>
            </section>
        </main>
    );
}
