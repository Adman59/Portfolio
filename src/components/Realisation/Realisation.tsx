'use client';

import { useEffect, useRef } from 'react';
import styles from './Realisation.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Realisation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const columns = gsap.utils.toArray<HTMLElement>(
        `.${styles.realisationGridCol}`
      );

      columns.forEach((col) => {
        const marqueeInner = col.querySelector<HTMLElement>(
          `.${styles.marqueeInner}`
        );
        const marqueeContent = col.querySelector<HTMLElement>(
          `.${styles.marqueeContent}`
        );

        if (!marqueeInner || !marqueeContent) return;

        // 🎲 offset stable par colonne
        const offset = gsap.utils.random(-300, 300);

        // position de départ
        gsap.set(marqueeInner, {
          y: offset,
        });

        // parallax scroll
        gsap.to(marqueeInner, {
          y: offset - 200,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });

        const height = marqueeContent.scrollHeight / 2;

        // marquee infinie
        gsap.to(marqueeContent, {
          yPercent: -height,
          repeat: -1,
          duration: gsap.utils.random(15, 25),
          ease: 'none',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.realisation}>
      <div className={styles.realisationWrapper}>
        <h2>Réalisations</h2>
      </div>

      <div className={styles.realisationGrid}>
        {[0, 1, 2, 3, 4].map((col) => (
          <div key={col} className={styles.realisationGridCol}>
            <div className={styles.marquee}>
              <div className={styles.marqueeInner}>
                <div className={styles.marqueeContent}>
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className={styles.stack}>
                      <div className={styles.item} />
                      <div className={styles.item} />
                      <div className={styles.item} />
                      <div className={styles.item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Realisation;
