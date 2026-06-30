// app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Tenor_Sans } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/layout/SiteChrome';

export const metadata: Metadata = {
    title: '기드온치과 | 바른 마음과 정직한 진료',
    description: '흔들리지 않는 판단, 끝까지 지키는 약속. 모란역 4번 출구 도보 1분 기드온치과입니다.',
    openGraph: {
        title: '기드온치과',
        description: '흔들리지 않는 판단, 끝까지 지키는 약속. 정직하고 투명하게 진료합니다.',
        url: 'gidon-two.vercel.app',
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
            path: '../../public/fonts/KHNPHDotfR.otf',
            weight: '400',
        },
        {
            path: '../../public/fonts/KHNPHDotfB.otf',
            weight: '700',
        },
    ],
    variable: '--font-hero',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" className={`${dotSans.variable} ${suit.variable} ${tenorSans.variable} ${hansuwon.variable}`}>
            <body className="flex min-h-screen flex-col">
                <SiteChrome>{children}</SiteChrome>
            </body>
        </html>
    );
}
