"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  Tooltip,
  IconButton,
  Grid,
} from "@mui/material";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Play, Terminal, Shield, Cpu, HelpCircle } from "lucide-react";
import Link from "next/link";

function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Box 
      component="section" 
      id="hero"
      sx={{ 
        position: "relative", 
        overflow: "hidden",
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 15 },
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        backgroundColor: "#052424",
      }}
    >
      {/* Background Elements */}
      <div className="hero-bg" />
      <div className="grid-bg" />

      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              sx={{ textAlign: { xs: "center", md: "left" }, position: "relative", zIndex: 1 }}
            >
              {/* Availability Badge */}
              <motion.div variants={itemVariants}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 2,
                    py: 0.8,
                    borderRadius: "100px",
                    bgcolor: "rgba(171, 255, 2, 0.1)",
                    border: "1px solid rgba(171, 255, 2, 0.2)",
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "#abff02",
                      boxShadow: "0 0 12px #abff02",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <Typography variant="body2" sx={{ color: "#abff02", fontWeight: 700, letterSpacing: 1, fontFamily: "var(--font-mono)", fontSize: "11px" }}>
                    YARD OPERATING SYSTEM ONLINE [v2.4]
                  </Typography>
                </Box>
              </motion.div>

              {/* Headline */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.8rem", sm: "4rem", md: "5rem" },
                    fontWeight: 900,
                    lineHeight: 1.1,
                    mb: 3,
                    letterSpacing: "-0.04em",
                    background: "linear-gradient(135deg, #ffffff 0%, #a2a6b4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  The New <br /> Industry Standard <br /> in Yard Operations.
                </Typography>
              </motion.div>

              {/* Subheader */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#a2a6b4",
                    mb: 4,
                    maxWidth: { xs: "100%", md: "600px" },
                    mx: { xs: "auto", md: "0" },
                    lineHeight: 1.6,
                    fontSize: { xs: "1.05rem", md: "1.2rem" },
                    fontWeight: 400,
                  }}
                >
                  Terminal Yard Operating System replaces manual scheduling friction with 
                  <strong> automated, real-time orchestration</strong>. Optimize spotters, gates, 
                  and loading docks within a single mission-critical software console.
                </Typography>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={itemVariants}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  sx={{ mb: 6 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowRight size={20} />}
                    component={Link}
                    href="/#contact"
                    sx={{
                      px: 5,
                      py: 2,
                      fontSize: "11px",
                      fontWeight: 600,
                      fontFamily: "var(--font-mono)",
                      bgcolor: "#abff02",
                      color: "#052424",
                      borderRadius: "8px",
                      boxShadow: "none",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "#c0ff3b",
                        boxShadow: "none",
                        transform: "translateY(-2px)",
                      }
                    }}
                  >
                    Request System Demo
                  </Button>
                  <Button
                    component={Link}
                    href="/resume"
                    variant="outlined"
                    size="large"
                    startIcon={<Terminal size={20} />}
                    sx={{
                      px: 5,
                      py: 2,
                      fontSize: "11px",
                      fontWeight: 600,
                      fontFamily: "var(--font-mono)",
                      borderColor: "#ffffff",
                      color: "#ffffff",
                      borderRadius: "8px",
                      backdropFilter: "blur(10px)",
                      cursor: "pointer",
                      "&:hover": {
                        borderColor: "#abff02",
                        color: "#abff02",
                        bgcolor: "rgba(255,255,255,0.05)",
                      }
                    }}
                  >
                    Integration Specs
                  </Button>
                </Stack>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  sx={{ color: "#a2a6b4" }}
                >
                  {[
                    { icon: <Play size={20} />, label: "Watch OS Preview", href: "/#projects" },
                    { icon: <Terminal size={20} />, label: "API Console", href: "/resume" },
                    { icon: <Shield size={20} />, label: "Security & Compliance", href: "/resume#compliance" },
                    { icon: <Cpu size={20} />, label: "Hardware Compatibility", href: "/resume#hardware" },
                    { icon: <HelpCircle size={20} />, label: "Technical Support", href: "/#contact" },
                  ].map((social, i) => (
                    <Tooltip key={i} title={social.label} arrow>
                      <IconButton
                        href={social.href}
                        sx={{
                          color: "inherit",
                          p: 1.5,
                          bgcolor: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.05)",
                          transition: "0.3s",
                          cursor: "pointer",
                          "&:hover": {
                            color: "#abff02",
                            bgcolor: "rgba(171, 255, 2, 0.1)",
                            borderColor: "#abff02",
                            transform: "translateY(-5px)",
                          }
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </Tooltip>
                  ))}
                </Stack>
              </motion.div>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3/4", 
                  maxWidth: "450px",
                  mx: "auto",
                }}
              >
                {/* Profile Picture Frame */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)",
                    zIndex: 2,
                    bgcolor: "#052424",
                  }}
                >
                  <Box
                    component="img"
                    src="/gate-os.png"
                    alt="Terminal YOS Gate OS Console"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                
                {/* Decorative Background for Image */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "10%",
                    left: "-10%",
                    width: "100%",
                    height: "100%",
                    bgcolor: "#abff02",
                    borderRadius: "32px",
                    opacity: 0.08,
                    filter: "blur(60px)",
                    zIndex: 1,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
