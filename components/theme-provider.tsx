"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  type ReactNode,
} from "react"

type Theme = "dark" | "light" | "system"

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) {
  // Detecta tema inicial de forma segura (sem acessar window/document no SSR)
  const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") return defaultTheme

    const storedTheme = localStorage.getItem(storageKey) as Theme | null
    if (storedTheme) return storedTheme

    if (defaultTheme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      return prefersDark ? "dark" : "light"
    }

    return defaultTheme
  }

  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  // Aplica a classe do tema ao <html> apenas no client
  useEffect(() => {
    if (typeof document === "undefined") return

    const root = document.documentElement
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)

    root.classList.remove("light", "dark")
    root.classList.add(isDark ? "dark" : "light")
    setThemeState(isDark ? "dark" : "light")
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, newTheme)
    }
  }

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export function useTheme(): ThemeProviderState {
  const context = useContext(ThemeProviderContext)
  if (!context)
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider")
  return context
}
