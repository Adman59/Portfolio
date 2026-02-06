import React from 'react';
import styles from './About.module.scss';

export default function About() {
  return (
    <section className={`${styles.hero} container`}>
      <div>
        <p>
          Développeur front-end passionné, spécialisé dans la création
          d’interfaces modernes et intuitives, avec une solide expérience en
          React et une forte appétence pour l’UI/UX design. Curieux et
          rigoureux, je conçois des solutions performantes et centrées
          utilisateur, tout en collaborant efficacement avec des équipes
          multidisciplinaires. Habitué à travailler dans des environnements
          agiles, je suis à l’aise avec les outils modernes tels que Figma, VS
          Code, et Jira, et je cherche à contribuer à des projets innovants où
          mes compétences techniques et créatives peuvent faire la différence.
        </p>
      </div>
    </section>
  );
}
