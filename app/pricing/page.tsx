import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ราคา — Workshop, Development, Content Creation",
  description:
    "ดูราคาบริการ AI Studio Thailand ทั้ง Workshop & Training, Custom AI Development และ AI Content Creation ราคาโปร่งใส ไม่มีค่าใช้จ่ายซ่อน",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
