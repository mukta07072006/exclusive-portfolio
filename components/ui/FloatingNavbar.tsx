"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
  iconSize = 20,
  iconMagnification = 32,
  disableMagnification = false,
  iconDistance = 120,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  disableMagnification?: boolean;
  iconDistance?: number;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const mouseX = useMotionValue(Infinity);
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll-based visibility
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={navRef}
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "flex gap-0 lg:mx-auto mx-10 max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 lg:px-10 px-12 py-5 rounded-lg items-center justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <DockNavItem
            key={`link=${idx}`}
            href={navItem.link}
            name={navItem.name}
    
            mouseX={mouseX}
            iconSize={iconSize}
            magnification={iconMagnification}
            disableMagnification={disableMagnification}
            distance={iconDistance}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

// ─────────────────────────────────────────
// DockNavItem: Individual nav item with magnification
// ─────────────────────────────────────────
const DockNavItem = ({
  href,
  name,
  mouseX,
  iconSize = 20,
  magnification = 32,
  disableMagnification = false,
  distance = 120,
}: {
  href: string;
  name: string;
  icon?: JSX.Element;
  mouseX: MotionValue<number>;
  iconSize?: number;
  magnification?: number;
  disableMagnification?: boolean;
  distance?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const defaultMouseX = useMotionValue(Infinity);
  const padding = Math.max(4, iconSize * 0.2);

  const distanceCalc = useTransform(
    mouseX ?? defaultMouseX,
    (val: number) => {
      const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      return val - bounds.x - bounds.width / 2;
    }
  );

  const targetSize = disableMagnification ? iconSize : magnification;

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [iconSize, targetSize, iconSize]
  );

  const scaleSize = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link href={href} className="relative items-center flex mx-3 px-4 lg:px-10">
      <motion.div
        ref={ref}
        style={{ 
          width: scaleSize,
          height: scaleSize, 
          padding,
          scale: disableMagnification ? 1 : undefined 
        }}
        className={cn(
          "flex cursor-pointer items-center justify-center rounded-lg",
          "text-neutral-600 dark:text-neutral-50",
          "hover:text-neutral-500 dark:hover:text-neutral-300",
          !disableMagnification && "transition-transform"
        )}
      >
        <span className="text-sm whitespace-nowrap flex !cursor-pointer">{name}</span>
      </motion.div>
    </Link>
  );
};