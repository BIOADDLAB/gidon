import AboutLayout from '../AboutLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '병원철학 | 기드온치과',
    description: '따뜻한 마음으로 자연 치아를 살리는 기드온치과의 병원철학입니다.',
};

export default function PhilosophyPage() {
    return <AboutLayout activeSection="philosophy" />;
}
