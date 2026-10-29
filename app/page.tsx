import React from "react";
import { Ticker } from "@/components/Ticker";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhoThisIsFor } from "@/components/WhoThisIsFor";
import { ChecklistSection } from "@/components/ChecklistSection";
import { KeyNumbers } from "@/components/KeyNumbers";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-on-surface">
      {/* Marquee Ticker */}
      <Ticker />

      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Who This Is For Section */}
        <WhoThisIsFor />

        {/* 15 Steps Checklist (4 Phases) */}
        <ChecklistSection />

        {/* Key Numbers (Dark Section) */}
        <KeyNumbers />

        {/* Call To Action */}
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
