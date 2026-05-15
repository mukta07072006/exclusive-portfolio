import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;