import { Box } from "@/components/atoms/Box"
import { Button } from "@/components/atoms/Button"
import { Card, CardHeader, CardTitle } from "@/components/atoms/Card"
import { Typography } from "@/components/atoms/Typography"
import { CAREERS, RESUME_URL } from "@/utils/constant"
import { ArrowDownToLine, BriefcaseBusiness } from "lucide-react"
import Image from "next/image"
import { MouseEvent } from "react"

const CareerPath = () => {
  const handleDownloadResume = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    window.open(RESUME_URL, "_blank")
  }

  const renderCareers = () => {
    return (
      <>
        {CAREERS.map((career) => {
          return (
            <Card
              key={career.company.name}
              className="transition-all border-0 duration-500 cursor-pointer bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950 hover:scale-95 border-r border-t border-b min-h-[150px] flex flex-col justify-between"
            >
              <CardHeader className="p-0 h-full flex flex-row justify-start items-center overflow-hidden space-x-3 lg:space-x-8">
                <Box className="relative my-2 h-max">
                  <Box className="relative inverted-image border border-l-0 border-[#404040] rounded-r-full bg-background w-[100px] h-[110px]">
                    <Box className="absolute left-1/2 -translate-x-[50%] -translate-y-[50%] top-1/2 w-14 transition-all duration-500 h-14 bg-primary/5 border-0 rounded-full">
                      <Image
                        key={career.company.name}
                        src={`/images/careers/${career.company.image}`}
                        alt={career.company.name}
                        title={career.company.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                    </Box>
                  </Box>
                </Box>

                <CardTitle className="self-start pt-1 leading-6 space-y-2">
                  <Typography as="span" className="dark:text-neutral-200">
                    {career.job_title}
                  </Typography>
                  <Box className="space-x-2 line-clamp-1">
                    <Typography
                      className="text-sm pt-2 dark:text-neutral-400"
                      as="span"
                    >
                      {career.company.name}
                    </Typography>
                    <Typography
                      className="text-sm pt-2 dark:text-neutral-400"
                      as="span"
                    >
                      •
                    </Typography>
                    <Typography
                      className="text-sm pt-2 dark:text-neutral-400"
                      as="span"
                    >
                      {career.company.location}
                    </Typography>
                  </Box>

                  <Box className="space-x-2">
                    <Typography
                      className="text-sm pt-2 dark:text-neutral-400"
                      as="span"
                    >
                      {career.start_date}
                    </Typography>
                    <Typography
                      className="text-sm pt-2 dark:text-neutral-400"
                      as="span"
                    >
                      -
                    </Typography>
                    <Typography
                      className="text-sm pt-2 dark:text-neutral-400"
                      as="span"
                    >
                      {career.end_date != null ? career.end_date : "Present"}
                    </Typography>
                  </Box>
                  <Box className="space-x-2 pb-3">
                    <Typography
                      className="text-sm dark:text-neutral-400"
                      as="span"
                    >
                      {"~ "}
                      {career.period}
                    </Typography>
                  </Box>
                </CardTitle>
              </CardHeader>
            </Card>
          )
        })}
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
            className="text-md md:text-base dark:text-neutral-400"
          >
            My professional career journey
          </Typography>
        </Box>
        <Button
          className="lg:self-end dark:text-neutral-400 px-0 transition-all border-none bg-transparent hover:bg-transparent shadow-transparent flex flex-row items-center hover:dark:text-neutral-200 text-base lg:text-md"
          onClick={handleDownloadResume}
        >
          <ArrowDownToLine className="mr-1" />
          Download Resume
        </Button>
      </Box>

      <Box className="mt-5 grid gap-y-4 gap-x-0 md:grid-cols-2 sm:gap-x-4">
        {renderCareers()}
      </Box>
    </Box>
  )
}

export default CareerPath
