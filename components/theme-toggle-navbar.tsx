"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

type Theme = "light" | "dark"

function applyTheme(next: Theme) {
  const root = document.documentElement
  if (next === "dark") {
    root.classList.add("dark")
  } else {
    root.classList.remove("dark")
  }
}

export default function ThemeToggleNavbar({
  initial = "light",
  className = "",
}: {
  initial?: Theme
  className?: string
}) {
  const [theme, setTheme] = useState<Theme>(initial)

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme | null) ?? initial
    const next = stored === "dark" ? "dark" : "light"
    setTheme(next)
    applyTheme(next)
  }, [initial])

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark"
    setTheme(next)
    applyTheme(next)
    localStorage.setItem("theme", next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors
      border-neutral-200 bg-white text-neutral-700 shadow-sm hover:bg-neutral-50 hover:text-neutral-900
      focus:outline-none focus:ring-2 focus:ring-purple-500/50
      dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 ${className}`}
    >
      <Sun className="h-4 w-4 dark:hidden" />
      <Moon className="hidden h-4 w-4 dark:block" />
      <span className="hidden sm:inline">{theme === "dark" ? "Tema claro" : "Tema escuro"}</span>
    </button>
  )
}
