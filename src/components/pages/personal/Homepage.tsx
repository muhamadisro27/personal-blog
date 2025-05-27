import Box from "@/components/atoms/Box/Box"
import { Divider } from "@/components/atoms/Divider"
import Introduction from "@/components/organism/section/Introduction"
import News from "@/components/organism/section/News"
import Services from "@/components/organism/section/Services"
import { INewsData } from "@/types/api/news"

interface HomePageProps {
  news: INewsData[]
}

const Homepage = ({ news }: HomePageProps) => {
  return (
    <>
      {/* Main Layout Home */}
      <Box className="flex flex-col mt-4 items-center">
        <Box className="max-w-[854px]">
          <Introduction />

          <Divider />

          <News news={news} />

          <Divider className="mt-10" />

          <Services />

          {/* <Divider /> */}
        </Box>
      </Box>
    </>
  )
}

export default Homepage
