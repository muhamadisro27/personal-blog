"use client"
import LayoutBase from "@/components/molecules/LayoutBase"
import AboutMe from "@/components/organism/section/AboutMe"
import { motion } from "framer-motion"
import { onMountedAnimated } from "@/lib/motion"
import CareerPath from "@/components/organism/section/CareerPath"
import Skill from "@/components/organism/section/Skill"

const AboutPage = () => {
  return (
    <LayoutBase>
      <motion.div {...onMountedAnimated}>
        <AboutMe />

        <CareerPath />

        <Skill />
      </motion.div>
    </LayoutBase>
  )
}

export default AboutPage
