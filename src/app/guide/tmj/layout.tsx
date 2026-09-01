import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: '턱관절 질환 & 통증케어',
    description: '턱 소리, 통증, 두통의 원인을 턱관절과 교합에서 찾아 치료합니다. 성남 모란역 기드온치과.',
    path: '/guide/tmj',
});

export default function TmjLayout({ children }: { children: React.ReactNode }) {
    return children;
}
