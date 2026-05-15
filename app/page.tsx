"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import dynamic from "next/dynamic";

// Lazy load heavy components for faster initial load
const HeroTwo = dynamic(() => import("@/components/Hero2"), {
  ssr: true,
});

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: true,
  loading: () => <div className="py-20" />,
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: true,
  loading: () => <div className="py-20" />,
});

const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: true,
  loading: () => <div className="py-20" />,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: true,
  loading: () => <div className="py-20" />,
});

const Approach = dynamic(() => import("@/components/Approach"), {
  ssr: true,
  loading: () => <div className="py-20" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
  loading: () => <div className="py-20" />,
});

const Home = () => {
  return (
    <main>
      <HeroTwo />
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </div>
    </main>

  );
};

export default Home;