import { Box } from "@/components/atoms/Box"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/Card"
import { Typography } from "@/components/atoms/Typography"
import { SERVICES } from "@/utils/constant"
import { ShipWheel } from "lucide-react"
import Image from "next/image"

const Services = () => {
  return (
    <Box as="section" className="mt-10 flex flex-col gap-y-2">
      <Typography
        as="h3"
        className="flex gap-x-3 text-lg md:text-xl font-semibold items-center"
      >
        <ShipWheel />
        Services
      </Typography>
      <Typography as="p" className="text-sm md:text-base">
        These are the solutions I can bring to your business.
      </Typography>

      <Box className="mt-5 grid gap-y-4 gap-x-0 md:grid-cols-2 lg:grid-cols-3 sm:gap-x-4">
        {SERVICES.map((service, idx) => (
          <Card key={idx}>
            <CardHeader className="p-4">
              <Box className="relative w-full h-[200px] m-auto">
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
                  className="font-normal dark:text-[#A8A29E] text-base"
                >
                  {service.description}
                </Typography>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default Services
