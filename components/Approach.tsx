import React from "react";
import { motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Planning & Strategy"
          des="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-violet-950 rounded-3xl overflow-hidden"
            colors={[[196, 181, 253], [139, 92, 246]]}
          />
        </Card>
        <Card
          title="Development & Progress Update"
          des="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-violet-950 rounded-3xl overflow-hidden"
            colors={[[196, 181, 253], [167, 139, 250]]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Development & Launch"
          des="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-violet-950 rounded-3xl overflow-hidden"
            colors={[[221, 214, 254], [139, 92, 246]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  children,
  des,
}: {
  title: string;
  children?: React.ReactNode;
  des: string;
}) => {
  return (
    <motion.div
      // Subtle lift effect on hover (optional)
      // whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="border border-violet-500/20 flex items-center justify-center
       max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2e1065 0%, #1a103c 100%)",
      }}
    >
      {/* Particle Animation - Always visible */}
      <div className="absolute inset-0 z-0">
        {children}
      </div>

      {/* Corner decorative icons */}
      {/* <Icon className="absolute h-10 w-10 -top-3 -left-3 text-violet-300/30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 text-violet-300/30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 text-violet-300/30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 text-violet-300/30" /> */}

      {/* Content - Always visible, centered */}
      <div className="relative z-20 px-8 flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-white text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-sm text-violet-200/90 leading-relaxed max-w-[260px]">
          {des}
        </p>
      </div>
    </motion.div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};