import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Workshop from "@/components/Workshop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Workshop & Training — สอน AI ตั้งแต่พื้นฐานถึงขั้นสูง",
  description:
    "Workshop อบรม AI สำหรับทีมและองค์กร ตั้งแต่พื้นฐานจนถึง AI Automation ขั้นสูง โดย AI Studio Thailand",
};

export default function WorkshopPage() {
  return (
    <>
      <Navbar />
      <main>
        <Workshop />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
