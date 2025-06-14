"use client"
import useFetch from "@/hooks/use-fetch"
import { IArticleData } from "@/types/api/article"
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
import { Loader } from "@/components/molecules"

const DetailArticlePage = () => {
  const params = useParams()

  const url = useMemo(() => {
    if (!params?.path) return ""
    return Array.isArray(params.path) ? params.path.join("/") : params.path
  }, [params?.path])

  const {
    data: article,
    loading,
    error,
    refetch,
  } = useFetch<IArticleData>(`${BASE_URL.article}/${url}`)

  const breadcrumbLinks = useMemo(
    (): IBreadcrumbLink[] => [
      {
        title: "Home",
        url: "/",
      },
      {
        title: "Articles",
        url: "/articles",
      },
      {
        title: article?.title ?? <Loader />,
        url: "",
      },
    ],
    [article?.title]
  )

  const motionProps = useMemo(
    () => ({
      whileHover: {
        x: 5,
      },
    }),
    []
  )

  return (
    <Box className="flex flex-col gap-y-10">
      <Box className="flex flex-col items-start lg:flex-row gap-y-6 lg:gap-y-0 justify-between lg:items-center">
        <Link href={"/articles"} className="flex items-center gap-x-2">
          <ArrowLeft className="w-6 h-6" />
          <motion.div {...motionProps}>
            <Typography as="span" className="text-base">
              Back
            </Typography>
          </motion.div>
        </Link>

        <Breadcrumb breadcrumbLinks={breadcrumbLinks} />
      </Box>

      <DetailArticle
        article={article}
        loading={loading}
        error={error}
        refetch={refetch}
      />
    </Box>
  )
}

export default DetailArticlePage
