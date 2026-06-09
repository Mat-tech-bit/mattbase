"use client"

import React, { useState, createContext, useContext, useMemo, useEffect } from "react"
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  IconButton,
} from "@mui/material"
import { DarkMode, LightMode } from "@mui/icons-material"

const ThemeModeContext = createContext({
  darkMode: true,
  toggleTheme: () => {},
})

export function ThemeToggleProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleTheme = () => setDarkMode((prev) => !prev)

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#3b82f6",
        light: "#60a5fa",
        dark: "#2563eb",
      },
      secondary: {
        main: "#10b981",
      },
      background: {
        default: darkMode ? "#050505" : "#f8fafc",
        paper: darkMode ? "#0f0f0f" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#f8fafc" : "#0f172a",
        secondary: darkMode ? "#94a3b8" : "#475569",
      },
    },
    typography: {
      fontFamily: "var(--font-inter)",
      h1: { fontWeight: 800, letterSpacing: "-0.02em" },
      h2: { fontWeight: 700, letterSpacing: "-0.01em" },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 600 },
      button: { textTransform: "none", fontWeight: 600 },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            padding: "10px 24px",
            fontSize: "1rem",
          },
          containedPrimary: {
            background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            boxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.39)",
            "&:hover": {
              boxShadow: "0 6px 20px rgba(59, 130, 246, 0.23)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? "rgba(15, 15, 15, 0.6)" : "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(20px)",
            border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)"}`,
            boxShadow: darkMode ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)" : "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
          },
        },
      },
    },
  }), [darkMode])

  return (
    <ThemeModeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = () => useContext(ThemeModeContext)

export function ThemeToggleButton() {
  const { darkMode, toggleTheme } = useThemeMode()
  return (
    <IconButton 
      onClick={toggleTheme}
      sx={{ 
        bgcolor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
        border: "1px solid",
        borderColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        color: darkMode ? "#fbbf24" : "#4b5563",
        "&:hover": {
          bgcolor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          transform: "rotate(15deg)",
        },
        transition: "all 0.3s ease",
      }}
    >
      {darkMode ? <LightMode sx={{ fontSize: 20 }} /> : <DarkMode sx={{ fontSize: 20 }} />}
    </IconButton>
  )
}

