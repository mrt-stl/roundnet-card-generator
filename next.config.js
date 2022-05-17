/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // TODO remove this config again as soon as vercel deployments start working again without
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
