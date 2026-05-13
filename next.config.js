/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "firebasestorage.googleapis.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/Bhogeshwarj",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/bhogeshwarj/",
        permanent: true,
      },
      {
        source: "/mail",
        destination: "mailto:bhogeshwarj@gmail.com",
        permanent: true,
      },
      {
        source: "/resume",
        destination: "/resume.pdf",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
