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

export default function App() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main>
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
