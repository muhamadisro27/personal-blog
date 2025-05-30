"use client"
import React, { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/atoms/Badge"
import { Box } from "@/components/atoms/Box"

type Props = {
  tags: string[]
}

const TagList = ({ tags }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)

  const [containerWidth, setContainerWidth] = useState(0)
  const [visibleTags, setVisibleTags] = useState<string[]>([])
  const [hiddenCount, setHiddenCount] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width
        setContainerWidth(width)
      }
    })

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!measureRef.current) return
    const children = Array.from(measureRef.current.children) as HTMLElement[]

    let totalWidth = 0
    const visible: string[] = []
    let hidden = 0

    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      const childWidth = child.offsetWidth + 8

      if (totalWidth + childWidth <= containerWidth) {
        totalWidth += childWidth
        visible.push(tags[i])
      } else {
        hidden = tags.length - visible.length
        break
      }
    }

    setVisibleTags(visible)
    setHiddenCount(hidden)
  }, [tags, containerWidth])

  return (
    <Box ref={containerRef} className="relative w-full">
      <Box
        ref={measureRef}
        className="invisible absolute top-0 left-0 flex gap-2 flex-wrap pointer-events-none"
      >
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">
            #{tag}
          </Badge>
        ))}
      </Box>

      <Box className="flex gap-2 flex-wrap">
        {visibleTags.map((tag) => (
          <Badge key={tag} variant="outline">
            #{tag}
          </Badge>
        ))}
        {hiddenCount > 0 && <Badge variant="outline">{hiddenCount}+</Badge>}
      </Box>
    </Box>
  )
}

export default TagList
