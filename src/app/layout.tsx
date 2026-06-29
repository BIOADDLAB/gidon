import localFont from 'next/font/local';
import { Tenor_Sans } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/layout/SiteChrome';
import FloatingBanner from '@/components/common/FloatingBanner'; // 💡 플로팅 배너 임포트!

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
        /* 💡 기존에 누락되었던 ${hansuwon.variable} 클래스까지 완벽하게 추가해서 폰트가 정상 적용되게 했습니다! */
        <html lang="ko" className={`${dotSans.variable} ${suit.variable} ${tenorSans.variable} ${hansuwon.variable}`}>
            <body className="flex min-h-screen flex-col">
                <SiteChrome>{children}</SiteChrome>

                {/* 💡 화면 우측 하단에 상시 따라다니는 플로팅 배너 장착 완료! */}
                <FloatingBanner />
            </body>
        </html>
    );
}
