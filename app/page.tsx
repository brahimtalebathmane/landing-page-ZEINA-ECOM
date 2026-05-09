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
    <main className="mx-auto min-h-screen w-full bg-lightBg">
      <Header />
      <Hero />
      <Features />
      <ProductMedia title="صورة أو فيديو" />
      <Testimonials />
      <StatsBar />
      <OfferSection />
      <ProductMedia title="صورة أو فيديو" />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
