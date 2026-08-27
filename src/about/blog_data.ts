export interface BlogPost {
  id: string;
  category: 'INDUSTRY INSIGHTS' | 'CONSTRUCTION TIPS' | 'RMC TECHNOLOGY' | 'PROJECTS' | 'COMPANY NEWS';
  title: string;
  description: string;
  date: string;
  image: string;
  featured?: boolean;
}

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'post-1',
    category: 'INDUSTRY INSIGHTS',
    title: 'Role of Ready Mix Concrete in Modern Construction',
    description: 'Explore how RMC ensures consistency, strength and speed in today\'s construction projects.',
    date: 'May 20, 2024',
    image: '/10_concrete_pouring_closeup.svg',
    featured: true
  },
  {
    id: 'post-2',
    category: 'RMC TECHNOLOGY',
    title: 'Inside Our RMC Plant: Process & Technology',
    description: 'A closer look at our advanced batching process, quality control and automated systems.',
    date: 'May 10, 2024',
    image: '/06_rmc_batching_plant.svg',
    featured: true
  },
  {
    id: 'post-3',
    category: 'CONSTRUCTION TIPS',
    title: 'Tips for Choosing the Right Concrete Mix',
    description: 'Understand mix grades, applications and important considerations for durable structures.',
    date: 'April 28, 2024',
    image: '/08_construction_site_worker.svg',
    featured: true
  },
  {
    id: 'post-4',
    category: 'PROJECTS',
    title: 'Project Spotlight: Building Stronger Infrastructure',
    description: 'Delivering high-performance concrete for critical bridge and transit corridors across UP.',
    date: 'April 15, 2024',
    image: '/bridges.svg'
  },
  {
    id: 'post-5',
    category: 'COMPANY NEWS',
    title: 'Expanding Our Fleet for Better Service',
    description: 'Addition of new high-capacity transit mixers to strengthen timely delivery to customer sites.',
    date: 'April 05, 2024',
    image: '/01_transit_mixer_fleet.svg'
  },
  {
    id: 'post-6',
    category: 'INDUSTRY INSIGHTS',
    title: 'Quality Concrete Begins with Quality Control',
    description: 'How rigorous laboratory testing of raw materials ensures long-term structural durability.',
    date: 'March 22, 2024',
    image: '/02_quality_control_lab.svg'
  },
  {
    id: 'post-7',
    category: 'RMC TECHNOLOGY',
    title: 'Concrete for Modern Infrastructure',
    description: 'Specialized high-performance concrete mixes engineered for heavy load and moisture exposure.',
    date: 'March 14, 2024',
    image: '/infrastructure-projects.svg'
  },
  {
    id: 'post-8',
    category: 'CONSTRUCTION TIPS',
    title: 'How Ready Mix Improves Construction Efficiency',
    description: 'Reducing labor overhead, material wastage and site congestion through off-site automated batching.',
    date: 'March 02, 2024',
    image: '/07_concrete_pouring_worker.svg'
  },
  {
    id: 'post-9',
    category: 'INDUSTRY INSIGHTS',
    title: 'Building Better with Consistent Concrete',
    description: 'Maintaining batch-to-batch uniformity across multi-story commercial and residential developments.',
    date: 'February 18, 2024',
    image: '/high-rise-buildings.svg'
  }
];
