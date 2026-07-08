const SITE_URL = 'https://www.gideondental.com';

const feedItems = [
    {
        title: '기드온치과',
        path: '/',
        description: '흔들리지 않는 판단, 끝까지 지키는 약속. 모란역 4번 출구 도보 1분 기드온치과입니다.',
    },
    {
        title: '기드온칼럼',
        path: '/column',
        description: '기드온치과의 진료 철학과 치과 치료 정보를 전하는 칼럼입니다.',
    },
    {
        title: '의료진소개',
        path: '/doctors',
        description: '기드온치과 의료진을 소개합니다.',
    },
    {
        title: '임플란트 진행과정',
        path: '/implant/process',
        description: '정밀하고 안정적인 임플란트 치료 과정을 안내합니다.',
    },
    {
        title: '가격안내',
        path: '/price',
        description: '기드온치과의 진료 가격을 안내합니다.',
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
