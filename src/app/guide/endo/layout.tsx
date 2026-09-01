import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: '충치·신경치료',
    description: '자연치아를 최대한 남기는 충치·신경치료. 성남 모란역 기드온치과.',
    path: '/guide/endo',
});

export default function EndoLayout({ children }: { children: React.ReactNode }) {
    return children;
}
