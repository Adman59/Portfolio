'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './Hero.module.scss';
import Image from 'next/image';
import imageTest from '../../../public/wallpaper2.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const container = containerRef.current;
    if (!title || !container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: '+=120%',
          scrub: 1,
          markers: true,
        },
      });

      tl.from(`.${styles.char}`, {
        y: 40,
        opacity: 0,
        stagger: 0.025,
        ease: 'power3.out',
      });
      tl.from(
        `.${styles.subtitle}`,
        {
          y: 20,
          opacity: 0,
          ease: 'power3.out',
        },
        '-=0.4'
      );
      tl.from(
        `.${styles.card}`,
        {
          x: 30,
          opacity: 0,
          scale: 0.9,
          stagger: 0.04,
          ease: 'power1.inOut',
        },
        '-=0.3'
      );
      tl.fromTo(
        `.${styles.image}`,
        {
          clipPath: 'inset(0 100% 0 100%)',
        },
        {
          clipPath: 'inset(0 0% 0 0%)',
          ease: 'expo.out',
          duration: 1,
        },
        '-=0.4'
      );
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.hero}>
      <h1 ref={titleRef} className={styles.title}>
        {'Creative Front Developer'.split('').map((char, i) => (
          <span key={i} className={styles.char}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>

      <p className={styles.subtitle}>UI / UX – Motion – Interaction</p>

      <div className={styles.cards}>
        <div className={styles.card}>Motion</div>
        <div className={styles.card}>UI</div>
        <div className={styles.card}>Code</div>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={imageTest} alt="" className={styles.image} />
      </div>
    </section>
  );
}
