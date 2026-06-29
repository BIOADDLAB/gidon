import localFont from 'next/font/local';
import { Tenor_Sans } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/layout/SiteChrome';

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
        <html lang="ko" className={`${dotSans.variable} ${suit.variable} ${tenorSans.variable}`}>
            <body className="flex min-h-screen flex-col">
                <SiteChrome>{children}</SiteChrome>
            </body>
        </html>
    );
}
