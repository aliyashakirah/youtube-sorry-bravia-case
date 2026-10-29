import React from "react";
import { PillLabel } from "./PillLabel";

export function WhoThisIsFor() {
  return (
    <section id="who-this-is-for" className="py-20 sm:py-24 lg:py-32 bg-surface-muted border-y border-outline">
      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header Stack: Shows the full sentence once */}
        <div className="flex flex-col items-start mb-10 sm:mb-12">
          <PillLabel className="mb-4">WHO THIS IS FOR</PillLabel>
          <h2 className="headline-lg text-on-surface-strong mb-5">
            WHO THIS IS FOR
          </h2>
          <p className="body-lg text-on-surface-variant max-w-2xl text-pretty">
            Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
          </p>
        </div>

        {/* Callout Card strictly from content.txt */}
        <div className="bg-primary-soft border border-primary-border rounded-md p-7 sm:p-8 text-primary-ink">
          <p className="font-mono text-[11px] tracking-monowide uppercase font-bold text-primary mb-2">
            THE IDEA IN ONE LINE
          </p>
          <p className="font-extrabold text-[20px] sm:text-[24px] text-primary-ink tracking-tightest leading-snug">
            A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
          </p>
        </div>

      </div>
    </section>
  );
}
