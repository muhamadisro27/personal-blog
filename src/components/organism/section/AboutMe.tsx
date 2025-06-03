import { Box } from "@/components/atoms/Box"
import { Divider } from "@/components/atoms/Divider"
import { Typography } from "@/components/atoms/Typography"
import React from "react"

const AboutMe = () => {
  return (
    <Box as="section">
      <Box className="flex flex-col space-y-4">
        <Typography as="h3" className="text-2xl font-medium">
          About
        </Typography>
        <Typography as="span" className="dark:text-neutral-400 text-md">
          Let&apos;s Get Personal
        </Typography>
      </Box>

      <Divider className="mb-10 mt-6 border-dashed" />

      <Box className="mt-4 flex flex-col space-y-4 dark:text-neutral-100 text-neutral-700">
        <Typography className="text-[1rem] leading-7 md:text-left md:leading-9 ">
          Hi, I&apos;m Muhamad Isro — a curious builder, lifelong learner, and
          Frontend Engineer based in Jakarta, Indonesia.
        </Typography>
        <Typography className="text-[1rem] leading-7 md:text-left md:leading-9">
          I craft clean, scalable, and impactful solutions through code —
          primarily using JavaScript and TypeScript, with a deep appreciation
          for modern frontend libraries and frameworks. Over the years, I’ve
          been on a continuous journey through the fast-paced world of web
          development, fueled by curiosity and a drive to create.
        </Typography>
        <Typography className="text-[1rem] leading-7 md:text-left md:leading-9">
          I&apos;m at my best when surrounded by challenges, innovation, and great
          teams. I thrive in collaborative spaces, where diverse ideas are
          welcomed and every voice matters — because I believe the best
          solutions are born from shared minds, not solo effort.
        </Typography>
        <Typography className="text-[1rem] leading-7 md:text-left md:leading-9">
          This blog is where I document what I learn — from technical insights
          and coding breakthroughs to reflections on growth as a developer.
          Whether you’re just getting started or have been in tech for a while,
          I hope you find something here that resonates, inspires, or simply
          sparks a new idea.
        </Typography>
        <Typography className="text-[1rem] leading-7 md:text-left md:leading-9">
          Thanks for stopping by — and welcome to my digital corner of the
          internet.
        </Typography>
      </Box>

      <Divider className="mb-10 mt-6" />
    </Box>
  )
}

export default AboutMe
