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

            <a
                href="https://blog.naver.com/pauls2001n"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 left-3 right-[86px] z-40 flex items-center justify-between gap-3 rounded-full border border-[#DCEFE4] bg-white/95 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#03C75A] md:bottom-10 md:left-6 md:right-auto md:w-[280px] md:rounded-[24px] md:px-5 md:py-5"
            >
                <div className="min-w-0">
                    <span className="inline-flex rounded-full bg-[#03C75A] px-3 py-1 text-[10px] font-extrabold tracking-[0.08em] text-white">
                        NAVER BLOG
                    </span>
                    <strong className="mt-1.5 block truncate text-[15px] font-bold text-green-900 md:mt-3 md:break-keep md:text-[19px]">
                        네이버 블로그 바로가기
                    </strong>
                    <span className="hidden text-sm font-medium leading-[1.6] text-ink-500 md:mt-2 md:block">
                        더 다양한 치료 정보와 병원 소식을 확인해보세요.
                    </span>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white md:h-11 md:w-11">
                    &gt;
                </span>
            </a>
        </main>
    );
}
