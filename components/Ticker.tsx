"use client";

import React from "react";

const TICKER_ITEMS = [
  "CLAIM READY",
  "A free checklist for anyone about to file a warranty claim.",
  "A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
  "15 steps in the checklist.",
  "4 records to keep before anything goes wrong.",
  "1 rule: if it is not in writing, it did not happen.",
];

export function Ticker() {
  return (
    <aside
      aria-label="Checklist summary"
      className="bg-primary-soft border-b border-primary-border py-3 overflow-hidden select-none"
    >
      <div className="flex w-max motion-reduce:transform-none motion-reduce:overflow-x-auto animate-marquee hover:[animation-play-state:paused]">
        <div className="flex items-center shrink-0">
          {TICKER_ITEMS.map((item, idx) => (
            <span
              key={`ticker-1-${idx}`}
              className="inline-flex items-center text-primary-ink font-mono text-[10px] font-medium tracking-monowide uppercase mx-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0 opacity-70" />
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center shrink-0" aria-hidden="true">
          {TICKER_ITEMS.map((item, idx) => (
            <span
              key={`ticker-2-${idx}`}
              className="inline-flex items-center text-primary-ink font-mono text-[10px] font-medium tracking-monowide uppercase mx-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0 opacity-70" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
