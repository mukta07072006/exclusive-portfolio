"use client";

import { motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate"
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"
import { Highlighter } from "./ui/highlighter";
import { Button } from "./ui/MovingBorders";
import { RainbowButton } from "@/components/ui/rainbow-button"
import { redirect } from "next/navigation";
import Link from "next/link";





const CardInfo = [
  {
   id: 1,
    title: "2 Years Of Experience",
    disc: "Building production ready apps with React, Next.js, Node & TypeScript"
  },
  {
    id: 2,
    title: "20+ Projects",
    disc: "From MVPs to scalable platforms — shipped with clean architecture & tests"
  },
  {
    id: 3,
    title: "Full Stack",
    disc: "End-to-end development: UI/UX → API → DevOps → Monitoring"
  }
]

const HeroContent = () => {
  return (
    <div className="flex flex-col h-full">
    <div className="flex flex-col md:flex-row gap-3 items-center justify-center px-20 mt-40 w-full z-[0]">
      <motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`text-5xl lg:text-7xl lg:text-start text-center flex flex-col font-bold text-white`}
        
      >
        <motion.span
        className="text-3xl font-normal"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  onAnimationComplete={() => {
    // Force re-calculation if needed
    const event = new Event('resize')
    window.dispatchEvent(event)
  }}
>
  <Highlighter action="underline" color="violet">
    This is Moshud Muktadir,
  </Highlighter>
</motion.span>
        <span className="relative inline-block">
          
          
        </span>
        <span className="">
           <TextAnimate duration={0.7} animation="blurIn" as="h1">
      I transform ideas into seamless user experience
    </TextAnimate>
    <Link href={'/#projects'} className="relative z-[30]">
    <RainbowButton  variant={"outline"} size={'lg'}>Explore Works</RainbowButton>

    </Link>

    
    </span>
    
            
      </motion.h1>
      </motion.div>
      <motion.div className={'mt-5 lg:mx-0 mx-10'}>
        <Terminal>
  <TypingAnimation>npx install muktadir&apos;s-portfolio@latest --save</TypingAnimation>
  <AnimatedSpan>Checking Node.js runtime...</AnimatedSpan>
  <AnimatedSpan>Loading project portfolio...</AnimatedSpan>
  <AnimatedSpan>Optimizing assets & bundles...</AnimatedSpan>
  <AnimatedSpan>npm init</AnimatedSpan>
  
  <TypingAnimation>Success! Project initialization successful</TypingAnimation>
</Terminal>
      </motion.div>
    </div>
    

      <div className="flex flex-wrap h-full items-center justify-center gap-4 py-12 px-4 w-full z-[30]">
  {CardInfo.map((card) => (
    <Button
      key={card.id}
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        borderRadius: `calc(1.75rem * 0.96)`,
      }}
      className="flex-1 min-w-[280px] max-w-[350px] text-black dark:text-white border-neutral-200 dark:border-slate-800"
    >
      <div className="flex flex-col lg:flex-row lg:items-center p-4 lg:p-6 gap-3 w-full">
        <div className="flex-1">
          <h1 className="text-start text-xl md:text-2xl font-bold text-white">
            {card.title}
          </h1>
          <p className="text-start text-indigo-200 mt-2 font-medium">
            {card.disc}
          </p>
        </div>
      </div>
    </Button>
  ))}
</div>
      
      

    </div>
  );
};

export default HeroContent;