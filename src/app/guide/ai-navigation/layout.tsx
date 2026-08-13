import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: 'AI 네비게이션 임플란트',
    description:
        '3D CT로 구강 상태를 분석하고 식립 위치를 정밀하게 계획하는 네비게이션 임플란트. 성남 모란역 기드온치과.',
    path: '/guide/ai-navigation',
});

export default function AiNavigationLayout({ children }: { children: React.ReactNode }) {
    return children;
}
