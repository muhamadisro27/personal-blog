import { Box } from "@/components/atoms/Box"
import { Button } from "@/components/atoms/Button"
import { Typography } from "@/components/atoms/Typography"
import CareerCard from "@/components/molecules/CareerCard"
import { CAREERS, RESUME_URL } from "@/utils/constant"
import { ArrowDownToLine, BriefcaseBusiness } from "lucide-react"
import { MouseEvent } from "react"

const CareerPath = () => {
  const handleDownloadResume = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    window.open(RESUME_URL, "_blank")
  }

  const renderCareers = () => {
    return (
      <>
        {CAREERS.map((career) => (
          <CareerCard key={career.company.name} career={career} />
        ))}
      </>
    )
  }

  return (
    <Box as="section" className="mt-10 flex flex-col space-y-8">
      <Box className="flex flex-col lg:flex-row justify-start lg:justify-between space-y-3">
        <Box className="space-y-4">
          <Typography
            as="h3"
            className="flex gap-x-3 text-lg md:text-xl font-semibold items-center"
          >
            <BriefcaseBusiness />
            Career
          </Typography>
          <Typography
            as="p"
            className="text-base md:text-base dark:text-neutral-400"
          >
            My professional career journey
          </Typography>
        </Box>
        <Button
          className="lg:self-end dark:text-neutral-400 px-0 transition-all border-none bg-transparent hover:bg-transparent shadow-transparent flex flex-row items-center hover:dark:text-neutral-200 text-base lg:text-base"
          onClick={handleDownloadResume}
        >
          <ArrowDownToLine className="mr-1" />
          Download Resume
        </Button>
      </Box>

      <Box className="mt-5 grid gap-y-4 gap-x-0 lg:grid-cols-2 sm:gap-x-4">
        {renderCareers()}
      </Box>
    </Box>
  )
}

export default CareerPath
