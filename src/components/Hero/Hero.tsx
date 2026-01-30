'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.scss';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(`.${styles.title}`, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from(
        `.${styles.subtitle}`,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      .from(
        `.${styles.card}`,
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
        },
        '-=0.3'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.hero}>
      <h1 className={styles.title}>
        Creative Front Developer
      </h1>

      <p className={styles.subtitle}>
        UI / UX – Motion – Interaction
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>Motion</div>
        <div className={styles.card}>UI</div>
        <div className={styles.card}>Code</div>
      </div>
    </section>
  );
}
