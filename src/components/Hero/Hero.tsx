'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './Hero.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

useEffect(() => {
  const title = titleRef.current;
  const container = containerRef.current;
  if (!title || !container) return;

  const chars = title.textContent?.split('') || [];
  title.innerHTML = chars
    .map((char) => `<span class="${styles.char}">${char}</span>`)
    .join('');

  const cards = gsap.utils.toArray<HTMLElement>(`.${styles.card}`);

  const handleMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;

    gsap.to(cards, {
      x,
      y,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.05,
    });
  };

  container.addEventListener('mousemove', handleMouseMove);

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.from(`.${styles.char}`, {
      y: 40,
      opacity: 0,
      stagger: 0.05,
      ease: 'power3.out',
    })
      .from(
        `.${styles.subtitle}`,
        {
          y: 20,
          opacity: 0,
          ease: 'power3.out',
        },
        '-=0.3'
      )
      .from(
        `.${styles.card}`,
        {
          y: 30,
          opacity: 0,
          scale: 0.95,
          stagger: 0.12,
          ease: 'power3.out',
        },
        '-=0.3'
      );
  }, container);

  return () => {
    container.removeEventListener('mousemove', handleMouseMove);
    ctx.revert();
  };
}, []);

  return (
    <section ref={containerRef} className={styles.hero}>
      <h1 ref={titleRef} className={styles.title}>
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
