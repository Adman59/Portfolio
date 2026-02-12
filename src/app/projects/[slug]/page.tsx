import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

type Props = {
  params: { slug: string };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section className="container">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </section>
  );
}
