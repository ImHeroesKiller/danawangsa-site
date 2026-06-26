interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/** Renders schema.org JSON-LD script tag */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}