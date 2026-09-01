const SITE_URL = 'https://www.gideondental.com';

const feedItems = [
    {
        title: '기드온치과',
        path: '/',
        description: '흔들리지 않는 판단, 끝까지 지키는 약속. 모란역 4번 출구 도보 1분 기드온치과입니다.',
    },
    {
        title: '기드온칼럼',
        path: '/blog',
        description: '기드온치과의 진료 철학과 치과 치료 정보를 전하는 칼럼입니다.',
    },
    {
        title: '의료진소개',
        path: '/doctors',
        description: '기드온치과 의료진을 소개합니다.',
    },
    {
        title: 'AI 네비게이션 임플란트',
        path: '/guide/ai-navigation',
        description: '3D CT로 식립 위치를 정밀하게 계획하는 네비게이션 임플란트입니다.',
    },
    {
        title: '전체 임플란트',
        path: '/guide/full-implant',
        description: '여러 치아가 없을 때 필요한 범위만큼 계획하는 전체 임플란트입니다.',
    },
    {
        title: '임플란트 틀니',
        path: '/guide/implant-denture',
        description: '일반 틀니보다 덜 흔들리는 임플란트 틀니입니다.',
    },
    {
        title: '최소 삭제 라미네이트',
        path: '/guide/laminate',
        description: '자연 치아를 최대한 보존하는 최소 삭제 라미네이트입니다.',
    },
    {
        title: '턱관절 질환 & 통증케어',
        path: '/guide/tmj',
        description: '턱 소리, 통증, 두통의 원인을 턱관절과 교합에서 찾아 치료합니다.',
    },
];

function escapeXml(value: string) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;');
}

export function GET() {
    const buildDate = new Date().toUTCString();
    const items = feedItems
        .map(
            (item) => `
        <item>
            <title>${escapeXml(item.title)}</title>
            <link>${SITE_URL}${item.path}</link>
            <guid>${SITE_URL}${item.path}</guid>
            <description>${escapeXml(item.description)}</description>
            <pubDate>${buildDate}</pubDate>
        </item>`,
        )
        .join('');

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
        <title>${escapeXml('기드온치과')}</title>
        <link>${SITE_URL}</link>
        <description>${escapeXml('기드온치과의 진료 정보와 병원 소식을 전합니다.')}</description>
        <language>ko-KR</language>
        <lastBuildDate>${buildDate}</lastBuildDate>
${items}
    </channel>
</rss>`;

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
        },
    });
}
