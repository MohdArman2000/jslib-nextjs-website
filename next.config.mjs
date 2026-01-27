/** @type {import('next').NextConfig} */
const repoName = "jslib-nextjs-website";
const basePath = process.env.GITHUB_ACTIONS ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
