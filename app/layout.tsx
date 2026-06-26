import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { ConsultationModal } from "@/components/consultation/consultation-modal";
import { ConsultationProvider } from "@/components/consultation/consultation-context";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { StickyCTA } from "@/components/layout/sticky-cta";
import { rootMetadata } from "@/lib/metadata";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background pb-24 text-white antialiased md:pb-0">
        <ConsultationProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <StickyCTA />
          <ConsultationModal />
        </ConsultationProvider>
      </body>
    </html>
  );
}