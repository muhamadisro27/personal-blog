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
import { CONTACTS } from "@/utils/constant"

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

          <Box className="mt-5 grid gap-y-4 gap-x-0 grid-cols-1 lg:grid-cols-2 sm:gap-x-4">
            {CONTACTS.map((contact, index) => (
              <Card
                key={index}
                className={`w-full flex flex-row justify-between items-center shadow-none rounded-lg border h-max bg-opacity-40 text-${contact.color}-600 dark:text-${contact.color}-400 border-${contact.color}-300 dark:border-${contact.color}-600 dark:from-${contact.color}-900 dark:to-${contact.color}-950 from-${contact.color}-100 to-${contact.color}-200 bg-gradient-to-br`}
              >
                <Box>
                  <CardHeader className="p-6 pb-0 text-xl font-medium">
                    {contact.title}
                  </CardHeader>
                  <CardContent className="p-6 pt-4 leading-6 text-xs max-w-[250px]">
                    {contact.description}
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={contact.link}
                      target="_blank"
                      className={`rounded-sm inline-flex justify-center items-center text-black font-medium bg-primary p-2 text-sm bg-${contact.color}-400 transition-all duration-150 dark:hover:bg-${contact.color}-300`}
                    >
                      Go to {contact.name}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Box>
                <Box
                  className={`bg-${contact.color}-800 dark:bg-${contact.color}-500 rounded-full p-4 mr-6`}
                >
                  <contact.icon className="w-10 h-10 text-white" />
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </motion.div>
    </LayoutBase>
  )
}

export default ContactPage
