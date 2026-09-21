import { Nav } from "./components/tw/nav";
import { Hero } from "./components/tw/hero";
import { Collage } from "./components/tw/collage";
import { Services } from "./components/tw/services";
import { LogoMarquee } from "./components/tw/logo-marquee";
import { Expertise } from "./components/tw/expertise";
import { Process } from "./components/tw/process";
import { CaseStudies } from "./components/tw/case-studies";
import { Founder } from "./components/tw/founder";
import { FinalCta } from "./components/tw/final-cta";
import { FloatingDiscovery } from "./components/tw/floating-discovery";
import { StructuredData } from "./components/tw/structured-data";

import { assetUrl } from "./utils/asset";

export default function App() {
  return (
    <>
      <StructuredData />
      {/* Background texture at the absolute lowest z-index */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-50 select-none bg-[#f2f2f2]"
        style={{
          backgroundImage: `url("${assetUrl("/assets/micro-texture.png")}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "50px 50px",
        }}
      />
      <Nav />
      <main className="relative z-0">
        <div className="relative">
          <Hero />
          <Collage />
        </div>
        <Services />
        <LogoMarquee />
        <Expertise />
        <Process />
        <CaseStudies />
        <div className="relative">
          <Founder />
          <FinalCta />
        </div>
      </main>
      <FloatingDiscovery />
    </>
  );
}
