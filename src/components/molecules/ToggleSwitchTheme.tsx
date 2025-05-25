"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const ToggleSwitchTheme = () => {
  const { setTheme } = useTheme()
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const handleClickTheme = () => {
    setIsDarkTheme((prev) => !prev)
    setTheme(isDarkTheme ? "dark" : "light")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="bg-background/40 backdrop-blur-lg"
      onClick={handleClickTheme}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}

export default ToggleSwitchTheme
