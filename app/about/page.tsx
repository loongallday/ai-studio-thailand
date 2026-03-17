import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา — AI Studio Thailand",
  description:
    "AI Studio Thailand คือทีมเบื้องหลัง LocalAI Thailand และ CloudAI Thailand สอน พัฒนา สร้างสรรค์ AI สำหรับธุรกิจไทย",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
