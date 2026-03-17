"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const footerColumns = [
  {
    title: "บริการ",
    links: [
      { label: "Workshop & Training", href: "/workshop" },
      { label: "AI Development", href: "/development" },
      { label: "AI Content Creation", href: "/creator" },
      { label: "ราคา", href: "/pricing" },
    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "LocalAI Thailand",
        href: "https://www.localaithai.com",
        external: true,
      },
      {
        label: "CloudAI Thailand",
        href: "https://www.cloudaithai.com",
        external: true,
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "เกี่ยวกับเรา", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                AI{" "}
                <span className="gradient-text">Studio</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              ทีมพัฒนาเบื้องหลัง LocalAI Thailand และ CloudAI Thailand
              — สอน พัฒนา สร้างสรรค์ AI สำหรับธุรกิจไทย
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <a
                href="mailto:contact@aistudiothailand.com"
                className="flex items-center gap-2 py-2 hover:text-[#06c] transition-colors min-h-[44px]"
              >
                <Mail size={16} />
                contact@aistudiothailand.com
              </a>
              <a
                href="tel:+66XXXXXXXX"
                className="flex items-center gap-2 py-2 hover:text-[#06c] transition-colors min-h-[44px]"
              >
                <Phone size={16} />
                +66-XX-XXX-XXXX
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Bangkok, Thailand
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">
                {col.title}
              </h4>
              <ul className="space-y-1 sm:space-y-1.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 py-2 hover:text-[#06c] transition-colors flex items-center gap-1.5 min-h-[44px]"
                      >
                        {link.label} <span className="text-[11px]">&rarr;</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 py-2 hover:text-[#06c] transition-colors min-h-[44px] flex items-center"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AI Studio Thailand. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors min-h-[44px] flex items-center">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors min-h-[44px] flex items-center">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
