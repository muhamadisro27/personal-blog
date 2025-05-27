"use client"
import { ReactNode } from "react"
import { motion } from "framer-motion"

const AnimatePage = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
      }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatePage
