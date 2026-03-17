import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Development from "@/components/Development";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Custom AI Development — พัฒนาระบบ AI ขนาดใหญ่",
  description:
    "พัฒนาระบบ AI แบบ Custom สำหรับธุรกิจ ตั้งแต่ Chatbot, RAG, Automation ไปจนถึง Full-stack AI Solutions โดย AI Studio Thailand",
};

export default function DevelopmentPage() {
  return (
    <>
      <Navbar />
      <main>
        <Development />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
