'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './Hero.module.scss';
import Image from 'next/image';
import imageTest from '../../../public/wallpaper2.jpg'

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

useEffect(() => {
  const title = titleRef.current;
  const container = containerRef.current;
  if (!title || !container) return;

  const cards = gsap.utils.toArray<HTMLElement>(`.${styles.card}`);

  const handleMouseMove = (e: MouseEvent) => {
    if (!container) return;

    const rect = container.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;

    gsap.to(cards, {
      x: x * 20,
      y: y * 20,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.04,
    });
  };

  container.addEventListener('mousemove', handleMouseMove);

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=120%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: true,
      },
    });

    tl.from(`.${styles.char}`, {
      y: 60,
      opacity: 0,
      stagger: 0.04,
      ease: 'power3.out',
    })
      .from(
        `.${styles.subtitle}`,
        {
          y: 30,
          opacity: 0,
          ease: 'power3.out',
        },
        '-=0.3'
      )
      .from(
        `.${styles.card}`,
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
          stagger: 0.12,
          ease: 'power3.out',
        },
        '-=0.3'
      );

    tl.fromTo(
      `.${styles.image}`,
      {
        clipPath: 'inset(0 0 100% 0)',
      },
      {
        clipPath: 'inset(0 0 0% 0)',
        ease: 'power3.out',
        duration: 1,
      },
      '-=0.4'
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
        {'Creative Front Developer'.split('').map((char, i) => (
          <span key={i} className={styles.char}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>

      <p className={styles.subtitle}>
        UI / UX – Motion – Interaction
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>Motion</div>
        <div className={styles.card}>UI</div>
        <div className={styles.card}>Code</div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={imageTest}
          alt=""
          className={styles.image}
        />
      </div>
    </section>
  );
}
