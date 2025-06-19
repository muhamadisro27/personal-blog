"use client"
import LayoutBase from "@/components/molecules/LayoutBase"
import { motion } from "framer-motion"
import { onMountedAnimated } from "@/lib/motion"
import { Box } from "@/components/atoms/Box"
import { Typography } from "@/components/atoms/Typography"
import { Divider } from "@/components/atoms/Divider"
import { IArticleData } from "@/types/api/article"
import Image from "next/image"
import DefaultImage from "@/components/atoms/Image/DefaultImage"
import Link from "next/link"
import { Eye, MessageCircleMore } from "lucide-react"

interface ArticlePageProps {
  articles: IArticleData[]
}

const ArticlePage = ({ articles }: ArticlePageProps) => {
  return (
    <LayoutBase>
      <motion.div {...onMountedAnimated}>
        <Box as="section">
          <Box className="flex flex-col space-y-4">
            <Typography as="h3" className="text-xl font-medium">
              Articles
            </Typography>
            <Typography as="span" className="dark:text-neutral-400 text-base">
              Discover fresh perspectives, pro tips, and deep insights — all in
              one place.
            </Typography>
          </Box>

          <Divider className="mb-10 mt-6 border-dashed" />
        </Box>

        <Box as="section">
          <Link
            href={`articles${articles[0].path}`}
            key={articles[0].id}
            className="group"
          >
            <Box className="relative w-full h-[200px] m-auto bg-primary/5 border-0 rounded-sm">
              {articles[0].cover_image ? (
                <Image
                  key={articles[0].title}
                  src={articles[0].cover_image}
                  alt={articles[0].title}
                  title={articles[0].title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              ) : (
                <DefaultImage
                  boxClassName="rounded-sm"
                  text="No image available for this article"
                />
              )}
            </Box>

            <Box className="pt-4">
              <Typography
                as="h5"
                className="transition-all duration-200 dark:group-hover:text-primary text-lg"
              >
                {articles[0].title}
              </Typography>

              <Typography className="dark:text-neutral-400 pt-2 text-sm">
                {articles[0].description}
              </Typography>
            </Box>
          </Link>

          <Box className="mt-10">
            <Typography as="h3" className="text-xl font-medium">
              Related Articles
            </Typography>

            <Box className="grid grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-8 pt-5">
              {articles.slice(1).map((article) => (
                <Link
                  href={`articles${article.path}`}
                  key={article.id}
                  className="group"
                >
                  <Box className="relative w-full h-[200px] m-auto bg-primary/5 border-0">
                    {article.cover_image ? (
                      <Image
                        key={article.title}
                        src={article.cover_image}
                        alt={article.title}
                        title={article.title}
                        fill
                        priority
                        className="object-cover rounded-sm"
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                    ) : (
                      <DefaultImage
                        boxClassName="rounded-sm"
                        text="No image available for this article"
                      />
                    )}
                  </Box>

                  <Box className="pt-4">
                    <Typography
                      as="h5"
                      className="transition-all duration-200 dark:group-hover:text-primary text-base max-w-[90%]"
                    >
                      {article.title}
                    </Typography>

                    <Box className="flex flex-row pt-3 justify-between items-start">
                      <Typography
                        as="span"
                        className="text-xs flex flex-row gap-x-1 items-center"
                      >
                        <Eye />
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

                    <Typography className="dark:text-neutral-400 pt-2 text-sm">
                      {article.description}
                    </Typography>
                  </Box>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </motion.div>
    </LayoutBase>
  )
}

export default ArticlePage
