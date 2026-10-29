"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { PillLabel } from "./PillLabel";

interface StepItem {
  id: number;
  lead: string;
  body: string;
}

interface SectionData {
  title: string;
  steps: StepItem[];
}

const SECTIONS: SectionData[] = [
  {
    title: "BEFORE ANYTHING GOES WRONG",
    steps: [
      {
        id: 1,
        lead: "1. Keep the invoice.",
        body: "Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.",
      },
      {
        id: 2,
        lead: "2. Register the product.",
        body: "Many brands ask you to register on their website or app; some add extra warranty when you do.",
      },
      {
        id: 3,
        lead: "3. Read the warranty card once.",
        body: "Note how long it lasts, what it covers, and what it excludes.",
      },
      {
        id: 4,
        lead: "4. Record the condition.",
        body: "Take a few dated photos of the product once it is installed or unboxed.",
      },
    ],
  },
  {
    title: "WHEN THE FAULT APPEARS",
    steps: [
      {
        id: 5,
        lead: "5. Record the fault.",
        body: "Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.",
      },
      {
        id: 6,
        lead: "6. Raise the complaint in writing.",
        body: "Use email, the brand's website or its app, not only a phone call, so there is a record.",
      },
      {
        id: 7,
        lead: "7. Note every reference number.",
        body: "Write down the complaint or ticket number, the date and the name of anyone you speak to.",
      },
    ],
  },
  {
    title: "WHEN A TECHNICIAN VISITS",
    steps: [
      {
        id: 8,
        lead: "8. Ask for the job sheet.",
        body: "Ask the technician for a copy of the visit report or job sheet before they leave.",
      },
      {
        id: 9,
        lead: "9. Ask what was tested.",
        body: "Ask which test or instrument was used to reach the diagnosis.",
      },
      {
        id: 10,
        lead: "10. Take your own photos.",
        body: "Photograph the product and anything the technician points to, during the visit.",
      },
    ],
  },
  {
    title: "IF THE CLAIM IS REFUSED",
    steps: [
      {
        id: 11,
        lead: "11. Ask for the reason in writing.",
        body: "Request a written explanation that names the exact cause and the evidence for it.",
      },
      {
        id: 12,
        lead: "12. Ask for the technical report.",
        body: "If the refusal rests on an inspection, ask for that inspection report.",
      },
      {
        id: 13,
        lead: "13. Escalate inside the company.",
        body: "Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.",
      },
      {
        id: 14,
        lead: "14. Keep it factual.",
        body: "Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.",
      },
      {
        id: 15,
        lead: "15. Know your consumer helpline.",
        body: "Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.",
      },
    ],
  },
];

export function ChecklistSection() {
  const [completed, setCompleted] = useState<Record<number, boolean>>({});

  const toggle = (id: number) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="checklist" className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header Stack strictly from content.txt */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <PillLabel className="mb-4">15 steps in the checklist.</PillLabel>
          <h2 className="headline-lg text-on-surface-strong mb-5">
            15 steps in the checklist.
          </h2>
          <p className="body-lg text-on-surface-variant max-w-2xl text-pretty">
            A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
          </p>
        </div>

        {/* The 4 Sections from content.txt */}
        <div className="space-y-16 sm:space-y-20">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              
              {/* Section Title */}
              <div className="mb-6 sm:mb-8">
                <span className="font-mono text-[11px] font-medium tracking-monowide uppercase text-primary-ink bg-primary-soft border border-primary-border px-3.5 py-1.5 rounded-full inline-block mb-3">
                  {section.title}
                </span>
                <h3 className="headline-md text-on-surface-strong tracking-tightest">
                  {section.title}
                </h3>
              </div>

              {/* Cards Grid: hairline divider layout inside 18px rounded box */}
              <div className="bg-outline border border-outline rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-[1px] shadow-card">
                {section.steps.map((step) => {
                  const isDone = !!completed[step.id];
                  return (
                    <div
                      key={step.id}
                      onClick={() => toggle(step.id)}
                      className={`p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 cursor-pointer select-none group ${
                        isDone
                          ? "bg-primary-soft/40 hover:bg-primary-soft/60"
                          : "bg-white hover:bg-surface-2"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h4
                            className={`text-[19px] sm:text-[20px] font-extrabold tracking-tightest leading-snug transition-colors ${
                              isDone ? "text-primary-ink line-through decoration-primary/40" : "text-on-surface-strong"
                            }`}
                          >
                            {step.lead}
                          </h4>

                          <button
                            type="button"
                            aria-label={step.lead}
                            className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center transition-all ${
                              isDone
                                ? "bg-primary text-white"
                                : "border-2 border-outline-strong bg-white group-hover:border-primary text-transparent"
                            }`}
                          >
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </button>
                        </div>

                        <p
                          className={`text-[15.5px] leading-[1.72] transition-colors ${
                            isDone ? "text-primary-ink/80" : "text-on-surface"
                          }`}
                        >
                          {step.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
