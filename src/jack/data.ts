import imgColors from '../assets/prj-colors.svg'
import imgOmron from '../assets/prj-omron.jpg'
import imgNta from '../assets/prj-nta.png'
import imgDialog from '../assets/prj-dialog.png'
import imgGomo from '../assets/prj-gomo.webp'
import imgAmes from '../assets/prj-ames.png'
import portrait from '../assets/avatar.png'

export const PERSON = {
  firstName: 'Tan',
  fullName: 'Nguyen Anh Tan',
  role: 'Senior Frontend Engineer',
  email: 'tanna48pct@gmail.com',
  github: 'https://github.com/tannguyen208',
  githubLabel: 'github.com/tannguyen208',
  location: 'Ho Chi Minh City, Vietnam',
  tagline: 'a senior frontend engineer crafting fast, accessible, and unforgettable web products',
  portrait,
}

export const NAV_LINKS = ['About', 'Expertise', 'Projects', 'Contact'] as const

export const ABOUT_DECOR = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
}

export const ABOUT_TEXT =
  "I'm a senior frontend engineer with around eight years of experience building fast, accessible web applications in React, Vue, and Next.js — backed by hands-on backend work in Node.js and NestJS. I love turning complex ideas into polished products and, lately, weaving AI into the way teams design and ship. Let's build something great together!"

export const MARQUEE_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

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
  image: string
}

export const PROJECTS: Project[] = [
  {
    num: '01',
    category: 'Vitalify Asia',
    name: 'Colors',
    desc: 'Web app that generates family trees from PDF documents, built with Vue and NestJS.',
    image: imgColors,
  },
  {
    num: '02',
    category: 'Vitalify Asia',
    name: 'OMRON Pressure',
    desc: 'Full-stack blood-pressure measurement app, implementing core features end to end with ReactJS and PHP.',
    image: imgOmron,
  },
  {
    num: '03',
    category: 'FPT Software',
    name: 'NTA UniNext',
    desc: 'Tour-management platform; led the frontend team, integrating Navitime maps with ReactJS and Redux.',
    image: imgNta,
  },
  {
    num: '04',
    category: 'FPT Software',
    name: 'Dialog ORION',
    desc: 'Real-time worker-tracking web app rendering ~3,000 beacons per second with Angular and OpenLayers.',
    image: imgDialog,
  },
  {
    num: '05',
    category: 'Sutrix Solutions',
    name: 'Gomo',
    desc: 'Cross-platform mobile app for purchasing 5G SIMs with international connectivity, built in Flutter.',
    image: imgGomo,
  },
  {
    num: '06',
    category: 'Softech',
    name: 'Ames English',
    desc: 'English-learning mobile app with guided practice across all four skills, built with React Native.',
    image: imgAmes,
  },
]
