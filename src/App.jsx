import { Nav } from "./components/tw/nav";
import { Hero } from "./components/tw/hero";
import { Collage } from "./components/tw/collage";
import { Services } from "./components/tw/services";
import { Process } from "./components/tw/process";
import { Testimonials } from "./components/tw/testimonials";
import { CaseStudies } from "./components/tw/case-studies";
import { Founder } from "./components/tw/founder";
import { Faq } from "./components/tw/faq";
import { FinalCta } from "./components/tw/final-cta";
import { StructuredData } from "./components/tw/structured-data";

import { assetUrl } from "./utils/asset";

export default function App() {
  return (
    <>
      <StructuredData />
      {/* Background texture at the absolute lowest z-index */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-50 select-none bg-[#d9d9d9]"
        style={{
          backgroundImage: `url("${assetUrl("/assets/micro-texture.png")}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "50px 50px",
        }}
      />
      <Nav />
      <main className="relative z-0">
        <Hero />
        <Collage />
        <Services />
        <Process />
        <Testimonials />
        <CaseStudies />
        <Founder />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}
