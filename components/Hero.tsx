import React from "react";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import { PillLabel } from "./PillLabel";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32 bg-white">
      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="mb-4">
              <PillLabel>CLAIM READY</PillLabel>
            </div>

            <h1 className="headline-display text-on-surface-strong tracking-tightest mb-5">
              CLAIM READY
            </h1>

            <p className="headline-md text-on-surface-strong font-extrabold tracking-tightest mb-6 leading-tight">
              A free checklist for anyone about to file a warranty claim.
            </p>

            <p className="body-lg text-on-surface-variant max-w-xl mb-8">
              A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#call-to-action"
                className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-strong text-white font-semibold text-[15px] px-7 py-3.5 rounded-full shadow-raised transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Download className="w-4 h-4" />
                <span>Download the checklist</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href="#checklist"
                className="inline-flex items-center justify-center gap-2 bg-white border border-outline hover:bg-surface-muted text-on-surface-strong font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>15 steps in the checklist.</span>
              </a>
            </div>

            {/* Key Numbers summary strictly from content.txt */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono tracking-monowide text-on-surface-muted uppercase">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                15 steps in the checklist.
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                4 records to keep before anything goes wrong.
              </span>
            </div>
          </div>

          {/* Right Column: Visual / Headline Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-secondary text-primary-bright rounded-[26px] p-8 sm:p-10 shadow-raised border border-white/10 overflow-hidden flex flex-col justify-between min-h-[360px]">
              
              {/* Scanline overlay texture */}
              <div
                className="scanlines-texture pointer-events-none absolute inset-0 opacity-30 z-0"
                aria-hidden="true"
              />

              {/* Card Top: Monospace Label from content.txt */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-monowide uppercase text-primary-bright font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary-bright" />
                  THE IDEA IN ONE LINE
                </span>
              </div>

              {/* Card Body: The Idea In One Line */}
              <div className="relative z-10 py-6 sm:py-8">
                <p className="font-mono text-[20px] sm:text-[22px] font-medium leading-[1.6] text-white tracking-tight">
                  A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
                </p>
              </div>

              {/* Card Bottom: The 1 Rule from content.txt */}
              <div className="relative z-10 bg-white/10 rounded-[12px] p-4 border border-white/15">
                <p className="font-mono text-[12px] text-primary-bright uppercase tracking-monowide">
                  1 rule: if it is not in writing, it did not happen.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
