import AboutLayout from '../AboutLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '오시는길 | 기드온치과',
    description: '기드온치과로 오시는 길과 방문 시 참고사항을 안내합니다.',
};

export default function AboutLocationPage() {
    return <AboutLayout activeSection="location" />;
}
