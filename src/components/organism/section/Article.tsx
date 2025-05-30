"use client"
import { Box } from "@/components/atoms/Box"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/atoms/Card"
import DefaultImage from "@/components/atoms/Image/DefaultImage"
import SkeletonArticle from "@/components/atoms/Skeleton/SkeletonArticle"
import { Typography } from "@/components/atoms/Typography"
import { useSidebarStore } from "@/stores/useSidebarStore"
import { IArticleData } from "@/types/api/article"
import { Eye, MessageCircleMore, Newspaper } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TagList from "@/components/molecules/TagList"
interface Props {
  articles: IArticleData[]
}

const Article = ({ articles }: Props) => {
  const { loading } = useSidebarStore()

  const renderArticles = () => {
    if (loading) {
      return <SkeletonArticle length={2} />
    }

    return (
      <>
        {articles.map((article) => {
          return (
            <Link href={`articles${article.path}`} key={article.id}>
              <Card className="cursor-pointer transition-all min-h-[350px] hover:bg-card/60 flex flex-col hover:scale-[1.004] justify-between hover:border-primary/50 ">
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="pt-2 leading-6 line-clamp-3 min-h-[80px]">
                    {article.title}
                    <Box className="flex flex-row pt-3 justify-between">
                      <Typography
                        as="span"
                        className="text-xs flex flex-row gap-x-1 items-center"
                      >
                        <Eye className="w-5 h-5" />
                        {article.page_views_count} views
                      </Typography>
                      <Typography
                        as="span"
                        className="text-xs flex flex-row gap-x-1 items-center"
                      >
                        <MessageCircleMore className="w-5 h-5" />
                        {article.comments_count} comments
                      </Typography>
                    </Box>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Box className="relative w-full h-[200px] m-auto bg-primary/5 border-0 rounded-md">
                    {article.cover_image ? (
                      <Image
                        key={article.id}
                        src={article.cover_image}
                        alt={article.title}
                        title={article.title}
                        fill
                        className="object-contain rounded-md"
                        sizes="(max-width: 768px) 100vw, 350px"
                        aria-description={article.description}
                      />
                    ) : (
                      <DefaultImage text="No image available for this article" />
                    )}
                  </Box>
                </CardContent>
                <CardFooter className="flex gap-x-2 p-4 gap-y-1.5 pt-0.5 flex-wrap">
                  <TagList tags={article.tag_list} />
                </CardFooter>
              </Card>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <Box className="mt-10 flex flex-col gap-y-2">
      <Typography
        as="h3"
        className="flex gap-x-3 text-lg md:text-xl font-semibold items-center"
      >
        <Newspaper />
        Articles
      </Typography>
      <Typography as="p" className="text-sm md:text-base">
        I&apos;d like to share an article i&apos;ve written, focusing on
        developments in frontend web technology.
      </Typography>

      <Box className="mt-5 grid gap-y-4 gap-x-0 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-4">
        {renderArticles()}
      </Box>
    </Box>
  )
}

export default Article
