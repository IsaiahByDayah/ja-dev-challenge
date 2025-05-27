import type { Resource, ResourceCategory } from "../types"

export const MOCK_RESOURCE_CATEGORIES: ResourceCategory[] = [
  {
    id: "acquisition",
    name: "Acquisition",
  },
  {
    id: "communication",
    name: "Communication",
  },
  {
    id: "engineering",
    name: "Engineering",
  },
  {
    id: "education",
    name: "Education",
  },
  {
    id: "productivity",
    name: "Productivity",
  },
  {
    id: "training",
    name: "Training",
  },
  {
    id: "workplace",
    name: "Workplace",
  },
]

export const MOCK_RESOURCES: Resource[] = [
  {
    id: "a",
    categoryId: "acquisition",
    description:
      "Ignition Podcast: Innovation, Agility, Talent, Workplace, Culture, and more",
    imageSrc: "https://picsum.photos/seed/a/640/480",
  },
  {
    id: "b",
    categoryId: "communication",
    description: "Threat Briefing",
    imageSrc: "https://picsum.photos/seed/b/640/480",
  },
  {
    id: "c",
    categoryId: "engineering",
    description: "SSC Telework Portal",
    imageSrc: "https://picsum.photos/seed/c/640/480",
  },
  {
    id: "d",
    categoryId: "education",
    description: "AIR FORCE Virtual Education",
    imageSrc: "https://picsum.photos/seed/d/640/480",
  },
  {
    id: "e",
    categoryId: "productivity",
    description: "Guide to DigitalU",
    imageSrc: "https://picsum.photos/seed/e/640/480",
  },
  {
    id: "f",
    categoryId: "training",
    description: "How to Build a Collaborative Team Environment",
    imageSrc: "https://picsum.photos/seed/f/640/480",
  },
]
