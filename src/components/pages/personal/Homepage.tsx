import Box from "@/components/atoms/Box/Box"
import { Typewriter } from "../../molecules/Typewriter"
import { Typography } from "@/components/atoms/Typography"
import { Divider } from "@/components/atoms/Divider"
import { ShipWheel } from "lucide-react"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/Card"
import { SERVICES } from "@/utils/constant"
import Image from "next/image"

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
            <Typography className="text-[1rem] leading-7 md:text-left md:leading-9">
              Enthusiastic and experienced Frontend Engineer with deep expertise
              in TypeScript and modern web technologies. Committed to building
              clean, scalable, and user-friendly interfaces, with a strong
              emphasis on teamwork and high-quality delivery.
            </Typography>
          </Box>

          <Divider />

          <Box className="mt-10 flex flex-col gap-y-2">
            <Typography
              as="h3"
              className="flex gap-x-3 text-xl font-semibold items-center"
            >
              <ShipWheel />
              Services
            </Typography>
            <Typography as="p" className="text-base">
              These are the solutions I can bring to your business
            </Typography>

            <Box className="mt-5 grid gap-y-4 gap-x-0 sm:grid-cols-2 sm:gap-x-4">
              {SERVICES.map((service, idx) => (
                <Card key={idx}>
                  <CardHeader className="p-4">
                    <Box className="relative w-full h-[300px] m-auto">
                      <Image
                        src={`/images/services/${service.image}`}
                        alt={service.title}
                        title={service.title}
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, 350px"
                        aria-description={service.description}
                        priority
                      />
                    </Box>
                    <CardTitle className="pt-2">
                      <Typography as="h5" className="font-semibold text-lg">
                        {service.title}
                      </Typography>
                    </CardTitle>
                    <CardDescription>
                      <Typography
                        as="p"
                        className="font-normal dark:text-[#A8A29E] text-md"
                      >
                        {service.description}
                      </Typography>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </Box>
          </Box>

          {/* <Divider /> */}
        </Box>
      </Box>
    </>
  )
}

export default Homepage
