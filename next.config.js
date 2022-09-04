/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['img.ophim.cc'],
    },
}

module.exports = nextConfig
