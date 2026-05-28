'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Maskdevbenin from '../assets/Maskdevbenin.svg';

export default function MaskReveal({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Le mask grandit jusqu’à sortir totalement de l’écran
  const maskSize = useTransform(
    scrollYProgress,
    [0, 1],
    ['140vmax', '800vmax']
  );

  // disparition finale du layer mask
  const opacity = useTransform(
    scrollYProgress,
    [0.7, 1],
    [1, 0]
  );

  return (
    <section ref={ref} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* CONTENU */}
        <div className="absolute inset-0 bg-black flex items-center justify-center text-white z-0">
          {children}
        </div>

        {/* MASK LAYER */}
        <motion.div
          style={{
            WebkitMaskImage: `url(${Maskdevbenin})`,
            maskImage: `url(${Maskdevbenin})`,

            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',

            WebkitMaskPosition: 'center',
            maskPosition: 'center',

            WebkitMaskSize: maskSize,
            maskSize: maskSize,

            opacity,
          }}
          className="absolute inset-0 bg-white z-10 pointer-events-none"
        />
      </div>
    </section>
  );
}