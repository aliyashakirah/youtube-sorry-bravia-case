"use client";

import React from "react";
import Link from "next/link";
import { CheckSquare, ArrowUpRight } from "lucide-react";

export function Header() {
  const navLinks = [
    { label: "The 15 steps", href: "#checklist" },
    { label: "Key numbers", href: "#key-numbers" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/92 backdrop-blur-md border-b border-outline h-[72px] transition-colors">
      <div className="max-w-shell mx-auto h-full px-4 sm:px-8 lg:px-10 flex items-center justify-between gap-3">
        
        {/* Logo Left: Mark plus ink wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-full"
        >
          <div className="w-8 h-8 rounded-[10px] bg-primary flex items-center justify-center text-white shadow-sm shrink-0">
            <CheckSquare className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="font-extrabold text-[17px] sm:text-[19px] tracking-tightest text-on-surface-strong leading-none whitespace-nowrap">
            CLAIM READY
          </span>
        </Link>

        {/* Center: Hidden on small screens, visible on md+ */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-on-surface hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-2 py-1 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Download Button (always fits cleanly on phones) */}
        <div className="flex items-center shrink-0">
          <a
            href="#call-to-action"
            className="inline-flex items-center gap-1.5 bg-secondary hover:bg-primary text-white text-[13px] sm:text-[13.5px] font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap"
          >
            <span>Download</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

      </div>
    </header>
  );
}
