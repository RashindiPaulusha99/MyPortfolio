// Everything you'd want to edit lives here.

const base = import.meta.env.BASE_URL;
export const img = (name) => `${base}images/${name}`;

export const links = {
  github: 'https://github.com/RashindiPaulusha99',
  linkedin: 'https://www.linkedin.com/in/rashindi-wijesinghe-580a1a225/',
  email: 'rashindipaulusha837@gmail.com',
  cv: `${base}Rashindi-CV.pdf`, // TODO: add public/Rashindi-CV.pdf
};

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'What I do', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    title: 'Backend',
    icon: 'server',
    blurb: 'Reliable services and APIs, built to be readable and to last.',
    stack: ['Java', 'Spring Boot', 'Hibernate', 'Node.js'],
  },
  {
    title: 'Frontend',
    icon: 'browser',
    blurb: 'Calm, considered interfaces that feel good to use.',
    stack: ['React', 'Astro', 'Tailwind', 'Figma'],
  },
  {
    title: 'Data & Cloud',
    icon: 'cloud',
    blurb: 'Well-shaped data and the cloud plumbing that moves it.',
    stack: ['PostgreSQL', 'MySQL', 'MongoDB', 'AWS S3 · Lambda · SQS'],
  },
];

export const tech = [
  'Java', 'Spring Boot', 'Hibernate', 'Node.js', 'React', 'Astro',
  'Tailwind', 'Figma', 'PostgreSQL', 'MySQL', 'MongoDB', 'AWS',
];

// Screenshots go in public/images/ — a placeholder shows until the file exists.
export const projects = [
  {
    name: 'Apartner',
    type: 'Property management platform',
    description:
      'An LKR-based platform for managing apartments and residents, including SMS visitor passes with QR codes and OTP verification at the gate.',
    stack: 'Java · Spring Boot · React · PostgreSQL',
    image: 'apartner.jpg',
    alt: 'Apartner dashboard screenshot',
    url: '#', // TODO
  },
  {
    name: 'Livin',
    type: 'Matchmaking & dating platform',
    description:
      'My own product: a horoscope and porondam matching platform that helps people find compatible partners, built end to end from the data model to the UI.',
    stack: 'Java · Spring Boot · React · MySQL',
    image: 'livin.jpg',
    alt: 'Livin homepage screenshot',
    url: 'https://livin.lk',
  },
  {
    name: 'Aurelle',
    type: 'E-commerce store',
    description:
      'An online store for a clothing brand, with product browsing, a smooth cart and checkout flow, and a look that lets the collection speak for itself.',
    stack: 'React · Tailwind',
    image: 'aurelle.jpg',
    alt: 'Aurelle online store screenshot',
    url: '#', // TODO
  },
];
