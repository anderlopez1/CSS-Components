/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export: the Kwipps site is a brochure page. The contact form talks
    // to the intake edge function from the client, so there's no server code —
    // every deploy is a pile of static files (fast, cheap, zero runtime).
    output: "export",
    images: { unoptimized: true },
};

export default nextConfig;
