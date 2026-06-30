import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ColumnDetail from '@/components/column/ColumnDetail';

interface ColumnDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export const metadata: Metadata = {
    title: '기드온칼럼 | 기드온치과',
    description: '기드온치과 칼럼 상세 페이지입니다.',
};

export default async function ColumnDetailPage({ params }: ColumnDetailPageProps) {
    const { id } = await params;
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
            <ColumnDetail columnId={id} />
        </main>
    );
}
