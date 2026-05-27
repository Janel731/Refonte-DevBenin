"use client";
import { useTransform, motion, useScroll } from "framer-motion";
import { BlurFade } from "@/components/ui/blur-fade";
import { FlipWords } from "@/components/ui/flip-words";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRef } from "react";
import VisionAnimation from "../../assets/visionAnimation.json";

const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop",
    color: "#5196fd",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.",
    src: "tree.jpg",
    link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60",
    color: "#8f89ff",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.",
    src: "water.jpg",
    link: "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop",
    color: "#13006c",
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description:
      "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "house.jpg",
    link: "https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60",
    color: "#ed649e",
  },
  {
    title: "Mark Rammers",
    description:
      "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.",
    src: "cactus.jpg",
    link: "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop",
    color: "#fd521a",
  },
];

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-black" ref={container}>
      {/* Hero section */}
     <section className="text-white min-h-[70vh] w-full bg-slate-950 py-12">
  <div className="container mx-auto px-4">
    {/* Titre principal */}
    <BlurFade delay={0.25} inView>
      <h1 className="text-5xl 2xl:text-7xl font-semibold text-center tracking-tight leading-[120%] mb-10">
        Vision
      </h1>
    </BlurFade>

    {/* Contenu principal */}
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
      
      {/* Texte */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
        <h2 className="text-2xl lg:text-3xl font-bold">
          Notre mission :{" "}
          <FlipWords words={["Connecter", "Former", "Propulser"]} />
        </h2>
        <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl">
          DevBénin est le catalyseur de l'écosystème tech béninois. Nous créons un environnement propice à l'innovation, à l'apprentissage et à la collaboration professionnelle.
        </p>
      </div>

      {/* Animation / Player */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] aspect-square">
          <Player
            className="w-full h-full object-contain"
            autoplay
            loop={true}
            src={VisionAnimation}
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Cartes en stacking */}
      <section className="text-white w-full bg-slate-950">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project.link}
              src={project.src}
              title={project.title}
              color={project.color}
              description={project.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>

      {/* Footer */}
      <footer className="group bg-slate-950">
        <h1 className="text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-linear-to-r from-neutral-400 to-neutral-800 bg-clip-text text-transparent transition-all ease-linear">
          ui-layout
        </h1>
        <div className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
      </footer>
    </main>
  );
}

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col lg:flex-row relative -top-[25%] 
          w-[90%] sm:w-[80%] md:w-[70%] 
          h-[60vh] sm:h-[70vh] md:h-[450px] 
          rounded-md lg:p-10 p-4 origin-top
          overflow-hidden`}
      >
        <h2 className="text-xl sm:text-2xl text-center font-semibold mb-4 lg:hidden">
          {title}
        </h2>

        <div
          className={`flex flex-col lg:flex-row h-full w-full gap-4 lg:gap-10`}
        >
          {/* Texte - en haut sur mobile, à gauche sur desktop */}
          <div
            className={`w-full lg:w-[40%] order-2 lg:order-1 flex flex-col justify-center`}
          >
            <h2 className="text-2xl text-center font-semibold hidden lg:block mb-4">
              {title}
            </h2>
            <p className="text-sm sm:text-base">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <a href="#" target="_blank" className="underline cursor-pointer">
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          {/* Image - en bas sur mobile, à droite sur desktop */}
          <div
            className={`relative w-full lg:w-[60%] order-1 lg:order-2 h-[40vh] lg:h-full rounded-lg overflow-hidden`}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img
                src={url}
                alt="image"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
