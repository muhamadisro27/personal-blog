"use client"
import LayoutBase from "@/components/molecules/LayoutBase"
import { motion } from "framer-motion"
import { onMountedAnimated } from "@/lib/motion"
import { Typography } from "@/components/atoms/Typography"
import { Box } from "@/components/atoms/Box"
import { Divider } from "@/components/atoms/Divider"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/atoms/Card"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const ContactPage = () => {
  return (
    <LayoutBase>
      <motion.div {...onMountedAnimated}>
        <Box as="section">
          <Box className="flex flex-col space-y-4">
            <Typography as="h3" className="text-xl font-medium">
              Contact
            </Typography>
            <Typography as="span" className="dark:text-neutral-400 text-base">
              Let&apos;s get in touch
            </Typography>
          </Box>

          <Divider className="mb-10 mt-6 border-dashed" />
        </Box>

        <Box className="mt-10">
          <Typography as="h3" className="text-base font-medium">
            Find me on
          </Typography>

          <Box className="mt-5 grid gap-y-4 gap-x-0 md:grid-cols-2 sm:gap-x-4">
            {[...Array(4)].map((_, index) => (
              <Card
                key={index}
                className="border-slate-500 from-slate-800 to-slate-900 bg-gradient-to-br w-full h-max"
              >
                <CardHeader className="p-6 pb-0">Let&apos;s connect</CardHeader>
                <CardContent className="p-6 text-sm max-w-44">
                  Explore the source code for all my projects on GitHub.
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    target="_blank"
                    className="rounded-sm inline-flex justify-center items-center text-black font-medium bg-primary p-2 text-sm bg-slate-400 transition-all duration-150 dark:hover:bg-slate-300"
                  >
                    Go to GitHub
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </Box>
        </Box>
      </motion.div>
    </LayoutBase>
  )
}

export default ContactPage
