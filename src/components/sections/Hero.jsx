import React, { useState, useRef } from "react";
import { AfricaMap } from '@/components/shadcnmaps/maps/africa'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

const Hero = () => {
  const [count, setCount] = useState(0);

  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5;
  const speedY = 0.5;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();

    gridOffsetX.set((currentX + speedX) % 40);
    gridOffsetY.set((currentY + speedY) % 40);
  });

  const maskImage = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      black,
      transparent
    )
  `;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-black pt-16 md:pt-20 lg:pt-24"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Active Grid */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Glow Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[-20%] top-[-20%] h-[40%] w-[40%] rounded-full bg-orange-500/40 blur-[120px]" />

        <div className="absolute right-[10%] top-[-10%] h-[20%] w-[20%] rounded-full bg-purple-500/30 blur-[100px]" />

        <div className="absolute bottom-[-20%] left-[-10%] h-[40%] w-[40%] rounded-full bg-blue-500/40 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 md:px-8 gap-6 lg:gap-0 w-full max-w-7xl mx-auto">
        
        {/* Texte */}
        <div className="w-full lg:w-1/2 space-y-2 md:mt-70 lg:mt-0 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase leading-tight">
            Construisons l'avenir <span className="block sm:inline">Tech du Bénin</span> ensemble
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
            Rejoignez la plus grande communauté de développeurs du Bénin. <br className="hidden sm:block" />
            Apprenez, partagez vos connaissances et collaborez sur des projets open source innovants.
          </p>
        </div>

        {/* Carte - Responsive */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]">
            <AfricaMap />
          </div>
        </div>

      </div>
    </div>
  );
};

const GridPattern = ({ offsetX, offsetY }) => {
  return (
    <svg className="h-full w-full">
      <defs>
        <motion.pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-red-500"
          />
        </motion.pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};

export default Hero;