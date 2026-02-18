'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Projects.module.scss';
import Icon from '../Icon/Icon';
import Link from 'next/link';
import { projects } from '@/data/projects';
import gsap from 'gsap';

export default function Projects() {
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    const move = (e: MouseEvent) => {
      gsap.to(preview, {
        x: e.clientX - 150,
        y: e.clientY - 100,
        duration: 0.6,
        ease: 'expo.out',
      });
    };

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  const handleEnter = (image: string) => {
    setActiveImage(image);

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  const handleLeave = () => {
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  return (
    <section className="container-fluid section-black">
      <div className="container">
        <ul role="list" className={styles.list}>
          {projects.map((project) => (
            <li
              key={project.slug}
              onMouseEnter={() => handleEnter(project.image)}
              onMouseLeave={handleLeave}
              className={styles.item}
            >
              <Link
                href={`/projects/${project.slug}`}
                className={styles.overlayLink}
              >
                <h3>{project.title}</h3>
                <Icon name="arrow_outward" label="Ouvrir le projet" size={48} />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating preview */}
      <div ref={previewRef} className={styles.preview}>
        {activeImage && (
          <Image
            src={activeImage}
            alt=""
            fill
            className={styles.previewImage}
          />
        )}
      </div>
    </section>
  );
}
