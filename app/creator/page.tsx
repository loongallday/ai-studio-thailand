import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Creator from "@/components/Creator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Content Creation — สร้าง Content ด้าน AI",
  description:
    "บริการสร้างคอนเทนต์ด้าน AI ครบวงจร ทั้ง Blog, Social Media, Video Production และ Content Strategy โดย AI Studio Thailand",
};

export default function CreatorPage() {
  return (
    <>
      <Navbar />
      <main>
        <Creator />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
