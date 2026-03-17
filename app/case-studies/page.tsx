import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Studies — ผลงานจริงจากธุรกิจไทย",
  description:
    "ตัวอย่างผลงานจริงจาก AI Studio Thailand ทั้ง Workshop, AI Chatbot, Content Strategy และ RAG Pipeline สำหรับธุรกิจไทย",
  openGraph: {
    title: "Case Studies — ผลงานจริงจากธุรกิจไทย | AI Studio Thailand",
    description:
      "ตัวอย่างผลงานจริงจาก AI Studio Thailand ทั้ง Workshop, AI Chatbot, Content Strategy และ RAG Pipeline สำหรับธุรกิจไทย",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CaseStudiesSection />
      </main>
      <Footer />
    </>
  );
}
