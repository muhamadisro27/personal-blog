import Box from "@/components/atoms/Box/Box"
import { Typewriter } from "../../molecules/Typewriter"
import { Typography } from "@/components/atoms/Typography"
import { Divider } from "@/components/atoms/Divider"

const Homepage = () => {
  // const breadcrumbLinks: IBreadcrumbLink[] = [
  //   {
  //     title: "Home",
  //     url: "/",
  //   },
  // ]
  return (
    <>
      {/* <Breadcrumb breadcrumbLinks={breadcrumbLinks} /> */}

      {/* Main Layout Home */}
      <Box className="flex flex-col mt-4 items-center">
        <Box className="max-w-[854px]">
          <Typewriter />                    
          
          <Box className="mt-4">
            <Typography as="h3" className="leading-9">
              Enthusiastic and experienced Frontend Engineer with deep
              expertise in TypeScript and modern web technologies. Committed to
              building clean, scalable, and user-friendly interfaces, with a
              strong emphasis on teamwork and high-quality delivery.
            </Typography>
          </Box>
          <Divider />
        </Box>
      </Box>
    </>
  )
}

export default Homepage
