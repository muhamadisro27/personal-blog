"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"
import { onMountedAnimated } from "@/lib/motion"

const AnimatePage = ({ children }: { children: ReactNode }) => {
  return <motion.div {...onMountedAnimated}>{children}</motion.div>
}

export default AnimatePage
