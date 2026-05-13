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
};

export default nextConfig;