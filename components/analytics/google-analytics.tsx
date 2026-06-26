import Script from "next/script";

import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from "@/lib/analytics";

/** Loads GA4 gtag — only rendered when NEXT_PUBLIC_GA_MEASUREMENT_ID is set */
export function GoogleAnalytics() {
  if (!isAnalyticsEnabled() || !GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
        `}
      </Script>
    </>
  );
}