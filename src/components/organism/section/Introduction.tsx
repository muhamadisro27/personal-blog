import { Box } from "@/components/atoms/Box"
import { Typography } from "@/components/atoms/Typography"
import { Typewriter } from "@/components/molecules/Typewriter"

const Introduction = () => {
  return (
    <Box as="section">
      <Typewriter />

      <Box className="mt-4">
        <Typography className="text-[1rem] leading-7 md:text-left md:leading-9">
          Enthusiastic and experienced Frontend Engineer with deep expertise in
          TypeScript and modern web technologies. Committed to building clean,
          scalable, and user-friendly interfaces, with a strong emphasis on
          teamwork and high-quality delivery.
        </Typography>
      </Box>
    </Box>
  )
}

export default Introduction
