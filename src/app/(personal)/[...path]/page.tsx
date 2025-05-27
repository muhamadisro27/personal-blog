"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const Page = () => {
  const { path } = useParams()
  const [url, setUrl] = useState<string>("")

  useEffect(() => {
    if (path && typeof path != "string") {
      setUrl(path.join("/"))
    }
  }, [path])

  return <div>{url}</div>
}

export default Page
