"use client"
import { Fragment, ReactNode } from "react"
import Loading from "@/components/molecules/Loading"
import { useSidebarStore } from "@/stores/useSidebarStore"

const LoadingPage = ({ children }: { children: ReactNode }) => {
  const { loading } = useSidebarStore()

  return <>{loading ? <Loading /> : <Fragment>{children}</Fragment>}</>
}

export default LoadingPage
