import { Breadcrumb } from "@/components/molecules/Breadcrumb"
import { IBreadcrumbLink } from "@/types"

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
    </>
  )
}

export default Homepage
