import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — บทความ AI สำหรับธุรกิจไทย",
  description:
    "บทความ AI ที่เข้าใจง่าย สำหรับธุรกิจไทย เรียนรู้ Prompt Engineering, RAG Pipeline, n8n Automation และกลยุทธ์ AI สำหรับ SME",
  openGraph: {
    title: "Blog — บทความ AI สำหรับธุรกิจไทย | AI Studio Thailand",
    description:
      "บทความ AI ที่เข้าใจง่าย สำหรับธุรกิจไทย เรียนรู้ Prompt Engineering, RAG Pipeline, n8n Automation และกลยุทธ์ AI สำหรับ SME",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
