'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.scss';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!titleRef.current) return;

      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      tl.from(
        `.${styles.box}`,
        {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.2'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.hero}>
      <h1 ref={titleRef} className={styles.title}>
        Creative Front Developer
      </h1>

      <div className={styles.boxes}>
        <div className={`${styles.box} ${styles.a}`}>a</div>
        <div className={`${styles.box} ${styles.b}`}>b</div>
        <div className={`${styles.box} ${styles.c}`}>c</div>
      </div>
    </section>
  );
}
