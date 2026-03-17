import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Ecosystem from "@/components/Ecosystem";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ecosystem — เครือข่าย AI ครบวงจร",
  description:
    "ระบบนิเวศ AI ครบวงจรจาก AI Studio Thailand — LocalAI Thailand สำหรับ On-Premise และ CloudAI Thailand สำหรับ Cloud Solutions",
};

export default function EcosystemPage() {
  return (
    <>
      <Navbar />
      <main>
        <Ecosystem />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
