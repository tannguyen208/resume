import portrait from '../assets/avatar.png'
import resumeFull from '../assets/RESUME.pdf?url'
import resumeShort from '../assets/RESUME_short.pdf?url'

export const PERSON = {
  firstName: 'Tan',
  fullName: 'Nguyen Anh Tan',
  role: 'Senior Frontend Engineer',
  email: 'tanna48pct@gmail.com',
  github: 'https://github.com/tannguyen208',
  githubLabel: 'github.com/tannguyen208',
  location: 'Ho Chi Minh City, Vietnam',
  tagline:
    'a senior frontend engineer crafting fast, accessible, and unforgettable web products',
  portrait,
}

export interface ResumeFile {
  url: string
  filename: string
  label: string
  meta: string
}

export const RESUME: { full: ResumeFile; short: ResumeFile } = {
  full: {
    url: resumeFull,
    filename: 'Nguyen-Anh-Tan-Resume.pdf',
    label: 'Full résumé',
    meta: '3 pages · PDF',
  },
  short: {
    url: resumeShort,
    filename: 'Nguyen-Anh-Tan-Resume-Short.pdf',
    label: 'Short résumé',
    meta: '2 pages · PDF',
  },
}

export const NAV_LINKS = ['About', 'Expertise', 'Projects', 'Contact'] as const

export const ABOUT_TEXT =
  "I'm a senior frontend engineer with around eight years of experience building fast, accessible web applications in React, Vue, and Next.js — backed by hands-on backend work in Node.js and NestJS. I love turning complex ideas into polished products and, lately, weaving AI into the way teams design and ship. Let's build something great together!"

export interface Expertise {
  num: string
  name: string
  desc: string
}

export const EXPERTISE: Expertise[] = [
  {
    num: '01',
    name: 'Frontend Engineering',
    desc: 'Scalable UI architecture and reusable component libraries in React, TypeScript, Next.js, and Vue — responsive, accessible, and fast.',
  },
  {
    num: '02',
    name: 'Full-Stack Development',
    desc: 'REST APIs and backend services with Node.js, NestJS, and PostgreSQL, delivering features end to end across the stack.',
  },
  {
    num: '03',
    name: 'AI Integration & Automation',
    desc: 'LLM-powered features and chatbots, plus internal agent and automation frameworks of reusable skills and workflows using Claude and Codex.',
  },
  {
    num: '04',
    name: 'UI Architecture & Design Systems',
    desc: 'Design systems, component libraries, and polished interactions that keep products consistent and maintainable as they grow.',
  },
  {
    num: '05',
    name: 'Mobile Development',
    desc: 'Cross-platform mobile apps with React Native and Flutter, shipped alongside their web counterparts.',
  },
]

export interface Project {
  num: string
  category: string
  name: string
  desc: string
  tech: string[]
}

export const PROJECTS: Project[] = [
  {
    num: '01',
    category: 'Vitalify Asia',
    name: 'Colors',
    desc: 'Web app that generates family trees from PDF documents, built with Vue and NestJS.',
    tech: ['Vue', 'NestJS', 'TypeScript', 'AWS'],
  },
  {
    num: '02',
    category: 'Vitalify Asia',
    name: 'OMRON Pressure',
    desc: 'Full-stack blood-pressure measurement app, implementing core features end to end with ReactJS and PHP.',
    tech: ['ReactJS', 'PHP', 'AWS'],
  },
  {
    num: '03',
    category: 'FPT Software',
    name: 'NTA UniNext',
    desc: 'Tour-management platform; led the frontend team, integrating Navitime maps with ReactJS and Redux.',
    tech: ['ReactJS', 'Redux', 'Navitime API', 'MapScript'],
  },
  {
    num: '04',
    category: 'FPT Software',
    name: 'Dialog ORION',
    desc: 'Real-time worker-tracking web app rendering ~3,000 beacons per second with Angular and OpenLayers.',
    tech: ['Angular', 'RxJS', 'OpenLayers'],
  },
  {
    num: '05',
    category: 'Sutrix Solutions',
    name: 'Gomo',
    desc: 'Cross-platform mobile app for purchasing 5G SIMs with international connectivity, built in Flutter.',
    tech: ['Flutter', 'Dart', 'MobX', 'DIO'],
  },
  {
    num: '06',
    category: 'Softech',
    name: 'Ames English',
    desc: 'English-learning mobile app with guided practice across all four skills, built with React Native.',
    tech: ['React Native', 'Redux', 'Redux-Saga'],
  },
]
