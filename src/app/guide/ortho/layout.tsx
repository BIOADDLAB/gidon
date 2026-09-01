import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: '성인/전체교정',
    description: '치아 뿌리, 잇몸뼈, 턱관절까지 고려한 성인 전체교정. 성남 모란역 기드온치과.',
    path: '/guide/ortho',
});

export default function OrthoLayout({ children }: { children: React.ReactNode }) {
    return children;
}
