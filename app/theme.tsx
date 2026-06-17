"use client"

import React, { useState, createContext, useContext, useMemo, useEffect } from "react"
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material"

const ThemeModeContext = createContext({
  darkMode: true,
  toggleTheme: () => {},
})

export function ThemeToggleProvider({ children }: { children: React.ReactNode }) {
  // Lock to dark mode
  const darkMode = true

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  const toggleTheme = () => {}

  const theme = useMemo(() => createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#abff02",      // primary lime
        light: "#c0ff3b",     // primary-bright
        dark: "#98e602",      // primary-deep
        contrastText: "#052424", // on-primary
      },
      secondary: {
        main: "#ffffff",
      },
      background: {
        default: "#052424",   // canvas
        paper: "#052424",     // B2B cards sit on canvas
      },
      text: {
        primary: "#ffffff",   // ink
        secondary: "#a2a6b4", // ink-soft
      },
      divider: "#586a6a",     // hairline
    },
    typography: {
      fontFamily: "var(--font-inter)",
      h1: { fontFamily: "var(--font-inter)", fontWeight: 500, letterSpacing: "-0.04em" },
      h2: { fontFamily: "var(--font-inter)", fontWeight: 500, letterSpacing: "-0.03em" },
      h3: { fontFamily: "var(--font-inter)", fontWeight: 500, letterSpacing: "-0.02em" },
      h4: { fontFamily: "var(--font-inter)", fontWeight: 500 },
      h5: { fontFamily: "var(--font-inter)", fontWeight: 400 },
      h6: { fontFamily: "var(--font-inter)", fontWeight: 400 },
      button: { 
        fontFamily: "var(--font-mono)", 
        fontSize: "11px", 
        fontWeight: 600, 
        letterSpacing: "1.5px", 
        textTransform: "uppercase" 
      },
    },
    shape: {
      borderRadius: 8, // rounded.md (8px) for buttons, input fields
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "8px", // rounded.md is 8px
            padding: "12px 24px", // spacing.sm spacing.xl
            cursor: "pointer",
            transition: "color 300ms cubic-bezier(0, 0, 0.58, 1), background-color 300ms cubic-bezier(0, 0, 0.58, 1)",
          },
          containedPrimary: {
            backgroundColor: "#abff02",
            color: "#052424",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#c0ff3b",
              boxShadow: "none",
            },
          },
          outlinedPrimary: {
            backgroundColor: "transparent",
            color: "#ffffff",
            border: "1px solid #ffffff",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid #ffffff",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: "#052424",
            border: "1px solid #586a6a",
            borderRadius: "12px", // rounded.lg is 12px
            boxShadow: "none", // flat content cards
          },
        },
      },
    },
  }), [])

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
  // Return null as we are locking the site to a high-end dark logistics console
  return null
}


