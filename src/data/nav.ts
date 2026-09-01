export interface NavSubItem {
    name: string;
    href: string;
}

export interface NavMenuItem {
    title: string;
    shortTitle: string;
    href: string;
    subs: NavSubItem[];
}

export const menus: NavMenuItem[] = [
    {
        title: '기드온소개',
        shortTitle: '기드온소개',
        href: '/about/philosophy',
        subs: [
            { name: '병원철학', href: '/about/philosophy' },
            { name: '기드온의 약속', href: '/about/promise' },
            { name: '의료진 소개', href: '/doctors' },
            { name: '둘러보기', href: '/about/tour' },
            { name: '오시는 길', href: '/about/location' },
            { name: '가격안내', href: '/price' },
        ],
    },
    {
        title: '임플란트',
        shortTitle: '임플란트',
        href: '/guide/ai-navigation',
        subs: [
            { name: 'AI 네비게이션 임플란트', href: '/guide/ai-navigation' },
            { name: '전체 임플란트', href: '/guide/full-implant' },
            { name: '임플란트 틀니', href: '/guide/implant-denture' },
            { name: '보험 임플란트', href: '/implant/insurance' },
        ],
    },
    {
        title: '심미보철·라미네이트',
        shortTitle: '심미보철',
        href: '/guide/laminate',
        subs: [
            { name: '최소 삭제 라미네이트', href: '/guide/laminate' },
            { name: '심미보철', href: '/guide/prosthetics' },
        ],
    },
    {
        title: '디지털 치아교정',
        shortTitle: '치아교정',
        href: '/guide/aligner',
        subs: [
            { name: '투명교정 / 부분교정', href: '/guide/aligner' },
            { name: '성인/전체교정', href: '/guide/ortho' },
        ],
    },
    {
        title: '턱관절·교합케어',
        shortTitle: '턱관절·교합',
        href: '/guide/tmj',
        subs: [
            { name: '턱관절 질환 & 통증케어', href: '/guide/tmj' },
            { name: 'T-Scan 디지털 교합분석', href: '/guide/t-scan' },
        ],
    },
    {
        title: '일반·치주진료',
        shortTitle: '일반진료',
        href: '/guide/laser',
        subs: [
            { name: '물방울레이저 치주관리', href: '/guide/laser' },
            { name: '충치·신경치료', href: '/guide/endo' },
        ],
    },
    {
        title: '기드온칼럼',
        shortTitle: '기드온칼럼',
        href: '/blog',
        subs: [{ name: '기드온칼럼', href: '/blog' }],
    },
];

export function getSubNames(title: string): string[] {
    return menus.find((menu) => menu.title === title || menu.shortTitle === title)?.subs.map((sub) => sub.name) ?? [];
}

export function getHrefByName(name: string): string {
    for (const menu of menus) {
        const matched = menu.subs.find((sub) => sub.name === name);
        if (matched) {
            return matched.href;
        }
    }

    const aliases: Record<string, string> = {
        가격안내: '/price',
        오시는길: '/about/location',
        의료진소개: '/doctors',
        '티스캔 교합관리': '/guide/t-scan',
        '시니어 라미네이트': '/guide/laminate',
        진행과정: '/guide/ai-navigation',
        전체임플란트: '/guide/full-implant',
        '임플란트틀니': '/guide/implant-denture',
    };

    return aliases[name] ?? '/';
}
