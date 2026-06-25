import localFont from 'next/font/local';
import { Tenor_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko" className={`${dotSans.variable} ${suit.variable} ${tenorSans.variable}`}>
            <body className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
