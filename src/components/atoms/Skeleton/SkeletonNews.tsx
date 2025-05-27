import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/Card"
import { Skeleton } from "@/components/atoms/Skeleton"

const SkeletonNews = () => {
  return (
    <>
      {[...Array(6)].map((_, idx) => (
        <Card key={idx} className="cursor-wait">
          <CardHeader className="p-4">
            <CardTitle className="pt-2">
              <Skeleton className="h-4 w-full rounded-full" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-4 w-full rounded-full" />
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </>
  )
}

export default SkeletonNews
