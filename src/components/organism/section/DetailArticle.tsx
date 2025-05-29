import { Box } from "@/components/atoms/Box"
import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/atoms/Card"
import { Typography } from "@/components/atoms/Typography"
import { IArticleDetail } from "@/types/api/article"
import Link from "next/link"

type Props = {
  article: IArticleDetail | undefined
}

const DetailArticle = ({ article }: Props) => {

  if (!article) {
    return (
      <Box className="max-w-[1440px] m-auto">
        <Card className="h-[calc(100svh-150px)] rounded-lg p-4">
          <CardHeader>
            <Typography>Loading article...</Typography>
          </CardHeader>
        </Card>
      </Box>
    )
  }

  return (
    <Box className="max-w-[1440px] m-auto">
      <Card className="h-[calc(100svh-150px)] rounded-lg p-4">
        <CardHeader className="flex flex-col p-4 gap-y-4">
          <Box>
            <Box className="flex flex-col gap-y-1">
              <Link
                target="_blank"
                href={`https://dev.to/${article?.user?.username}`}
                className="max-w-max"
              >
                <Typography as="span" className="text-md">
                  {article?.user?.username}
                </Typography>
              </Link>
              <Typography as="span" className="text-sm">
                Posted on {article?.readable_publish_date}
              </Typography>
            </Box>
          </Box>
          <CardTitle>
            <Typography as="h3" className="text-3xl">
              {article?.title}
            </Typography>
          </CardTitle>
          <CardDescription>asd</CardDescription>
        </CardHeader>
        <CardContent>aasdasd</CardContent>
      </Card>
    </Box>
  )
}

export default DetailArticle
