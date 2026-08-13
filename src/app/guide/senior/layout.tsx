import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: '시니어 라미네이트',
    description: '노화로 깨지거나 벌어진 치아 모양을 바로잡는 시니어 라미네이트. 성남 모란역 기드온치과.',
    path: '/guide/senior',
});

export default function SeniorLayout({ children }: { children: React.ReactNode }) {
    return children;
}
