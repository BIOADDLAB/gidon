import AboutLayout from '../AboutLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '둘러보기 | 기드온치과',
    description: '기드온치과의 쾌적하고 편안한 원내 시설 및 진료 환경을 확인해보세요.',
};

export default function TourPage() {
    return <AboutLayout activeSection="tour" />;
}
