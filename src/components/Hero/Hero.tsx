'use client';

import styles from './Hero.module.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={`${styles.hero} container`}>
      <div className="grid">
        <div className={`${styles.heroContent}`}>
          <div className={styles.imageWrapper}>
            <Image
              src="/profil.png"
              alt="Photo d'Adrien"
              width={150}
              height={150}
            />
          </div>

          <div className={styles.content}>
            <h1>
              Salut, moi c'est <span>Adrien</span>, <br />
              créons ensemble des <span>expériences web</span> mémorables
            </h1>

            <p>
              Je conçois et développe des interfaces web captivantes et
              accessibles en alliant design, performance et expérience
              utilisateur, avec une solide expertise sur React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
