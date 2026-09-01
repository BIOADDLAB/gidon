import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/guide/senior',
                destination: '/guide/laminate',
                permanent: true,
            },
            {
                source: '/implant/process',
                destination: '/guide/ai-navigation',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
