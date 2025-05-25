"use client"
import { motion } from "framer-motion"
import ContainerPage from "@/components/molecules/ContainerPage"
import Box from "@/components/atoms/Box/Box"
import { Typography } from "../atoms/Typography"

const Loading = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const dotVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const circleVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  }

  return (
    <ContainerPage>
      <Box className="text-center space-y-8">
        <motion.div variants={itemVariants}>
          <Box className="relative">
            <motion.div
              className="w-20 h-20 mx-auto rounded-full border-4 border-muted"
              variants={circleVariants}
              animate="animate"
            />
            <motion.div
              className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-4 border-transparent border-t-primary/90 animate-pulse backdrop-blur-lg"
              variants={circleVariants}
              animate="animate"
              style={{ animationDelay: "0.5s" }}
            />
            <Box className="absolute inset-0 flex items-center justify-center">
              <Box className="w-8 h-8 bg-primary/80 backdrop-blur-lg rounded-full animate-pulse" />
            </Box>
          </Box>
        </motion.div>

        {/* Loading Text */}
        <motion.div variants={itemVariants}>
          <Typography as="h2" className="text-3xl font-bold mb-2 animate-pulse backdrop-blur-lg">
            Loading
          </Typography>
          <div className="flex items-center justify-center space-x-1">
            <motion.div
              className="w-2 h-2 bg-primary/50 rounded-full"
              variants={dotVariants}
              animate="animate"
            />
            <motion.div
              className="w-2 h-2 bg-primary/50 rounded-full"
              variants={dotVariants}
              animate="animate"
              style={{ animationDelay: "0.2s" }}
            />
            <motion.div
              className="w-2 h-2 bg-primary/50 rounded-full"
              variants={dotVariants}
              animate="animate"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </motion.div>

        {/* Status Text */}
        <motion.div variants={itemVariants}>
          <p className="text-muted-foreground text-sm">
            Preparing your experience...
          </p>
        </motion.div>
      </Box>
    </ContainerPage>
  )
}

export default Loading
