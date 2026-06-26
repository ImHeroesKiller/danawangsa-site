import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/layanan/pendanaan-strategis",
        destination: "/id/layanan/modal-usaha-jaminan-aset",
        permanent: true,
      },
      {
        source: "/layanan/konsultasi-pendanaan-strategis",
        destination: "/id/layanan/modal-usaha-jaminan-aset",
        permanent: true,
      },
      {
        source: "/:locale(id|en|zh)/layanan/pendanaan-strategis",
        destination: "/:locale/layanan/modal-usaha-jaminan-aset",
        permanent: true,
      },
      {
        source: "/:locale(id|en|zh)/layanan/konsultasi-pendanaan-strategis",
        destination: "/:locale/layanan/modal-usaha-jaminan-aset",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);