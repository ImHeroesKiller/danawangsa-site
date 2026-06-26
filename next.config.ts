import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/layanan/pendanaan-strategis",
        destination: "/layanan/modal-usaha-jaminan-aset",
        permanent: true,
      },
      {
        source: "/layanan/konsultasi-pendanaan-strategis",
        destination: "/layanan/modal-usaha-jaminan-aset",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;