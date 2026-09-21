import { founder, site } from "../../content/site";
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
        sameAs: [
          site.socials?.behance,
          site.socials?.facebook,
          site.socials?.linkedin,
          site.socials?.instagram
        ].filter(Boolean),
        founder: {
          "@type": "Person",
          name: founder.name,
          jobTitle: "Founder / CEO"
        }
      }
    ]
  };
  return <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />;
}
