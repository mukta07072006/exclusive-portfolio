"use client";

import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref: any = useRef();

  // Reduce stars for performance - 2000 instead of 5000
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(2000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta/10;
      ref.current.rotation.y -= delta/15;
    }
  });

  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
        >
            <PointMaterial
                transparent
                color="$fff"
                size={0.003}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render on server to avoid hydration issues
  if (!isClient) {
    return <div className="w-full h-auto fixed inset-0 z-[20] pointer-events-none" />;
  }

  return (
    <div className="w-full h-auto fixed inset-0 z-[20] pointer-events-none">
        <Canvas
          className="pointer-events-none"
          camera={{position: [0, 0, 1]}}
          dpr={[1, 1.5]} // Limit pixel ratio for performance
          gl={{ powerPreference: "low-power" }}
        >
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        <Preload />
        </Canvas>
    </div>
  )
}

export default StarsCanvas;