/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
        unoptimized: true,
    },
    assetPrefix: isProd ? '/arinkei.github.io/' : '',
    basePath: isProd ? '/arinkei.github.io/' : '',
    output: 'export',
};

export default nextConfig;
