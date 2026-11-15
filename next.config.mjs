import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    productionBrowserSourceMaps: false,
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            'three/webgpu': false,
            'three/tsl': false,
        };
        return config;
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [],
    },
    experimental: {
        optimizePackageImports: [
            'react-icons',
            'framer-motion',
            '@react-three/fiber',
            '@react-three/drei',
        ],
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'X-DNS-Prefetch-Control', value: 'on' },
                ],
            },
            {
                source: '/:path*.(svg|png|jpg|jpeg|webp|avif|webm|woff2)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, stale-while-revalidate=604800',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
