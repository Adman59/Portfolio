import React from 'react';
import Image from 'next/image';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <section className="container-fluid section-black">
      <div className="container">
        <ul role="list" className={styles.list}>
          <li>
            <Image
              src="/profil.png"
              className={styles.swipeImage}
              alt="Photo d'Adrien"
              width={150}
              height={150}
            />
            <h3>Ceci est le titre de mon projet</h3>
          </li>
        </ul>
      </div>
    </section>
  );
}
