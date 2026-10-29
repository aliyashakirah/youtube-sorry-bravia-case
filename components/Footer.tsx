import React from "react";
import Link from "next/link";
import { CheckSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-muted border-t border-outline py-16 px-5 sm:px-8 lg:px-10">
      <div className="max-w-shell mx-auto">
        
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-outline">
          
          {/* Column 1: CLAIM READY */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-7 h-7 rounded-[8px] bg-primary flex items-center justify-center text-white">
                <CheckSquare className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-[18px] tracking-tightest text-on-surface-strong">
                CLAIM READY
              </span>
            </Link>
            <p className="text-[14px] text-on-surface-variant max-w-sm leading-[1.65] mb-2">
              A free checklist for anyone about to file a warranty claim.
            </p>
            <p className="text-[14px] text-on-surface-variant max-w-sm leading-[1.65]">
              A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="md:col-span-4 flex flex-col">
            <span className="font-mono text-[11px] tracking-monowide uppercase text-on-surface-strong font-bold mb-4">
              CLAIM READY
            </span>
            <ul className="space-y-2.5 text-[13.5px] text-on-surface-variant">
              <li>
                <a href="#who-this-is-for" className="hover:text-primary transition-colors">
                  WHO THIS IS FOR
                </a>
              </li>
              <li>
                <a href="#checklist" className="hover:text-primary transition-colors">
                  The 15 steps
                </a>
              </li>
              <li>
                <a href="#key-numbers" className="hover:text-primary transition-colors">
                  Key numbers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: The 1 Rule */}
          <div className="md:col-span-3 flex flex-col">
            <p className="text-[14px] font-bold text-on-surface-strong leading-[1.65]">
              1 rule: if it is not in writing, it did not happen.
            </p>
          </div>

        </div>

        {/* Footer Note without the note heading */}
        <div className="pt-8 text-[13px] text-on-surface-muted leading-relaxed">
          <p>
            Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
          </p>
        </div>

      </div>
    </footer>
  );
}
