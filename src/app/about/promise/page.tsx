import AboutLayout from '../AboutLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '기드온의 약속 | 기드온치과',
    description: '과잉 진료 없는 정직한 진료, 투명한 안내, 끝까지 책임지는 기드온치과의 약속입니다.',
};

export default function PromisePage() {
    return <AboutLayout activeSection="promise" />;
}
