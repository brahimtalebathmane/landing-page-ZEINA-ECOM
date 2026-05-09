import {
  FaqSection,
  Features,
  FinalCta,
  Footer,
  Header,
  Hero,
  OfferSection,
  ProductMedia,
  StatsBar,
  Testimonials
} from "@/components/landing-sections";

export default function Home() {
  return (
    <main className="page-frame">
      <Header />
      <Hero />
      <Features />
      <ProductMedia title="صورة أو فيديو" />
      <Testimonials />
      <StatsBar />
      <OfferSection />
      <ProductMedia title="فيديو" />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
