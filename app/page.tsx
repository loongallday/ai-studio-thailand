import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollVideo from "@/components/ScrollVideo";
import Services from "@/components/Services";
import Workshop from "@/components/Workshop";
import Development from "@/components/Development";
import Creator from "@/components/Creator";
import Ecosystem from "@/components/Ecosystem";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollVideo />
        <Services />
        <Workshop />
        <Development />
        <Creator />
        <Ecosystem />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
