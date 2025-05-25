"use client"
import { Typography } from "@/components/atoms/Typography"
import { cn } from "@/lib/utils"
import { getCommonPrefixLength } from "@/utils"
import { prefix, suffixes } from "@/utils/constant"
import { useEffect, useState } from "react"

const Typewriter = () => {
  const [displayed, setDisplayed] = useState("")
  const [suffixIndex, setSuffixIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentSuffix, setCurrentSuffix] = useState(suffixes[0])
  const [animateBlink, setAnimateBlink] = useState<boolean>(false)
  const [timeTyping, setTimeTyping] = useState<number>(50)
  const [timeDeleting, setTimeDeleting] = useState<number>(30)
  const nextSuffix = suffixes[(suffixIndex + 1) % suffixes.length]

  const commonPrefixLength = getCommonPrefixLength(currentSuffix, nextSuffix)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          const updated = currentSuffix.slice(0, charIndex)
          setAnimateBlink(false)
          setDisplayed(prefix + updated)

          if (charIndex > commonPrefixLength) {
            setCharIndex((prev) => prev - 1)
            setTimeDeleting((prev) => prev - 0.1)
          } else {
            setIsDeleting(false)
            setSuffixIndex((prev) => (prev + 1) % suffixes.length)
            setCurrentSuffix(nextSuffix)
            setCharIndex(commonPrefixLength)
          }
        } else {
          const updated = currentSuffix.slice(0, charIndex + 1)
          setDisplayed(prefix + updated)
          setAnimateBlink(false)

          if (charIndex < currentSuffix.length) {
            setCharIndex((prev) => prev + 1)
            setTimeTyping((prev) => prev + 0.5)
          } else {
            setAnimateBlink(true)
            setTimeout(() => {
              setIsDeleting(true)
            }, 3500)
          }
        }
      },
      isDeleting ? timeDeleting : timeTyping
    )

    return () => clearTimeout(timeout)
  }, [
    charIndex,
    isDeleting,
    commonPrefixLength,
    currentSuffix,
    nextSuffix,
    animateBlink,
    timeTyping,
    timeDeleting,
  ])

  return (
    <Typography
      as="h2"
      className={cn(
        "text-3xl font-bold max-w-max border-r-[5px] border-current pr-1",
        animateBlink ? "animate-type" : ""
      )}
    >
      {displayed}
    </Typography>
  )
}

export default Typewriter
