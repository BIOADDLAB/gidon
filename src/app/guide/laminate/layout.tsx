import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: '최소 삭제 라미네이트',
    description:
        '자연 치아를 최대한 보존하는 최소 삭제 라미네이트. 수복 후 T-Scan으로 교합을 점검합니다. 성남 모란역 기드온치과.',
    path: '/guide/laminate',
});

export default function LaminateLayout({ children }: { children: React.ReactNode }) {
    return children;
}
