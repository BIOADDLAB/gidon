import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Tenor_Sans } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/layout/SiteChrome';

const clinicStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': 'https://www.gideondental.com/#website',
            url: 'https://www.gideondental.com/',
            name: '기드온치과',
            alternateName: '성남임플란트 기드온치과',
            inLanguage: 'ko-KR',
            publisher: {
                '@id': 'https://www.gideondental.com/#clinic',
            },
        },
        {
            '@type': ['Dentist', 'MedicalClinic', 'LocalBusiness'],
            '@id': 'https://www.gideondental.com/#clinic',
            name: '기드온치과',
            alternateName: '성남임플란트 기드온치과',
            url: 'https://www.gideondental.com/',
            logo: 'https://www.gideondental.com/images/common/logo_g.svg',
            image: 'https://www.gideondental.com/images/og-image.png',
            description:
                '성남 모란역 4번 출구 도보 1분 거리에 위치한 기드온치과입니다. 임플란트, 심미보철·라미네이트, 디지털 치아교정, 턱관절·교합케어, 치주치료를 정직하고 투명하게 진료합니다.',
            telephone: '1522-7528',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '성남대로 1126, 메가프라자 303호·304호·305호',
                addressLocality: '성남시',
                addressRegion: '경기도',
                addressCountry: 'KR',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 37.4303456,
                longitude: 127.1298975,
            },
            hasMap: 'https://www.google.com/maps/search/?api=1&query=37.4303456,127.1298975',
            areaServed: [
                { '@type': 'City', name: '성남시' },
                { '@type': 'AdministrativeArea', name: '중원구' },
            ],
            medicalSpecialty: 'Dentistry',
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '1522-7528',
                contactType: 'customer service',
                availableLanguage: ['Korean'],
            },
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Thursday'],
                    opens: '09:00',
                    closes: '12:30',
                },
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Thursday'],
                    opens: '14:00',
                    closes: '20:00',
                },
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Tuesday', 'Wednesday', 'Friday'],
                    opens: '09:00',
                    closes: '12:30',
                },
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Tuesday', 'Wednesday', 'Friday'],
                    opens: '14:00',
                    closes: '18:00',
                },
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: 'Saturday',
                    opens: '09:00',
                    closes: '13:00',
                },
            ],
            employee: [
                { '@id': 'https://www.gideondental.com/doctors#seong-yogil' },
                { '@id': 'https://www.gideondental.com/doctors#yang-mira' },
                { '@id': 'https://www.gideondental.com/doctors#kim-hyeonchan' },
            ],
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: '기드온치과 주요 진료',
                itemListElement: [
                    '임플란트',
                    'AI 네비게이션 임플란트',
                    '보험 임플란트',
                    '최소 삭제 라미네이트',
                    '심미보철',
                    '디지털 치아교정',
                    '턱관절 질환 케어',
                    'T-Scan 디지털 교합분석',
                    '물방울레이저 치주관리',
                    '충치·신경치료',
                ].map((name) => ({
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name,
                        provider: { '@id': 'https://www.gideondental.com/#clinic' },
                    },
                })),
            },
            sameAs: [
                'https://blog.naver.com/pauls2001n',
                'http://pf.kakao.com/_xisgFE',
                'https://map.naver.com/p/entry/place/2054269887',
            ],
        },
        ...[
            ['seong-yogil', '성요길', '대표원장'],
            ['yang-mira', '양미라', '원장'],
            ['kim-hyeonchan', '김현찬', '원장'],
        ].map(([id, name, jobTitle]) => ({
            '@type': 'Person',
            '@id': `https://www.gideondental.com/doctors#${id}`,
            name,
            jobTitle,
            url: 'https://www.gideondental.com/doctors',
            worksFor: {
                '@id': 'https://www.gideondental.com/#clinic',
            },
        })),
    ],
};

const treatmentItemListStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '기드온치과 진료 과목',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'AI 네비게이션 임플란트',
            image: 'https://www.gideondental.com/images/main_hover_01.jpg',
            url: 'https://www.gideondental.com/guide/ai-navigation',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: '전체 임플란트',
            image: 'https://www.gideondental.com/images/main_hover_01.jpg',
            url: 'https://www.gideondental.com/guide/full-implant',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: '임플란트 틀니',
            image: 'https://www.gideondental.com/images/main_hover_01.jpg',
            url: 'https://www.gideondental.com/guide/implant-denture',
        },
        {
            '@type': 'ListItem',
            position: 4,
            name: '최소 삭제 라미네이트',
            image: 'https://www.gideondental.com/images/main_hover_04.jpg',
            url: 'https://www.gideondental.com/guide/laminate',
        },
        {
            '@type': 'ListItem',
            position: 5,
            name: '디지털 치아교정',
            image: 'https://www.gideondental.com/images/main_hover_01.jpg',
            url: 'https://www.gideondental.com/guide/aligner',
        },
        {
            '@type': 'ListItem',
            position: 6,
            name: '턱관절 질환 & 통증케어',
            image: 'https://www.gideondental.com/images/main_hover_03.jpg',
            url: 'https://www.gideondental.com/guide/tmj',
        },
        {
            '@type': 'ListItem',
            position: 7,
            name: '물방울레이저 치주관리',
            image: 'https://www.gideondental.com/images/main_hover_02.jpg',
            url: 'https://www.gideondental.com/guide/laser',
        },
    ],
};

export const metadata: Metadata = {
    metadataBase: new URL('https://www.gideondental.com'),
    title: '성남임플란트 기드온치과 | 바른 마음과 정직한 진료',
    description:
        '성남임플란트 잘하는 기드온치과입니다. 흔들리지 않는 판단, 끝까지 지키는 약속. 모란역 4번 출구 도보 1분 거리에 위치하고 있으며 정직하고 투명하게 진료합니다.',
    alternates: {
        canonical: '/',
    },
    verification: {
        google: 'NaamOcxQHaC-LfwRngAj30AxlaFVUWjQ1LrTq3nXEM0',
        other: {
            'naver-site-verification': '89a7f95f37d653673e94cbe126030a93a652458b',
        },
    },
    openGraph: {
        title: '성남임플란트 기드온치과 | 바른 마음과 정직한 진료',
        description:
            '성남임플란트 잘하는 기드온치과입니다. 흔들리지 않는 판단, 끝까지 지키는 약속. 모란역 4번 출구 도보 1분 거리에 위치하고 있으며 정직하고 투명하게 진료합니다.',
        url: '/',
        siteName: '기드온치과',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: '기드온치과 대표 이미지',
            },
        ],
        locale: 'ko_KR',
        type: 'website',
    },
};

const dotSans = localFont({
    src: '../../public/fonts/AstaSans[wght].ttf',
    variable: '--font-sans',
    weight: '300 800',
});

const suit = localFont({
    src: '../../public/fonts/SUIT-Variable.woff2',
    variable: '--font-ui',
    weight: '400 800',
});

const tenorSans = Tenor_Sans({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-accent',
});

const hansuwon = localFont({
    src: [
        {
            path: '../../public/fonts/KHNPHUotfR.otf',
            weight: '400',
        },
    ],
    variable: '--font-hero',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" className={`${dotSans.variable} ${suit.variable} ${tenorSans.variable} ${hansuwon.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(clinicStructuredData).replace(/</g, '\\u003c'),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(treatmentItemListStructuredData).replace(/</g, '\\u003c'),
                    }}
                />
            </head>
            <body className="flex min-h-screen flex-col">
                <SiteChrome>{children}</SiteChrome>
            </body>
        </html>
    );
}
