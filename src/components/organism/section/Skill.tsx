import { Box } from "@/components/atoms/Box"
import { Typography } from "@/components/atoms/Typography"
import { CodeXml } from "lucide-react"
import React from "react"

const Skill = () => {
  return (
    <Box as="section" className="mt-10 flex flex-col space-y-4">
      <Typography
        as="h3"
        className="flex gap-x-3 text-lg md:text-xl font-semibold items-center"
      >
        <CodeXml />
        Skills
      </Typography>
      <Typography as="p" className="text-sm md:text-base dark:text-neutral-400">
        My coding skills
      </Typography>

      <Box className="mt-5 grid gap-y-4 gap-x-0 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-4">
        {/* {renderArticles()} */}
      </Box>
    </Box>
  )
}

export default Skill
