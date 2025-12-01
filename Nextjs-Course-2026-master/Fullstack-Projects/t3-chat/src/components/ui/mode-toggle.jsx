"use client"

import * as React from "react"
import { Moon, Sun, Sunrise, Sunset } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme , theme} = useTheme()

  return (
 <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
    {
        theme === "light" ? <Sunset className="size-5"/> : <Sunrise size={"size-5"} />
    }
 </Button>
  )
}
