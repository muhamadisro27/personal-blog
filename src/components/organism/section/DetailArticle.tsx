import { Badge } from "@/components/atoms/Badge"
import { Box } from "@/components/atoms/Box"
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/atoms/Card"
import { Typography } from "@/components/atoms/Typography"
import TryAgain from "@/components/molecules/TryAgain"
import { Skeleton } from "@/components/atoms/Skeleton"
import { TRefetchApi } from "@/types"
import { IArticleData } from "@/types/api/article"
import Image from "next/image"
import Link from "next/link"
import DefaultImage from "@/components/atoms/Image/DefaultImage"
import { HtmlRenderer } from "@/components/molecules"
import { motion } from "framer-motion"

type Props = {
  article: IArticleData | undefined
  loading: boolean
  error: string | null
  refetch: TRefetchApi
}

const DetailArticle = ({ article, loading, error, refetch }: Props) => {
  const animateDetailArticle = {
    initial: {
      opacity: 0,
      filter: "blur(1px)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      filter: "blur(1px)",
    },
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  }

  if (loading) {
    return (
      <Box className="w-full">
        <Card className="h-[calc(100svh-150px)] rounded-lg p-4">
          <CardHeader className="flex flex-col p-4 gap-y-4">
            <Box className="w-full h-auto flex items-center flex-row gap-x-4">
              <Skeleton className="w-14 h-14 md:w-20 md:h-20 rounded-full" />
              <Box className="flex flex-col gap-y-3">
                <Skeleton className="w-32 h-4 rounded-xl" />
                <Skeleton className="w-16 h-4 rounded-xl" />
              </Box>
            </Box>
            <CardTitle className="flex flex-col gap-y-2">
              <Skeleton className="w-full h-4 md:h-8 rounded-full" />
              <Skeleton className="w-full h-4 md:h-8 rounded-full" />
            </CardTitle>
            <CardDescription className="flex flex-row gap-x-2">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="w-14 h-4 rounded-xl" />
              ))}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-2">
            {[...Array(10)].map((_, index) => (
              <Skeleton key={index} className="w-full h-4 rounded-xl" />
            ))}
          </CardContent>
        </Card>
      </Box>
    )
  }

  if (error) {
    return (
      <motion.div {...animateDetailArticle}>
        <Box className="w-full m-auto">
          <Card className="h-[calc(100svh-180px)] rounded-lg p-4">
            <CardHeader className="m-auto h-full flex flex-col items-center justify-center gap-y-6">
              <TryAgain
                fn={refetch}
                loading={loading}
                message="An error occurred while getting the source article"
              />
            </CardHeader>
          </Card>
        </Box>
      </motion.div>
    )
  }

  return (
    <motion.div {...animateDetailArticle}>
      <Box className="w-full m-auto">
        <Card className="min-h-[calc(100svh-150px)] rounded-lg p-0 md:p-4">
          <CardHeader className="flex flex-col p-4 gap-y-4 border-b-2 border-dashed pb-8">
            <Box className="flex flex-row max-w-max items-start justify-center gap-x-5">
              <Box className="w-14 h-14 md:w-20 md:h-20 m-auto relative ">
                {article?.user.profile_image ? (
                  <Image
                    key={article?.id}
                    src={article?.user.profile_image ?? ""}
                    alt={article?.title ?? ""}
                    title={article?.title ?? ""}
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, 350px"
                    aria-description={article?.description}
                  />
                ) : (
                  <DefaultImage
                    boxClassName="rounded-full"
                    textClassName="text-xs"
                    text="No image available"
                  />
                )}
              </Box>
              {article?.user && (
                <Box className="flex flex-col gap-y-1">
                  <Link
                    target="_blank"
                    href={`https://dev.to/${article?.user?.username}`}
                    className="max-w-max"
                  >
                    <Typography as="span" className="text-sm md:text-lg">
                      {article?.user?.username ?? "Anonymous"}
                    </Typography>
                  </Link>
                  <Typography as="span" className="text-xs">
                    {`Posted on ${article?.readable_publish_date}`}
                  </Typography>
                </Box>
              )}
            </Box>
            <CardTitle>
              <Typography as="h3" className="text-xl md:text-3xl">
                {article?.title}
              </Typography>
            </CardTitle>
            <CardDescription className="flex gap-x-2 flex-wrap gap-y-3 md:gap-y-0 md:flex-nowrap">
              {article?.tags.map((tag, index) => (
                <Badge variant="outline" key={index}>
                  {`#${tag}`}
                </Badge>
              ))}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <HtmlRenderer
              id="article-body"
              className="flex flex-col gap-y-4"
              htmlString={article?.body_html ?? ""}
            />
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  )
}

export default DetailArticle
