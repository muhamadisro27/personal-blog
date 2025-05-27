import { Box } from "@/components/atoms/Box"
import { Typography } from "@/components/atoms/Typography"

const DefaultImage = ({ text }: { text?: string }) => {
  return (
    <Box className="w-full h-full bg-primary/5 rounded-md flex flex-col items-center justify-center">
      <Typography as="span" className="m-auto text-center">
        {text ? text : "No image available"}
      </Typography>
    </Box>
  )
}

export default DefaultImage
