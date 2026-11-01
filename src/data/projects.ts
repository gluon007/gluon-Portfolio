import type { NavigationItem, Project } from "../types/portfolio"

export const modules: string[] = [
  "LMS",
  "PMS",
  "HRMS Mobile",
  "Facility Management",
  "Travel Desk",
  "E-Office",
  "Alumni",
  "Grievance",
  "CRM",
  "My Admission",
  "My Payments",
  "Ramswaroop Experience",
]

export const projects: Project[] = [
  {
    id: "unif",
    title: "UNIF Ecosystem",
    type: "Product system",
    category: "Professional",
    description:
      "A connected family of university tools. One ecosystem, twelve connected modules.",
  },
  {
    id: "srmu",
    title: "SRMU Website",
    type: "Web experience",
    category: "Professional",
    description: "A clearer path through programs and campus life.",
  },
  {
    id: "sp-jain",
    title: "SP Jain CRM",
    type: "CRM / Applications",
    category: "Professional",
    description: "Complex admissions workflows made manageable.",
  },
  {
    id: "srdt",
    title: "SRDT Training Website",
    type: "Web design",
    category: "Professional",
    description: "A training experience built around clarity.",
  },
  {
    id: "expense",
    title: "Expense Management",
    type: "Personal concept",
    category: "Personal",
    description: "Exploring a calmer approach to everyday finances.",
  },
]

export const navigationItems: NavigationItem[] = [
  { to: "/", title: "Home" },
  { to: "/library", title: "Project Library" },
  { to: "/about", title: "About" },
  { to: "/resume", title: "Resume" },
  { to: "/contact", title: "Contact" },
]
