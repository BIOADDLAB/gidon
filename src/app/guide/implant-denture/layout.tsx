import { createGuideMetadata } from '../metadata';

export const metadata = createGuideMetadata({
    title: '임플란트 틀니',
    description:
        '일반 틀니보다 덜 흔들리고, 전체 고정 임플란트보다 부담을 줄인 임플란트 틀니. 성남 모란역 기드온치과.',
    path: '/guide/implant-denture',
});

export default function ImplantDentureLayout({ children }: { children: React.ReactNode }) {
    return children;
}
