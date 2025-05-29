import { Box } from "@/components/atoms/Box"
import { Typography } from "@/components/atoms/Typography"
import { cn } from "@/lib/utils"
import { HTMLProps } from "react"

type Props = {
  text?: string
  textClassName?: HTMLProps<typeof Box>["className"]
  boxClassName?: HTMLProps<typeof Typography>["className"]
}

const DefaultImage = ({
  text = "No image available",
  boxClassName,
  textClassName,
}: Props) => {
  return (
    <Box
      className={cn(
        "w-full h-full bg-primary/5 rounded-md flex flex-col items-center justify-center",
        boxClassName
      )}
    >
      <Typography as="span" className={cn("m-auto text-center", textClassName)}>
        {text}
      </Typography>
    </Box>
  )
}

export default DefaultImage
