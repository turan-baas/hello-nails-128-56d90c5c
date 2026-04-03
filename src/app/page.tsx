import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <>
      <ScrollRevealProvider />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
