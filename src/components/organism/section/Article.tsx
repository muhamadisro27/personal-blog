"use client"
import { Box } from "@/components/atoms/Box"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/Card"
import DefaultImage from "@/components/atoms/Image/DefaultImage"
import SkeletonArticle from "@/components/atoms/Skeleton/SkeletonArticle"
import { Typography } from "@/components/atoms/Typography"
import useMount from "@/hooks/use-mount"
import { IArticleData } from "@/types/api/article"
import { Newspaper } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Props {
  articles: IArticleData[]
}

const Article = ({ articles }: Props) => {
  const { loading } = useMount()

  const renderArticles = () => {
    if (loading) {
      return <SkeletonArticle />
    }

    return (
      <>
        {articles.map((article,index) => (
          <Link href={article.url} target="_blank" key={article.id}>
            <Card className="cursor-pointer hover:bg-card/70 min-h-[350px] flex flex-col justify-between">
              <CardHeader className="p-4">
                <CardTitle className="pt-2 leading-6 line-clamp-3">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Box className="relative w-full h-[200px] m-auto">
                  {article.cover_image ? (
                    <Image
                      key={article.id}
                      src={article.cover_image}
                      alt={article.title}
                      title={article.title}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 768px) 100vw, 350px"
                      aria-description={article.description}
                    />
                  ) : (
                    <DefaultImage text="No image available for this article" />
                  )}
                </Box>
              </CardContent>
            </Card>
          </Link>
        ))}
      </>
    )
  }

  return (
    <Box className="mt-10 flex flex-col gap-y-2">
      <Typography
        as="h3"
        className="flex gap-x-3 text-xl font-semibold items-center"
      >
        <Newspaper />
        Articles
      </Typography>
      <Typography as="p" className="text-base">
        These are the latest articles that will keep your updated
      </Typography>

      <Box className="mt-5 grid gap-y-4 gap-x-0 sm:grid-cols-3 sm:gap-x-4">
        {renderArticles()}
      </Box>
    </Box>
  )
}

export default Article
