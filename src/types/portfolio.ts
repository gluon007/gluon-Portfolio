import type { Block, Section, Study } from "../caseStudies"

export interface Project {
  id: string
  title: string
  type: string
  category: "Professional" | "Personal" | string
  description: string
}

export type Theme = "light" | "dark"

export interface NavigationItem {
  to: string
  title: string
}

export type { Block, Section, Study }

