'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import FloatingBanner from '@/components/common/FloatingBanner';
import SitePopup from '@/components/common/SitePopup';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminPage = pathname.startsWith('/admin');

    if (isAdminPage) {
        return <main className="flex-1">{children}</main>;
    }

    return (
        <>
            <Header />
            <main className="flex-1">{children}</main>
            <SitePopup />
            <FloatingBanner />
            <Footer />
        </>
    );
}
