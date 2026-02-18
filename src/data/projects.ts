export type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  year: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: 'Kasa',
    slug: 'kasa',
    description: 'Site pour une agence immobilière fictive.',
    image: '/projects/wallpaper2.jpg',
    year: '2025',
    stack: ['Vite', 'React', 'SCSS'],
  },
  {
    title: 'Dashboard SaaS',
    slug: 'dashboard-saas',
    description: 'Interface dashboard UI/UX orientée data.',
    image: '/projects/cat.jpg',
    year: '2024',
    stack: ['React', 'TypeScript'],
  },
  {
    title: 'Test',
    slug: 'kasa-2',
    description: 'Site pour une agence immobilière fictive.',
    image: '/projects/cat2.jpeg',
    year: '2025',
    stack: ['Vite', 'React', 'SCSS'],
  },
  {
    title: 'Kasa',
    slug: 'kasa-3',
    description: 'Site pour une agence immobilière fictive.',
    image: '/projects/wallpaper2.jpg',
    year: '2025',
    stack: ['Vite', 'React', 'SCSS'],
  },
  {
    title: 'Dashboard SaaS',
    slug: 'dashboard-saas-2',
    description: 'Interface dashboard UI/UX orientée data.',
    image: '/projects/cat.jpg',
    year: '2024',
    stack: ['React', 'TypeScript'],
  },
  {
    title: 'Test',
    slug: 'kasa-4',
    description: 'Site pour une agence immobilière fictive.',
    image: '/projects/cat2.jpeg',
    year: '2025',
    stack: ['Vite', 'React', 'SCSS'],
  },
];
