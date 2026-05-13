"use client";

import React from "react";
import HeroContent from "@/components/HeroContent";

const HeroTwo = () => {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden" id="about-me">
      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute lg:-top-[360px] -top-[620px] left-0 w-full h-full lg:object-cover object-cover z-[1] rotate-180"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* dark overlay so text is readable over video */}
      <div className="absolute inset-0 z-[2]" />

      {/* content sits above video + overlay */}
      <div className="relative z-[3] flex flex-col h-full w-full">
        <HeroContent />
      </div>
    </div>
  );
};

export default HeroTwo;