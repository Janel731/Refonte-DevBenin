import React, { useState, useRef, useEffect } from "react";
import { AfricaMap } from "@/components/shadcnmaps/maps/africa";
import { FlipWords } from "@/components/ui/flip-words";
import { ShimmerButton } from "@/components/ui/shimmer-button";
 

import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";
import { useMapContext } from "../shadcnmaps/map-context";
import { MapControls } from "../shadcnmaps/map-controls";

function AutoZoomBenin() {
  const { setZoomState } = useMapContext();

  useEffect(() => {
    // Zoom initial (scale=3, centré sur le Bénin)
    setZoomState({
      scale: 3,
      translateX: -220,
      translateY: -280,
    });
  }, [setZoomState]);

  return null;
}

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

  const markers = [
    {
      id: "marker-1",
      x: 332,
      y: 369,
      content: (
        <g>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500">
            <animate
              attributeName="r"
              values="8;24"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500" />
        </g>
      ),
      label: "marker-1",
    },
    {
      id: "marker-3",
      x: 329,
      y: 465,
      content: (
        <g>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500">
            <animate
              attributeName="r"
              values="8;24"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500" />
        </g>
      ),
      label: "marker-3",
    },
    {
      id: "marker-4",
      x: 286,
      y: 430,
      content: (
        <g>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500">
            <animate
              attributeName="r"
              values="8;24"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500" />
        </g>
      ),
      label: "marker-4",
    },
    {
      id: "marker-5",
      x: 251,
      y: 362,
      content: (
        <g>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500">
            <animate
              attributeName="r"
              values="8;24"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500" />
        </g>
      ),
      label: "marker-5",
    },
    {
      id: "marker-6",
      x: 218,
      y: 436,
      content: (
        <g>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500">
            <animate
              attributeName="r"
              values="8;24"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500" />
        </g>
      ),
      label: "marker-6",
    },
    {
      id: "marker-7",
      x: 452,
      y: 357,
      content: (
        <g>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500">
            <animate
              attributeName="r"
              values="8;24"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500" />
        </g>
      ),
      label: "marker-7",
    },
    {
      id: "marker-8",
      x: 467,
      y: 477,
      content: (
        <g>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500">
            <animate
              attributeName="r"
              values="8;24"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500" />
        </g>
      ),
      label: "marker-8",
    },
    {
      id: "marker-9",
      x: 527,
      y: 347,
      content: (
        <g>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500">
            <animate
              attributeName="r"
              values="8;24"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500" />
        </g>
      ),
      label: "marker-9",
    },
    {
      id: "marker-10",
      x: 348,
      y: 313,
      content: (
        <g>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500">
            <animate
              attributeName="r"
              values="8;24"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500" />
        </g>
      ),
      label: "marker-10",
    },
    {
      id: "marker-11",
      x: 231,
      y: 312,
      content: (
        <g>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500">
            <animate
              attributeName="r"
              values="8;24"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500" />
        </g>
      ),
      label: "marker-11",
    },
    {
      id: "marker-12",
      x: 143,
      y: 319,
      content: (
        <g>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500">
            <animate
              attributeName="r"
              values="8;24"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={0} cy={0} r={8} className="fill-emerald-500" />
        </g>
      ),
      label: "marker-12",
    },
  ];

  const regionsOverrides = [
    {
      id: "BJ",
      className: "benin-flag-gradient",
    },
  ];

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
            Construisons l'avenir{" "}
            <span className="block sm:inline">Tech du Bénin</span> ensemble
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground">
            Rejoignez la plus grande communauté de développeurs du Bénin.{" "}
            <br className="hidden sm:block" />
            <FlipWords words={["Apprenez", "Partagez"]} />
            vos connaissances et collaborez sur des projets open source
            innovants.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <ShimmerButton>Mon espace</ShimmerButton>
            <ShimmerButton>Voir les projets</ShimmerButton>
          </div>
        </div>

        {/* Carte - Responsive */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]">
            <AfricaMap
              markers={markers}
              enableZoom={true}
              regions={regionsOverrides}
            >
              <AutoZoomBenin />
              <MapControls position="bottom-right" />
              {/* Définition du dégradé */}
              <defs>
                <linearGradient
                  id="benin-flag"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#008751" /> {/* Vert */}
                  <stop offset="50%" stopColor="#FCD116" /> {/* Jaune */}
                  <stop offset="100%" stopColor="#E8112D" /> {/* Rouge */}
                </linearGradient>

                <linearGradient
                  id="benin-flag-vertical"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#008751" />
                  <stop offset="50%" stopColor="#FCD116" />
                  <stop offset="100%" stopColor="#E8112D" />
                </linearGradient>
              </defs>
            </AfricaMap>
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
