import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: '물방울레이저 치주관리',
    description: '레이저로 잇몸 염증과 불편함을 줄이는 치주관리. 성남 모란역 기드온치과.',
    path: '/guide/laser',
});

export default function LaserLayout({ children }: { children: React.ReactNode }) {
    return children;
}
