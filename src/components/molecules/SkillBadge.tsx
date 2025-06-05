import { ISkillData } from "@/types"
import React from "react"
import { Box } from "@/components/atoms/Box"
import { Typography } from "@/components/atoms/Typography"

type Props = {
  skill: ISkillData
}

const SkillBadge = ({ skill }: Props) => {
  return (
    <Box className="px-4 flex flex-row space-x-4 p-2 max-w-32 lg:max-w-40 rounded-full justify-start items-center bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950">
      <Box className="w-5">
        <skill.image />
      </Box>
      <Typography as="span" className="text-sm">{skill.title}</Typography>
    </Box>
  )
}

export default SkillBadge
