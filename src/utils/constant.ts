import { ICareerData, TAppModeMap, TProfileMap, TSidebarMenuMap } from "@/types"
import {
  BookOpenCheck,
  ChartLine,
  Cuboid,
  DollarSign,
  Footprints,
  Leaf,
  Newspaper,
  PersonStanding,
  Send,
  SquareUserRound,
} from "lucide-react"

export const prefix = "Hi, I'm " as const
export const suffixes = ["Muhamad Isro", "Frontend Engineer"]
export const PROFILES: TProfileMap = {
  personal: {
    title: "Personal",
    value: "personal",
    icon: SquareUserRound,
  },
  hobbies: {
    title: "Hobbies",
    value: "hobbies",
    icon: Footprints,
  },
  asset: {
    title: "Asset",
    value: "asset",
    icon: DollarSign,
  },
} as const

export const APP_MODE: TAppModeMap = {
  development: "development",
  production: "production",
}

// export const CURRENT_APP_MODE =
//   process.env.NEXT_PUBLIC_APP_MODE ?? APP_MODE.production

export const SIDEBAR_MENUS: TSidebarMenuMap = {
  personal: [
    {
      label: "About",
      url: "/about",
      icon: Leaf,
    },
    {
      label: "Articles",
      url: "/articles",
      icon: Newspaper,
    },
    {
      label: "Contact",
      url: "/contact",
      icon: Send,
    },
  ],
  asset: [
    {
      label: "Reksadana",
      url: "/reksadana",
      icon: ChartLine,
    },
    {
      label: "Gold",
      url: "/gold",
      icon: Cuboid,
    },
  ],
  hobbies: [
    {
      label: "Run Activities",
      url: "/run-activities",
      icon: PersonStanding,
    },
    {
      label: "Books",
      url: "/books",
      icon: BookOpenCheck,
    },
  ],
}

export const SERVICES = [
  {
    title: "Custom Web Application Development",
    description:
      "Building web applications from the ground up using scalable architecture and high-performance technologies.",
    image: "web-development.jpg",
  },
  {
    title: "Responsive & Mobile-First Design",
    description:
      "A mobile-first approach ensures accessibility and consistent layout from phones to large monitors.",
    image: "responsive-mobile.jpg",
  },
  {
    title: "Performance Optimization & SEO",
    description:
      "Improving website speed, loading times, and overall efficiency using server-side rendering, lazy loading, and code splitting.",
    image: "seo-optimization.jpg",
  },
  {
    title: "Admin Panels & Custom Dashboards",
    description:
      "Developing intuitive admin interfaces to manage data, users, and content efficiently.",
    image: "dashboard.jpg",
  },
] as const

export const CAREERS: ICareerData[] = [
  {
    job_title: "Frontend Engineer",
    company: {
      name: "Akar Inti Data",
      image: "akar-inti-data.jpeg",
      location: "Jakarta Selatan",
    },
    period: "7 Month",
    start_date: "Nov 2024",
    end_date: null,
  },
  {
    job_title: "Web Engineer",
    company: {
      name: "Transcosmos Indonesia",
      image: "tcid.jpeg",
      location: "Jakarta Selatan",
    },
    period: "2 Year 5 Month",
    start_date: "June 2022",
    end_date: "Oct 2024",
  },
  {
    job_title: "Fullstack Developer",
    company: {
      name: "Saka Access Fix",
      image: "saffix.jpeg",
      location: "Balikpapan",
    },
    period: "8 Month",
    start_date: "Nov 2021",
    end_date: "June 2022",
  },
]

export const RESUME_URL =
  "https://res.cloudinary.com/duaqvciju/image/upload/v1748951720/Muhamad_Isro_Sabanur_-_Frontend_-_CV_-_2025_page-0001_yvxwpj.jpg" as const
