import React, { useState } from "react"
import { Typography } from "../atoms/Typography"
import { Button } from "../atoms/Button"
import { Frown, RefreshCw } from "lucide-react"
import { TRefetchApi } from "@/types"
import { Box } from "@/components/atoms/Box"

type Props<T> = {
  message?: string
  loading?: boolean
  fn: T
}

const TryAgain = <T extends TRefetchApi>({
  message = "An error occurred while getting the source",
  loading,
  fn,
}: Props<T>) => {
  const [animateSpin, setAnimateSpin] = useState<boolean>(false)

  const handleButtonClick = () => {
    if (loading) return

    setAnimateSpin(true)
    setTimeout(() => {
      fn?.()
      setAnimateSpin(false)
    }, 400)
  }
  return (
    <>
      <Typography
        as="span"
        className="text-md md:text-md text-center"
      >
        {message}
      </Typography>
      <Box>
        <Frown className="w-10 h-10" />
      </Box>
      <Button variant="outline" onClick={handleButtonClick}>
        Try Again
        <RefreshCw
          data-active={animateSpin}
          className="data-[active=true]:animate-spin"
        />
      </Button>
    </>
  )
}

export default TryAgain
