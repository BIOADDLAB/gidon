import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: 'T-Scan 디지털 교합분석',
    description:
        '씹는 힘을 1/1,000초 단위 수치로 측정하는 T-Scan 디지털 교합분석. 성남 모란역 기드온치과.',
    path: '/guide/t-scan',
});

export default function TScanLayout({ children }: { children: React.ReactNode }) {
    return children;
}
