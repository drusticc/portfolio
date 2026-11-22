import data from './portfolio.json';

interface ProjectMedia {
  type: 'image' | 'video';
  src: string;
  alt: string;
  caption?: string;
}

interface Project {
  slug: string;
  title: string;
  label: string;
  short: string;
  stack: string[];
  overview: string;
  reflection: string;
  links: Array<{ label: string; url: string }>;
  media: ProjectMedia[];
}

const portfolio: Omit<typeof data, 'projects'> & { projects: Project[] } = data;

export default portfolio;
