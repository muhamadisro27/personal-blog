import { Box } from "@/components/atoms/Box"
import { Typography } from "@/components/atoms/Typography"
import SkillBadge from "@/components/molecules/SkillBadge"
import { skills } from "@/utils/constant"
import { CodeXml } from "lucide-react"
// import {} from "geist/"

const Skill = () => {
  const renderSkills = () => {
    return skills.map((skill) => <SkillBadge key={skill.title} skill={skill} />)
  }

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

      <Box className="py-6 grid gap-y-4 gap-x-0 space-y-2 grid-cols-2 md:grid-cols-4 sm:gap-x-4">
        {renderSkills()}
      </Box>
    </Box>
  )
}

export default Skill
