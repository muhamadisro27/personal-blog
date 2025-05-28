import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/atoms/Card"
import { Skeleton } from "@/components/atoms/Skeleton"

type Props = { length?: number }

const SkeletonNews = ({ length = 1 }: Props) => {
  return (
    <>
      {[...Array(length)].map((_, idx) => (
        <Card
          key={idx}
          className="cursor-wait min-h-[350px] flex flex-col justify-between"
        >
          <CardHeader className="p-4">
            <CardTitle className="pt-2 flex flex-col gap-y-2">
              <Skeleton className="h-3 w-full rounded-full" />
              <Skeleton className="h-3 w-full rounded-full" />
              <Skeleton className="h-3 w-full rounded-full" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[200px] w-full rounded-md" />
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default SkeletonNews
