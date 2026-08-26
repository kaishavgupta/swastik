// Type declarations for future backend integration compatibility

export interface Product {
  id: string;
  name: string;
  category: string;
  grade?: string;
  description: string;
  longDescription?: string;
  specifications?: {
    label: string;
    value: string;
  }[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  location?: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content?: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  initials: string;
}

export interface Client {
  id: string;
  name: string;
}

export interface QualityStep {
  id: string;
  title: string;
  description: string;
}

// Navigation links
export const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Projects', path: '/projects' },
  { name: 'Quality', path: '/quality' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

// Product Data
export const products: Product[] = [
  {
    id: 'concrete-grades',
    name: 'M10 – M60 Concrete',
    category: 'Concrete Grades',
    grade: 'M10 – M60',
    description: 'Comprehensive range of concrete grades tailored for varying structural requirements from standard lean concrete to high-performance foundations.',
    longDescription: 'Our standard grade concrete is batched using computerized plants to ensure precise water-cement ratio and grade performance. Used in foundations, beams, columns, and slabs.',
    specifications: [
      { label: 'Grade Range', value: 'M10 to M60' },
      { label: 'Standard Compliance', value: 'IS 456 / IS 10262' },
      { label: 'Application Type', value: 'Structural and Non-structural' },
    ]
  },
  {
    id: 'scc',
    name: 'Self Compacting Concrete (SCC)',
    category: 'Specialized Concrete',
    grade: 'M40+',
    description: 'Highly flowable, non-segregating concrete that can spread into place, fill formwork, and encapsulate reinforcements without mechanical consolidation.',
    longDescription: 'Saves labor, improves surface finishes, and easily flows through dense reinforcement. Ideal for congested reinforcing sections and complex geometries.',
    specifications: [
      { label: 'Flowability (Slump Flow)', value: '650 mm to 800 mm' },
      { label: 'Grade Range', value: 'M40 and above' },
      { label: 'Key Benefit', value: 'Zero compaction required, superior finish' }
    ]
  },
  {
    id: 'high-strength',
    name: 'High Strength Concrete',
    category: 'High Performance',
    grade: 'M30 – M45',
    description: 'Engineered for high rise structures, heavy load foundations, and infrastructure projects requiring superior compressive strength and durability.',
    longDescription: 'Formulated with high-quality silica fume, micro-silica, or fly ash to increase density, reduce permeability, and achieve high early/ultimate strengths.',
    specifications: [
      { label: 'Compressive Strength', value: '30 MPa to 45+ MPa' },
      { label: 'Additives', value: 'Micro-silica / Superplasticizers' },
      { label: 'Recommended Use', value: 'High-rise columns, bridges, dams' }
    ]
  },
  {
    id: 'waterproof',
    name: 'Waterproof Concrete',
    category: 'Specialized Concrete',
    description: 'Specially designed to resist water penetration under hydrostatic pressure, perfect for basements, water tanks, and sewage treatment plants.',
    longDescription: 'Contains specialized crystalline waterproofing admixtures that react with moisture to form insoluble crystals, permanently sealing capillary tracts and cracks.',
    specifications: [
      { label: 'Water Permeability', value: 'Extremely Low (DIN 1048 compliant)' },
      { label: 'Admixtures', value: 'Crystalline/Hydrophobic pore blockers' },
      { label: 'Applications', value: 'Basements, Swimming Pools, Water Reservoirs' }
    ]
  },
  {
    id: 'frc',
    name: 'Fiber Reinforced Concrete (FRC)',
    category: 'Specialized Concrete',
    description: 'Improved durability, crack resistance, and impact toughness achieved through uniform distribution of synthetic or steel fibers.',
    longDescription: 'Significantly reduces plastic shrinkage cracking and increases post-crack load capacity. Widely used in industrial flooring, pavements, and shotcrete.',
    specifications: [
      { label: 'Fiber Types', value: 'Micro/Macro Synthetic, Steel Fibers' },
      { label: 'Flexural Strength', value: 'Enhanced post-crack toughness' },
      { label: 'Primary Use', value: 'Industrial slabs, parking lots, overlays' }
    ]
  }
];

// Project Data
export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'High-Rise Residential Complex',
    category: 'High-Rise',
    location: 'Lucknow, UP',
    description: 'Supplied high-strength concrete and self-compacting concrete for critical columns and shear walls.'
  },
  {
    id: 'proj-2',
    name: 'Four-Lane Expressway Stretch',
    category: 'Roads',
    location: 'Lucknow Outskirts, UP',
    description: 'Supplied high-volume durable pavement concrete (PQC) for a major highway expansion.'
  },
  {
    id: 'proj-3',
    name: 'Metro Corridor Bridge Columns',
    category: 'Bridges',
    location: 'Lucknow Metro, UP',
    description: 'Delivered high-strength concrete with micro-silica for heavy-load pier castings.'
  },
  {
    id: 'proj-4',
    name: 'Premium Commercial Hub',
    category: 'Commercial',
    location: 'Hazratganj, Lucknow',
    description: 'Continuous heavy pour of foundation concrete under controlled thermal monitoring.'
  },
  {
    id: 'proj-5',
    name: 'Water Treatment Plant Tanks',
    category: 'Infrastructure',
    location: 'Gomti Nagar, Lucknow',
    description: 'Supplied certified waterproof concrete to prevent leakage and guarantee durability.'
  },
  {
    id: 'proj-6',
    name: 'Industrial Warehouse Slab',
    category: 'Industrial',
    location: 'Amausi Industrial Area, Lucknow',
    description: 'Large-scale Fiber Reinforced Concrete floor with high abrasion resistance.'
  }
];

// Timeline / Legacy Data
export const legacyTimeline = [
  {
    year: '2009',
    title: 'Company Founded',
    description: 'Swastik Mixtures was established in Lucknow with a vision to modernize construction practices.'
  },
  {
    year: 'Early Mover',
    title: 'Pioneering Concrete',
    description: 'One of the first 4 RMC plants in Lucknow, introducing advanced concrete technology to the region.'
  },
  {
    year: 'Culture Builder',
    title: 'Market Education',
    description: 'Pioneered the transition from site-mixed concrete to automated, high-quality ready mix concrete.'
  },
  {
    year: 'Today',
    title: '18+ Years Legacy',
    description: 'Delivering exceptional strength, engineering expertise, and concreting trust across Uttar Pradesh.'
  }
];

// Quality Process Data
export const qualitySteps: QualityStep[] = [
  { id: '1', title: 'Raw Material Checks', description: 'Rigorous testing of cement, aggregates, sand, and water at entry source.' },
  { id: '2', title: 'Mix Design Control', description: 'Advanced computerized batching controlled to exact recipe requirements.' },
  { id: '3', title: 'Concrete Testing', description: 'Regular sampling and temperature checks during hydration and mix stages.' },
  { id: '4', title: 'Slump Testing', description: 'Ensuring consistency, flowability, and workability properties on-site.' },
  { id: '5', title: 'Strength Testing', description: 'Compression testing of cubes at 7 and 28 days in our quality control lab.' },
  { id: '6', title: 'Batch Consistency', description: 'Continuous automatic calibration checks on batching sensors.' },
  { id: '7', title: 'Quality Monitoring', description: 'Post-pour surveys and performance audit reports.' },
  { id: '8', title: 'Site Support', description: 'Dedicated technical staff on-site to assist with pumping and placing.' }
];

// Blog Posts Data
export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Rise of Ready Mix Concrete in Modern Indian Architecture',
    excerpt: 'Explore why automated RMC is replacing site-mixed concrete in rapidly growing tier-2 cities like Lucknow.',
    category: 'RMC',
    date: 'August 15, 2026',
    readTime: '5 min read',
    content: 'Ready Mix Concrete (RMC) has transformed the landscape of Indian construction over the past two decades. In Lucknow, the transition has been driven by the need for speed, consistency, and strength. Automated batching plants ensure that key ingredients—cement, water, fine aggregates, coarse aggregates, and admixtures—are mixed in precise proportions. This eliminates human error, reduces site waste, and accelerates execution timelines, which is essential for massive infrastructure and high-rise developments.'
  },
  {
    id: 'blog-2',
    title: 'Understanding Self-Compacting Concrete (SCC) for Congested Reinforcement',
    excerpt: 'How self-compacting concrete flows around complex rebar layouts without segregation or mechanical vibration.',
    category: 'Technology',
    date: 'July 28, 2026',
    readTime: '4 min read',
    content: 'Congested reinforcement is a common challenge in modern structures designed for seismic resistance. Vibrating standard concrete in these situations can lead to honeycombing or segregation. Self-Compacting Concrete (SCC) is engineered to flow like fluid and fill every gap, embedding reinforcement seamlessly without requiring external compaction. This blog covers the chemistry of superplasticizers and viscosity-modifying agents that make this possible.'
  },
  {
    id: 'blog-3',
    title: 'Essential Quality Control Parameters for Concrete in High-Rise Projects',
    excerpt: 'A deep-dive into slump consistency, cube strength testing, and temperature control during hot weather concreting.',
    category: 'Concrete',
    date: 'June 10, 2026',
    readTime: '6 min read',
    content: 'Building tall requires materials that perform reliably under high stresses. Concrete quality control is a continuous cycle that starts with checking raw materials (cement grade, aggregate grading, water purity) and ends with testing cured cubes. We look at standard protocols like slump tests, rebound hammer tests, and cube crushing tests that guarantee building integrity.'
  }
];

// Leadership Data
export const leadershipMembers: LeadershipMember[] = [
  { id: 'l-1', name: 'Uma Shankar Mittal', role: 'Founding Member', initials: 'UM' },
  { id: 'l-2', name: 'Anand Singhal', role: 'Founding Member', initials: 'AS' },
  { id: 'l-3', name: 'Neeraj Mittal', role: 'Director', initials: 'NM' },
  { id: 'l-4', name: 'Nikhil Mittal', role: 'Director', initials: 'KM' }
];

// Client Data placeholders
export const clients: Client[] = [
  { id: 'c-1', name: 'PWD Lucknow' },
  { id: 'c-2', name: 'RERA Approved Projects' },
  { id: 'c-3', name: 'NBCC India' },
  { id: 'c-4', name: 'LDA (Lucknow Development Authority)' },
  { id: 'c-5', name: 'IRCON International' },
  { id: 'c-6', name: 'HAL (Hindustan Aeronautics Limited)' },
  { id: 'c-7', name: 'MRC Construction' },
  { id: 'c-8', name: 'JAYPEE Group' }
];
