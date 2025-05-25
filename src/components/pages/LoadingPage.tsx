"use client"
import { Fragment, ReactNode, useEffect, useState } from "react"
import Loading from "@/components/molecules/Loading"

const LoadingPage = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return <>{isLoading ? <Loading /> : <Fragment>{children}</Fragment>}</>
}

export default LoadingPage
