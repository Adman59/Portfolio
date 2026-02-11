'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './About.module.scss';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(`.${styles.word}`);

      gsap.to(words, {
        color: 'var(--color-black)',
        stagger: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const text =
    'Développeur front-end passionné, spécialisé dans la création d’interfaces modernes et intuitives, avec une solide expérience en React et une forte appétence pour l’UI/UX design. Curieux et rigoureux, je conçois des solutions performantes et centrées utilisateur, tout en collaborant efficacement avec des équipes multidisciplinaires. Habitué à travailler dans des environnements agiles, je suis à l’aise avec les outils modernes tels que Figma, VS Code, et Jira, et je cherche à contribuer à des projets innovants où mes compétences techniques et créatives peuvent faire la différence.';

  return (
    <section ref={containerRef} className={`${styles.hero} container`}>
      <div className={`grid`}>
        <p ref={textRef} className={styles.intro}>
          {text.split(' ').map((word, i) => (
            <span key={i} className={styles.word}>
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
