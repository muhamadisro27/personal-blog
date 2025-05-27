import Box from "@/components/atoms/Box/Box"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/Card"
import SkeletonNews from "@/components/atoms/Skeleton/SkeletonNews"
import { Typography } from "@/components/atoms/Typography"
import { INewsData } from "@/types/api/news"
import { Newspaper } from "lucide-react"

interface Props {
  news: INewsData[]
}

const News = ({ news }: Props) => {
  const renderNews = () => {
    if (!news) {
      return <SkeletonNews />
    }

    return (
      <>
        {news.map((news, idx) => (
          <Card key={idx} className="cursor-pointer hover:bg-card/70">
            <CardHeader className="p-4">
              <CardTitle className="pt-2">{news.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-3">
                {news.description}
              </CardDescription>
            </CardContent>
          </Card>
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
        News
      </Typography>
      <Typography as="p" className="text-base">
        These are the news technologies for you to make sure keep updated
      </Typography>

      <Box className="mt-5 grid gap-y-4 gap-x-0 sm:grid-cols-2 sm:gap-x-4">
        {renderNews()}
      </Box>
    </Box>
  )
}

export default News
