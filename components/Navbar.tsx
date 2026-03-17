"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Code2,
  Video,
  BookOpen,
  FileText,
  DollarSign,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  desc: string;
}

interface NavGroup {
  label: string;
  items: DropdownItem[];
}

const navGroups: NavGroup[] = [
  {
    label: "บริการ",
    items: [
      {
        label: "Workshop & Training",
        href: "/workshop",
        icon: <GraduationCap size={20} />,
        desc: "อบรม AI 1-5 วัน สำหรับทีม",
      },
      {
        label: "AI Development",
        href: "/development",
        icon: <Code2 size={20} />,
        desc: "พัฒนาระบบ AI ขนาดใหญ่",
      },
      {
        label: "AI Content Creation",
        href: "/creator",
        icon: <Video size={20} />,
        desc: "Blog, Social, Video, Podcast",
      },
      {
        label: "ราคา",
        href: "/pricing",
        icon: <DollarSign size={20} />,
        desc: "Workshop, Development, Content",
      },
    ],
  },
  {
    label: "ผลงาน",
    items: [
      {
        label: "Case Studies",
        href: "/case-studies",
        icon: <BookOpen size={20} />,
        desc: "ตัวอย่างผลงานจริง",
      },
      {
        label: "Blog",
        href: "/blog",
        icon: <FileText size={20} />,
        desc: "บทความ AI สำหรับธุรกิจไทย",
      },
      {
        label: "Ecosystem",
        href: "/ecosystem",
        icon: <MessageCircle size={20} />,
        desc: "LocalAI + CloudAI + Studio",
      },
    ],
  },
];

const directLinks = [
  { label: "เกี่ยวกับเรา", href: "/about", icon: <BookOpen size={18} /> },
  { label: "ติดต่อ", href: "/#contact", icon: <MessageCircle size={18} /> },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openDropdown) {
        const ref = dropdownRefs.current[openDropdown];
        if (ref && !ref.contains(e.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <span className="text-xl font-bold text-[#1d1d1f] tracking-tight">
              AI{" "}
              <span className="gradient-text">Studio</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navGroups.map((group) => (
              <div
                key={group.label}
                ref={(el) => { dropdownRefs.current[group.label] = el; }}
                className="relative"
              >
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === group.label ? null : group.label
                    )
                  }
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    openDropdown === group.label
                      ? "text-[#06c] bg-[#f0f5ff]"
                      : "text-[#1d1d1f] hover:text-[#06c] hover:bg-[#f0f5ff]"
                  }`}
                >
                  {group.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === group.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openDropdown === group.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.12)] border border-black/[0.04] overflow-hidden"
                    >
                      <div className="p-2">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f0f5ff] transition-colors group"
                          >
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#f0f5ff] text-[#06c] flex items-center justify-center group-hover:bg-[#06c] group-hover:text-white transition-colors">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-[#1d1d1f]">
                                {item.label}
                              </div>
                              <div className="text-xs text-[#6e6e73] mt-0.5">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {directLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#1d1d1f] hover:text-[#06c] hover:bg-[#f0f5ff] rounded-full transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link href="/contact" className="btn-primary ml-3 !py-2.5 !px-5 text-sm">
              เริ่มต้นใช้ AI
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-[#1d1d1f] hover:text-[#06c] active:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="max-w-[1200px] mx-auto px-5 sm:px-6 py-4 space-y-1 max-h-[calc(100dvh-56px)] overflow-y-auto overscroll-contain pb-[calc(16px+env(safe-area-inset-bottom))]">
              {navGroups.map((group, groupIndex) => (
                <div key={group.label} className={groupIndex > 0 ? "border-t border-black/[0.06] pt-1" : ""}>
                  <button
                    onClick={() =>
                      setMobileAccordion(
                        mobileAccordion === group.label ? null : group.label
                      )
                    }
                    className="flex items-center justify-between w-full px-4 py-3 min-h-[44px] text-base sm:text-sm font-semibold text-[#1d1d1f] rounded-xl hover:bg-[#f0f5ff] transition-colors"
                  >
                    {group.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        mobileAccordion === group.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileAccordion === group.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 space-y-1">
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 px-4 py-2.5 min-h-[44px] rounded-xl hover:bg-[#f0f5ff] transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#f0f5ff] text-[#06c] flex items-center justify-center flex-shrink-0">
                                {item.icon}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-[#1d1d1f]">
                                  {item.label}
                                </div>
                                <div className="text-xs text-[#6e6e73]">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="border-t border-black/[0.06] pt-1">
              {directLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 min-h-[44px] text-sm font-semibold text-[#1d1d1f] rounded-xl hover:bg-[#f0f5ff] transition-colors"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
              </div>

              <div className="pt-3 px-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full text-center text-sm block py-3.5"
                >
                  เริ่มต้นใช้ AI
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
