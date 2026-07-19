/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export: the demo sites are brochure pages with no server code, so
    // every deploy is a pile of static files — fast, cheap, zero runtime.
    output: "export",
    images: { unoptimized: true },
};

export default nextConfig;
