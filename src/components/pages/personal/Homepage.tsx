"use client"
import { Divider } from "@/components/atoms/Divider"
import Introduction from "@/components/organism/section/Introduction"
import Articles from "@/components/organism/section/Article"
import Services from "@/components/organism/section/Services"
import { IArticleData } from "@/types/api/article"
import LayoutBase from "@/components/molecules/LayoutBase"
import { motion } from "framer-motion"
import { onMountedAnimated } from "@/lib/motion"

interface HomePageProps {
  articles: IArticleData[]
}

const Homepage = ({ articles }: HomePageProps) => {
  return (
    <LayoutBase>
      <motion.div {...onMountedAnimated}>
        <Introduction />

        <Divider />

        <Articles articles={articles} />

        <Services />
      </motion.div>
    </LayoutBase>
  )
}

export default Homepage
