import { Breadcrumb } from "@/components/molecules/Breadcrumb"
import { IBreadcrumbLink } from "@/types"
import Box from "@/components/atoms/Box/Box"
import { Typewriter } from "../molecules/Typewriter"

const Homepage = () => {
  const breadcrumbLinks: IBreadcrumbLink[] = [
    {
      title: "Home",
      url: "/",
    },
  ]
  return (
    <>
      <Breadcrumb breadcrumbLinks={breadcrumbLinks} />

      {/* Main Layout Home */}
      <Box className="flex flex-col mt-4">
        <Box className="max-w-max">
          <Typewriter />
        </Box>
      </Box>
    </>
  )
}

export default Homepage
