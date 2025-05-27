import { Box } from "@/components/atoms/Box"
import { Divider } from "@/components/atoms/Divider"
import Introduction from "@/components/organism/section/Introduction"
import News from "@/components/organism/section/Article"
import Services from "@/components/organism/section/Services"
import { IArticleData } from "@/types/api/article"

interface HomePageProps {
  articles: IArticleData[]
}

const Homepage = ({ articles }: HomePageProps) => {
  return (
    <>
      {/* Main Layout Home */}
      <Box className="flex flex-col mt-4 items-center">
        <Box className="max-w-[854px]">
          <Introduction />

          <Divider />

          <News articles={articles} />

          <Services />

          {/* <Divider /> */}
        </Box>
      </Box>
    </>
  )
}

export default Homepage
