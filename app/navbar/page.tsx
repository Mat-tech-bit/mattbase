"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/#about-story" },
  { label: "Capabilities", href: "/#skills" },
  { label: "Solutions", href: "/#portfolio" },
  { label: "Consoles", href: "/#projects" },
  { label: "Specifications", href: "/resume" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled 
            ? "rgba(69, 71, 66, 0.8)" 
            : "rgba(5, 36, 36, 0.6)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          boxShadow: scrolled ? "0 40px 80px rgba(0, 0, 0, 0.25)" : "none",
          color: "#ffffff",
          transition: "all 300ms cubic-bezier(0, 0, 0.58, 1)",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between", height: 80 }}>
            {/* Brand Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                variant="h6"
                component={Link}
                href="/"
                sx={{
                  fontWeight: 900,
                  fontSize: "1.3rem",
                  letterSpacing: "1.5px",
                  fontFamily: "var(--font-mono)",
                  color: "#ffffff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                TERMINAL<span style={{ color: "#abff02" }}>_</span>
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  component={Link}
                  href={link.href}
                  sx={{
                    color: "#a2a6b4",
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    fontWeight: 500,
                    px: 2,
                    cursor: "pointer",
                    textTransform: "none",
                    "&:hover": { color: "#ffffff", bgcolor: "transparent" },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                component={Link}
                href="/#contact"
                variant="contained"
                sx={{
                  ml: 2,
                  bgcolor: "#abff02",
                  color: "#052424",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  padding: "8px 20px",
                  boxShadow: "none",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#c0ff3b",
                    boxShadow: "none",
                  }
                }}
              >
                Request Demo
              </Button>
            </Box>

            {/* Mobile Actions */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
              <IconButton 
                sx={{ color: "#ffffff" }} 
                onClick={handleDrawerToggle}
              >
                {mobileOpen ? <X /> : <Menu />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: "#052424",
            backgroundImage: "none",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 8 }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "#ffffff" }}>
              <X />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={handleDrawerToggle}
                  sx={{ py: 2, textAlign: "center", cursor: "pointer" }}
                >
                  <ListItemText 
                    primary={link.label} 
                    primaryTypographyProps={{ 
                      variant: "h4", 
                      fontWeight: 500,
                      fontFamily: "var(--font-inter)",
                      color: "#a2a6b4"
                    }}
                    sx={{
                      "&:hover .MuiTypography-root": { color: "#ffffff" }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ justifyContent: "center", mt: 4 }}>
              <Button
                component={Link}
                href="/#contact"
                onClick={handleDrawerToggle}
                variant="contained"
                sx={{
                  bgcolor: "#abff02",
                  color: "#052424",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  borderRadius: "8px",
                  textTransform: "uppercase",
                  padding: "12px 32px",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#c0ff3b",
                  }
                }}
              >
                Request Demo
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {/* Spacer to push content below fixed navbar */}
      <Toolbar sx={{ height: 80 }} />
    </>
  );
};

export default Navbar;

