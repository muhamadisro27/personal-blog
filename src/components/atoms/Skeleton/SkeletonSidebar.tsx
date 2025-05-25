"use client"
import { SidebarMenuItem, SidebarMenuSkeleton } from "@/components/ui/sidebar"
import { SidebarMenuButton } from "../Sidebar"

const SkeletonSidebar = ({ length = 1 }: { length?: number }) => {
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuButton>
            <SidebarMenuSkeleton className="w-full" showIcon />
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  )
}

export default SkeletonSidebar
