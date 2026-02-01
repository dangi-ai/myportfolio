import type { SkillCategory, Experience, Project, BlogPost, NavItem, SocialLink } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/dangi-ai', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sushil-dangi', icon: 'Linkedin' },
  { name: 'Email', url: 'mailto:sushil.dangi@email.com', icon: 'Mail' },
];

export const personalInfo = {
  name: 'Sushil Dangi',
  title: 'Senior Software Engineer',
  subtitle: 'Backend Engineer & System Architect',
  tagline: 'Building scalable, high-performance enterprise applications with 10+ years of hands-on experience',
  location: 'India',
  email: 'sushil.dangi@email.com',
  github: 'https://github.com/dangi-ai',
  linkedin: 'https://linkedin.com/in/sushil-dangi',
  education: {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'National Institute of Technology (NIT), Raipur',
    year: 2017,
  },
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend & Frameworks',
    icon: 'Server',
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Spring Boot', level: 92 },
      { name: 'REST APIs', level: 95 },
      { name: 'Microservices', level: 88 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
    ],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 92 },
      { name: 'MongoDB', level: 75 },
      { name: 'Redis', level: 85 },
      { name: 'Elasticsearch', level: 70 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Azure', level: 75 },
      { name: 'Google Cloud', level: 70 },
      { name: 'Linux', level: 88 },
      { name: 'Docker', level: 82 },
      { name: 'Kubernetes', level: 75 },
      { name: 'CI/CD', level: 85 },
    ],
  },
  {
    title: 'Architecture & Concepts',
    icon: 'Layers',
    skills: [
      { name: 'System Design', level: 90 },
      { name: 'Performance Optimization', level: 92 },
      { name: 'Caching Strategies', level: 88 },
      { name: 'Security', level: 85 },
      { name: 'SSO & Authentication', level: 82 },
      { name: 'Event-Driven Architecture', level: 80 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Software Engineer',
    period: '2021 - Present',
    description: [
      'Lead backend architecture decisions for enterprise-grade applications serving millions of users',
      'Designed and implemented scalable microservices architecture reducing system latency by 40%',
      'Mentored junior engineers and established coding standards across the engineering team',
      'Optimized database queries and caching strategies resulting in 60% performance improvement',
    ],
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS', 'Kubernetes'],
  },
  {
    id: 'exp-2',
    role: 'Software Engineer',
    period: '2018 - 2021',
    description: [
      'Developed RESTful APIs and microservices for high-traffic financial applications',
      'Implemented SSO and authentication systems ensuring enterprise-grade security',
      'Built automated CI/CD pipelines reducing deployment time by 70%',
      'Collaborated with cross-functional teams to deliver critical features on tight deadlines',
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'MongoDB', 'Docker', 'Jenkins'],
  },
  {
    id: 'exp-3',
    role: 'Associate Software Engineer',
    period: '2017 - 2018',
    description: [
      'Started career building backend services for e-commerce platforms',
      'Gained hands-on experience with full software development lifecycle',
      'Contributed to database design and API development',
      'Learned industry best practices for code quality and testing',
    ],
    technologies: ['Java', 'Spring', 'MySQL', 'Git', 'Maven'],
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Enterprise Payment Gateway',
    description: 'A high-performance payment processing system handling millions of transactions daily with 99.99% uptime.',
    problemStatement: 'Legacy payment system was experiencing frequent downtime during peak hours and lacked scalability.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS', 'Kafka'],
    impact: 'Reduced payment processing time by 50%, achieved 99.99% uptime, and scaled to handle 10x transaction volume.',
    githubUrl: 'https://github.com/dangi-ai',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Real-time Analytics Platform',
    description: 'Distributed analytics platform processing and visualizing real-time business metrics.',
    problemStatement: 'Business needed real-time insights but existing batch processing caused delays of several hours.',
    techStack: ['Java', 'Apache Kafka', 'Elasticsearch', 'Kibana', 'Docker', 'Kubernetes'],
    impact: 'Enabled real-time decision making with sub-second data latency and reduced infrastructure costs by 35%.',
    githubUrl: 'https://github.com/dangi-ai',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Microservices Framework',
    description: 'Internal framework accelerating microservices development with built-in observability and resilience patterns.',
    problemStatement: 'Teams were spending too much time on boilerplate code and service infrastructure.',
    techStack: ['Java', 'Spring Boot', 'Resilience4j', 'Micrometer', 'Prometheus', 'Grafana'],
    impact: 'Reduced microservice development time by 60% and improved system reliability across all services.',
    githubUrl: 'https://github.com/dangi-ai',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'Identity & Access Management',
    description: 'Centralized authentication and authorization system supporting SSO across multiple enterprise applications.',
    problemStatement: 'Multiple applications had inconsistent authentication, leading to security vulnerabilities and poor user experience.',
    techStack: ['Java', 'Spring Security', 'OAuth 2.0', 'OpenID Connect', 'LDAP', 'Redis'],
    impact: 'Unified authentication across 20+ applications, improved security posture, and reduced login friction by 80%.',
    githubUrl: 'https://github.com/dangi-ai',
    featured: false,
  },
  {
    id: 'proj-5',
    title: 'API Gateway Solution',
    description: 'High-performance API gateway with rate limiting, caching, and request transformation capabilities.',
    problemStatement: 'External APIs were being overloaded and lacked proper rate limiting and monitoring.',
    techStack: ['Java', 'Spring Cloud Gateway', 'Redis', 'Prometheus', 'Grafana', 'Docker'],
    impact: 'Protected backend services from overload, reduced response times by 45%, and provided comprehensive API analytics.',
    githubUrl: 'https://github.com/dangi-ai',
    featured: false,
  },
  {
    id: 'proj-6',
    title: 'Distributed Caching Layer',
    description: 'Multi-tier caching solution improving application performance and reducing database load.',
    problemStatement: 'Database was becoming a bottleneck under high load, causing application slowdowns.',
    techStack: ['Redis', 'Caffeine', 'Java', 'Spring Boot', 'Kubernetes'],
    impact: 'Reduced database load by 70%, improved API response times by 65%, and saved significant infrastructure costs.',
    githubUrl: 'https://github.com/dangi-ai',
    featured: false,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Designing Scalable Microservices: Lessons from 10 Years in Production',
    excerpt: 'Key architectural patterns and anti-patterns learned from building and maintaining microservices at scale.',
    date: '2024-01-15',
    readTime: '12 min read',
    tags: ['Microservices', 'System Design', 'Architecture'],
    slug: 'designing-scalable-microservices',
  },
  {
    id: 'blog-2',
    title: 'Performance Optimization: From Database Queries to Caching Strategies',
    excerpt: 'A comprehensive guide to identifying and fixing performance bottlenecks in backend systems.',
    date: '2024-01-08',
    readTime: '10 min read',
    tags: ['Performance', 'Optimization', 'Caching', 'Databases'],
    slug: 'performance-optimization-guide',
  },
  {
    id: 'blog-3',
    title: 'Building Resilient Systems with Circuit Breakers and Bulkheads',
    excerpt: 'How to implement fault tolerance patterns that keep your services running during failures.',
    date: '2023-12-20',
    readTime: '8 min read',
    tags: ['Resilience', 'Circuit Breaker', 'Fault Tolerance'],
    slug: 'building-resilient-systems',
  },
  {
    id: 'blog-4',
    title: 'Event-Driven Architecture: When to Use It and When to Avoid It',
    excerpt: 'Practical insights on implementing event-driven systems and common pitfalls to avoid.',
    date: '2023-12-10',
    readTime: '11 min read',
    tags: ['Event-Driven', 'Architecture', 'Kafka'],
    slug: 'event-driven-architecture',
  },
  {
    id: 'blog-5',
    title: 'Production Debugging: A Systematic Approach to Root Cause Analysis',
    excerpt: 'Techniques and tools for quickly identifying and resolving production issues.',
    date: '2023-11-28',
    readTime: '9 min read',
    tags: ['Debugging', 'Production', 'Observability'],
    slug: 'production-debugging',
  },
  {
    id: 'blog-6',
    title: 'Securing APIs: Authentication, Authorization, and Beyond',
    excerpt: 'Best practices for implementing robust security in modern API architectures.',
    date: '2023-11-15',
    readTime: '10 min read',
    tags: ['Security', 'API', 'OAuth', 'SSO'],
    slug: 'securing-apis',
  },
];

export const aboutContent = {
  intro: `I'm Sushil Dangi, a Senior Software Engineer with over 10 years of hands-on industry experience building scalable, high-performance enterprise applications. My journey in software engineering has been driven by a passion for clean architecture, performance optimization, and creating technology solutions that drive business value.`,
  journey: `Starting my career after completing my MCA from NIT Raipur in 2017, I've had the opportunity to work on diverse projects ranging from e-commerce platforms to financial systems. Over the years, I've evolved from writing my first production code to architecting systems that handle millions of transactions daily.`,
  philosophy: `I believe in the power of well-designed systems. My approach combines deep technical expertise with a pragmatic understanding of business needs. I'm passionate about writing clean, maintainable code and building systems that not only work today but can evolve gracefully over time.`,
  interests: `Beyond coding, I'm deeply interested in financial independence and long-term growth—both in technology investments and personal development. I enjoy sharing knowledge through technical writing and mentoring the next generation of engineers.`,
  approach: `My problem-solving methodology starts with understanding the core requirements, designing for scalability from day one, and continuously optimizing for performance. I specialize in backend development, system design, and transforming complex business requirements into elegant technical solutions.`,
};
