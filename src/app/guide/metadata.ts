import type { Metadata } from 'next';

const SITE_URL = 'https://www.gideondental.com';
const SITE_NAME = '성남임플란트 기드온치과';

interface GuideMetadataOptions {
    title: string;
    description: string;
    path: `/guide/${string}`;
}

export function createGuideMetadata({ title, description, path }: GuideMetadataOptions): Metadata {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;

    return {
        title: fullTitle,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: SITE_NAME,
            images: [
                {
                    url: `${SITE_URL}/images/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: '기드온치과 대표 이미지',
                },
            ],
            locale: 'ko_KR',
            type: 'website',
        },
    };
}
