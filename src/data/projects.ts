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
    slug: "Site web d'agence immobilière",
    description: 'Site pour une agence immobilière fictive.',
    image: '/projects/agency.jpg',
    year: '2025',
    stack: ['Vite', 'React', 'SCSS'],
  },
  {
    title: 'Dashboard SaaS',
    slug: 'dashboard-saas',
    description: 'Interface dashboard UI/UX orientée data.',
    image: '/projects/dashboard.jpg',
    year: '2024',
    stack: ['React', 'TypeScript'],
  },
];
