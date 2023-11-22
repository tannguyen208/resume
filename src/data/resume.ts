import { effect, signal } from '@preact/signals'
import RESUME_DATA from '@assets/data/projects.json'

export type TOpenSourceProject = {
  name: string
  logo: string
  link: string
  sourceUrl: string
}

export type TIProject = {
  name: string
  desc: string
  logo: string
  duration: string
  position: string
  size: number
  responsibility: string[]
  technology: string
  tool: string
}

export type TExperience = {
  name: string
  time: string
  roles: string[]
}

type TResume = {
  openSources: TOpenSourceProject[]
  skills: string[]
  projects: TIProject[]
  experiences: TExperience[]
}

export const resume = signal<TResume>({
  openSources: [],
  projects: [],
  experiences: [],
  skills: [],
})

effect(() => {
  resume.value.openSources = RESUME_DATA.open_source ?? []
  resume.value.projects = RESUME_DATA.projects ?? []
  resume.value.experiences = RESUME_DATA.company_experiences ?? []
})

