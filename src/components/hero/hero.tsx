'use client';

import Image from 'next/image';
import './hero.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 300], [0, -40]);
  const statueY = useTransform(scrollY, [0, 300], [0, 60]);
  const gradientY = useTransform(scrollY, [0, 300], [0, 20]);

  return (
    <section className="hero">
      <p className="intro">Introducing</p>

      <motion.div className="title-wrap" style={{ y: textY }}>
        <h1 className="title outline">DEVSOC’26</h1>
        <h1 className="title solid">
          DEVS<span className="hollow">O</span>C’26
        </h1>
      </motion.div>

      <div className="ellipse ellipse-left"></div>
      <div className="ellipse ellipse-right"></div>

      <motion.div className="statue" style={{ y: statueY }}>
        <Image src="/png/statueDavid.png" alt="David" fill priority />
      </motion.div>

      <motion.div className="gradient-box" style={{ y: statueY }}>
        <Image src="/png/bg-gradient.png" alt="Gradient" fill />
      </motion.div>

      <motion.button className="cta" style={{ y: statueY }}>
        Register Now ↗
      </motion.button>
    </section>
  );
}
