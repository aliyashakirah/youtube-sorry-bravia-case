"use client";

import React, { useState } from "react";
import { Download, Share2, Check, FileText } from "lucide-react";

export function CallToAction() {
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    const textContent = `CLAIM READY
A free checklist for anyone about to file a warranty claim.

WHO THIS IS FOR
Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
and who wants the claim to be decided on facts, in writing.

THE IDEA IN ONE LINE
A warranty claim is decided on records. Keep yours, and ask for theirs in writing.

BEFORE ANYTHING GOES WRONG
1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.
3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.
4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.

WHEN THE FAULT APPEARS
5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.
7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.

WHEN A TECHNICIAN VISITS
8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.
9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.
10. Take your own photos. Photograph the product and anything the technician points to, during the visit.

IF THE CLAIM IS REFUSED
11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.
12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.
13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.

KEY NUMBERS FOR THE PAGE
15 steps in the checklist.
4 records to keep before anything goes wrong.
1 rule: if it is not in writing, it did not happen.

CALL TO ACTION
Download the checklist and keep it with your invoices.
Share it with a friend who just bought something expensive.

FOOTER NOTE
Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
`;

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "content.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="call-to-action" className="py-20 sm:py-28 lg:py-36 bg-surface-muted border-t border-outline">
      <div className="max-w-shell-narrow mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* 2 Action Cards without the note heading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Download the checklist */}
          <div className="bg-white border border-outline rounded-md p-8 sm:p-9 shadow-card flex flex-col justify-between hover:shadow-raised hover:-translate-y-0.5 transition-all duration-200">
            <div>
              <div className="w-12 h-12 rounded-sm bg-primary-soft border border-primary-border text-primary-ink flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-on-surface-strong tracking-tightest mb-6">
                Download the checklist and keep it with your invoices.
              </h3>
            </div>

            <div className="pt-6 border-t border-outline">
              <button
                type="button"
                onClick={handleDownload}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-strong text-white font-semibold text-[14.5px] px-6 py-3.5 rounded-full shadow-raised transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Download className="w-4 h-4" />
                <span>Download the checklist</span>
              </button>
            </div>
          </div>

          {/* Card 2: Share it with a friend */}
          <div className="bg-white border border-outline rounded-md p-8 sm:p-9 shadow-card flex flex-col justify-between hover:shadow-raised hover:-translate-y-0.5 transition-all duration-200">
            <div>
              <div className="w-12 h-12 rounded-sm bg-primary-soft border border-primary-border text-primary-ink flex items-center justify-center mb-6">
                <Share2 className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-on-surface-strong tracking-tightest mb-6">
                Share it with a friend who just bought something expensive.
              </h3>
            </div>

            <div className="pt-6 border-t border-outline">
              <button
                type="button"
                onClick={handleShare}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-secondary hover:bg-primary text-white font-semibold text-[14.5px] px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-primary-bright stroke-[3]" />
                    <span>Share it with a friend who just bought something expensive.</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>Share it with a friend who just bought something expensive.</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
