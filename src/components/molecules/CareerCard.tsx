import React from "react"
import { Card, CardHeader, CardTitle } from "../atoms/Card"
import { Box } from "../atoms/Box"
import Image from "next/image"
import { Typography } from "../atoms/Typography"
import { ICareerData } from "@/types"

type Props = {
  career: ICareerData
}

const CareerCard = ({ career }: Props) => {
  return (
    <Card className="transition-all border-0 duration-500 cursor-pointer bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-950 hover:scale-95 border-r border-t border-b min-h-[150px] flex flex-col justify-between">
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
            <Typography className="text-sm dark:text-neutral-400" as="span">
              {"~ "}
              {career.period}
            </Typography>
          </Box>
        </CardTitle>
      </CardHeader>
    </Card>
  )
}

export default CareerCard
