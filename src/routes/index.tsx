import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "../components/tw/nav";
import { Hero } from "../components/tw/hero";
import { Collage } from "../components/tw/collage";
import { Services } from "../components/tw/services";
import { Process } from "../components/tw/process";
import { Testimonials } from "../components/tw/testimonials";
import { CaseStudies } from "../components/tw/case-studies";
import { Founder } from "../components/tw/founder";
import { Pricing } from "../components/tw/pricing";
import { Faq } from "../components/tw/faq";
import { FinalCta } from "../components/tw/final-cta";
import { StructuredData } from "../components/tw/structured-data";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
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
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}
