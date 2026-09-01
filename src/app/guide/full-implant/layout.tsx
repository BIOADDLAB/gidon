import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: '전체 임플란트',
    description:
        '여러 치아, 또는 대부분의 치아가 없을 때 정밀 진단 후 필요한 범위만큼 진행하는 전체 임플란트. 성남 모란역 기드온치과.',
    path: '/guide/full-implant',
});

export default function FullImplantLayout({ children }: { children: React.ReactNode }) {
    return children;
}
