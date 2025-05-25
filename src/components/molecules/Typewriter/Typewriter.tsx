"use client"
import { Typography } from "@/components/atoms/Typography"
import { getCommonPrefixLength } from "@/utils"
import { prefix, suffixes } from "@/utils/constant"
import { useEffect, useState } from "react"

const Typewriter = () => {
  const [displayed, setDisplayed] = useState("")
  const [suffixIndex, setSuffixIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentSuffix, setCurrentSuffix] = useState(suffixes[0])
  const nextSuffix = suffixes[(suffixIndex + 1) % suffixes.length]

  const commonPrefixLength = getCommonPrefixLength(currentSuffix, nextSuffix)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          const updated = currentSuffix.slice(0, charIndex)
          setDisplayed(prefix + updated)

          if (charIndex > commonPrefixLength) {
            setCharIndex((prev) => prev - 1)
          } else {
            setIsDeleting(false)
            setSuffixIndex((prev) => (prev + 1) % suffixes.length)
            setCurrentSuffix(nextSuffix)
            setCharIndex(commonPrefixLength)
          }
        } else {
          const updated = currentSuffix.slice(0, charIndex + 1)
          setDisplayed(prefix + updated)

          if (charIndex < currentSuffix.length) {
            setCharIndex((prev) => prev + 1)
          } else {
            setTimeout(() => {
              setIsDeleting(true)
            }, 3000)
          }
        }
      },
      isDeleting ? 45 : 65
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, commonPrefixLength, currentSuffix, nextSuffix])

  return (
    <Typography as="h2" className="text-3xl font-bold animate-type max-w-max">
      {displayed}
    </Typography>
  )
}

export default Typewriter
