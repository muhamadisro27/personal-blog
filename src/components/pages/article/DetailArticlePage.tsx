"use client"
import useFetch from "@/hooks/use-fetch"
import { IArticleDetail } from "@/types/api/article"
import { BASE_URL } from "@/utils/api"
import { useParams } from "next/navigation"
import { useMemo } from "react"
import { Box } from "@/components/atoms/Box"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Typography } from "@/components/atoms/Typography"
import { Breadcrumb } from "@/components/atoms/Breadcrumb"
import DetailArticle from "@/components/organism/section/DetailArticle"
import { motion } from "framer-motion"
import { IBreadcrumbLink } from "@/types"

const DetailArticlePage = () => {
  const params = useParams()

  const url = useMemo(() => {
    if (!params?.path) return ""
    return Array.isArray(params.path) ? params.path.join("/") : params.path
  }, [params])

  const { data: article } = useFetch<IArticleDetail>(
    `${BASE_URL.article}/${url}`
  )

  const breadcrumbLinks: IBreadcrumbLink[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Articles",
      url: "/artciles",
    },
    {
      title: article?.title,
      url: "",
    },
  ]

  return (
    <Box className="flex flex-col gap-y-10">
      <Box className="flex flex-row justify-between items-center">
        <Link href={"/"} className="flex gap-x-2">
          <ArrowLeft />
          <motion.div
            whileHover={{
              x: 5,
            }}
          >
            <Typography as="span">Back</Typography>
          </motion.div>
        </Link>

        <Breadcrumb breadcrumbLinks={breadcrumbLinks} />
      </Box>

      <DetailArticle article={article} />
    </Box>
  )
}

export default DetailArticlePage
