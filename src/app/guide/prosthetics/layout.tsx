import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: '심미보철',
    description:
        '올세라믹·지르코니아 심미보철로 기능과 심미를 함께 회복합니다. 성남 모란역 기드온치과.',
    path: '/guide/prosthetics',
});

export default function ProstheticsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
