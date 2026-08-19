import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd3pm7uvxl6riza.cloudfront.net',
            },
        ],
    },
};

export default nextConfig;
