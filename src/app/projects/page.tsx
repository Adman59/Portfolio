import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <section className="container">
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        accusamus doloribus recusandae! Minima ea culpa impedit debitis
        molestias dolores quaerat facere qui, quod reiciendis exercitationem,
        neque corporis? Doloribus, quibusdam iure?
      </p>
    </section>
  );
}
