"use client";

import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("./StarBG"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-20" aria-hidden="true" />,
});

export default StarsCanvas;
