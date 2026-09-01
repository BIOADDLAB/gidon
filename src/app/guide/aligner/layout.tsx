import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: '투명교정 / 부분교정',
    description: '티 나지 않는 투명교정과 앞니 집중 부분교정. 성남 모란역 기드온치과.',
    path: '/guide/aligner',
});

export default function AlignerLayout({ children }: { children: React.ReactNode }) {
    return children;
}
