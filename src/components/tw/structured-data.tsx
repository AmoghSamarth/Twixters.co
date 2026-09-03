import { faqs, founder, site } from "../../content/site";

/**
 * JSON-LD built ONLY from facts that appear on the rendered page: the studio,
 * its founder, the founding year used in the current content (2021), and the
 * FAQ questions/answers actually published here.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        slogan: "We Build Design that Actually Works",
        foundingDate: "2021",
        email: site.email,
        description: site.description,
        founder: {
          "@type": "Person",
          name: founder.name,
          jobTitle: "Founder / CEO",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Static, build-time content — no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
