/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wikimedia.org',
                port: '',
                pathname: '**',
            },
        ],
    },
}

export default nextConfig
