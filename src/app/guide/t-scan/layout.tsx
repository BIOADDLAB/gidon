import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: '티스캔 교합관리',
    description: '씹는 힘과 맞물림을 컴퓨터 장비로 바르게 맞춰주는 교합관리. 성남 모란역 기드온치과.',
    path: '/guide/t-scan',
});

export default function TScanLayout({ children }: { children: React.ReactNode }) {
    return children;
}
