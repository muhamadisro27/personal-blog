"use client"
import { Fragment, ReactNode } from "react"
import Loading from "@/components/molecules/Loading"
import useMount from "@/hooks/use-mount"

const LoadingPage = ({ children }: { children: ReactNode }) => {
  const { loading } = useMount(2000)

  return <>{loading ? <Loading /> : <Fragment>{children}</Fragment>}</>
}

export default LoadingPage
