"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Avatar,
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
  useScrollTrigger,
} from "@mui/material";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggleButton } from "../theme";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about-story" },
  { label: "Skills", href: "/#skills" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Projects", href: "/#projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
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
            ? (theme) => theme.palette.mode === 'dark' 
              ? "rgba(10, 10, 10, 0.7)" 
              : "rgba(255, 255, 255, 0.8)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: (theme) => scrolled 
            ? `1px solid ${theme.palette.mode === 'dark' ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"}`
            : "none",
          color: "text.primary",
          transition: "all 0.3s ease-in-out",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between", height: 80 }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar 
                alt="Matthew" 
                src="/portfolioPic1.jpg" 
                sx={{ width: 40, height: 40, border: "2px solid #3b82f6" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  letterSpacing: -0.5,
                  display: { xs: "none", sm: "block" },
                }}
              >
                AKINYEMI<span style={{ color: "#3b82f6" }}>.</span>
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
                    color: "text.primary",
                    px: 2,
                    "&:hover": { color: "primary.main", bgcolor: "transparent" },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Box sx={{ ml: 2 }}>
                <ThemeToggleButton />
              </Box>
            </Box>

            {/* Mobile Actions */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
              <ThemeToggleButton />
              <IconButton 
                sx={{ color: "text.primary" }} 
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
            backgroundColor: "background.default",
            backgroundImage: "none",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 8 }}>
            <IconButton onClick={handleDrawerToggle}>
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
                  sx={{ py: 2, textAlign: "center" }}
                >
                  <ListItemText 
                    primary={link.label} 
                    primaryTypographyProps={{ variant: "h4", fontWeight: 700 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      {/* Spacer to push content below fixed navbar */}
      <Toolbar sx={{ height: 80 }} />
    </>
  );
};

export default Navbar;
