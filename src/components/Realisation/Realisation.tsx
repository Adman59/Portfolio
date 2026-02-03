import React from 'react';
import styles from './Realisation.module.scss';

function Realisation() {
  return (
    <section className={styles.realisation}>
      <div className={styles.realisationWrapper}>
        <h2>Ceci est la section réalisation</h2>
      </div>
      <div className={styles.realisationGrid}>
        <div className={styles.realisationGridCol}>
          <div className={styles.marquee}></div>
          <div className={styles.marquee}></div>
          <div className={styles.marquee}></div>
          <div className={styles.marquee}></div>
          <div className={styles.marquee}></div>
        </div>
      </div>
    </section>
  );
}

export default Realisation;
