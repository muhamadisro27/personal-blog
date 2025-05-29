import DOMPurify from "dompurify"
import { Box } from "@/components/atoms/Box"
import { HTMLProps } from "react"
import { cn } from "@/lib/utils"

type Props = {
  htmlString: string
  className?: HTMLProps<HTMLDivElement>["className"]
  id?: HTMLProps<HTMLDivElement>["id"]
}

const HtmlRenderer = ({ htmlString, id, className }: Props) => {
  const cleanHtml = DOMPurify.sanitize(htmlString)
  return (
    <>
      <Box
        className={cn("", className)}
        id={id}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    </>
  )
}

export default HtmlRenderer
