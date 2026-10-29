import React from "react";

export function KeyNumbers() {
  return (
    <section id="key-numbers" className="py-24 sm:py-28 lg:py-36 bg-secondary text-white relative overflow-hidden">
      
      {/* Decorative scanline texture */}
      <div
        className="scanlines-texture pointer-events-none absolute inset-0 opacity-20 z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-shell mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Stat Grid: 3 cells joined by 1px hairline gaps inside 18px rounded container */}
        <div className="rounded-md bg-white/15 border border-white/20 overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-[1px] shadow-raised mb-10">
          
          {/* Stat 1: 15 steps in the checklist */}
          <div className="bg-secondary p-8 sm:p-10 flex flex-col justify-between hover:bg-[#12171f] transition-colors">
            <div className="stat-number text-white text-[56px] font-extrabold tracking-tightest leading-none mb-6">
              15
            </div>
            <div className="pt-5 border-t border-white/10">
              <p className="text-[17px] font-bold text-white">
                15 steps in the checklist.
              </p>
            </div>
          </div>

          {/* Stat 2: 4 records to keep before anything goes wrong */}
          <div className="bg-secondary p-8 sm:p-10 flex flex-col justify-between hover:bg-[#12171f] transition-colors">
            <div className="stat-number text-white text-[56px] font-extrabold tracking-tightest leading-none mb-6">
              4
            </div>
            <div className="pt-5 border-t border-white/10">
              <p className="text-[17px] font-bold text-white">
                4 records to keep before anything goes wrong.
              </p>
            </div>
          </div>

          {/* Stat 3 (HOT CELL): 1 rule: if it is not in writing, it did not happen */}
          <div className="bg-secondary p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-b from-secondary to-[#0b1f18] border-l md:border-l-0 border-primary-bright/20">
            <div className="stat-number text-primary-bright text-[56px] font-extrabold tracking-tightest leading-none mb-6">
              1
            </div>
            <div className="pt-5 border-t border-primary-bright/20">
              <p className="text-[17px] font-extrabold text-primary-bright">
                1 rule: if it is not in writing, it did not happen.
              </p>
            </div>
          </div>

        </div>

        {/* Dark Callout Banner strictly from content.txt */}
        <div className="bg-white/10 border border-white/15 rounded-md p-8 sm:p-10 backdrop-blur-sm">
          <p className="text-[20px] sm:text-[24px] font-extrabold text-white tracking-tightest leading-snug">
            1 rule: if it is not in writing, it did not happen.
          </p>
        </div>

      </div>
    </section>
  );
}
