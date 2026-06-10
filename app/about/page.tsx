"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  useTheme,
  IconButton,
  Tooltip,
  Grid,
} from "@mui/material";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Mail, Globe, Send, MessageSquare, Phone } from "lucide-react";

function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

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
        alignItems: "center"
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
                    bgcolor: isDark ? "rgba(16, 185, 129, 0.1)" : "rgba(16, 185, 129, 0.05)",
                    border: "1px solid",
                    borderColor: isDark ? "rgba(16, 185, 129, 0.2)" : "rgba(16, 185, 129, 0.1)",
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "#10b981",
                      boxShadow: "0 0 12px #10b981",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <Typography variant="body2" sx={{ color: "#10b981", fontWeight: 700, letterSpacing: 0.5 }}>
                    AVAILABLE FOR NEW PROJECTS
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
                    background: isDark 
                      ? "linear-gradient(135deg, #fff 0%, #94a3b8 100%)"
                      : "linear-gradient(135deg, #0f172a 0%, #475569 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Engineering <br /> Polished Digital <br /> Experiences.
                </Typography>
              </motion.div>

              {/* Subheader */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                    maxWidth: { xs: "100%", md: "600px" },
                    mx: { xs: "auto", md: "0" },
                    lineHeight: 1.6,
                    fontSize: { xs: "1.05rem", md: "1.2rem" },
                    fontWeight: 400,
                  }}
                >
                  I&apos;m <strong>Akinyemi Matthew</strong>, a Full-Stack Engineer specializing in building 
                  high-performance applications with Next.js, TypeScript, 
                  and robust backend architectures.
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
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    className="gradient-primary"
                    sx={{
                      px: 5,
                      py: 2,
                      fontSize: "1rem",
                      fontWeight: 700,
                      boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                      }
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    component="a"
                    href="/Matthew_Akinyemi_Professional_CV.pdf"
                    download="Matthew_Akinyemi_Professional_CV.pdf"
                    variant="outlined"
                    size="large"
                    startIcon={<Download size={20} />}
                    sx={{
                      px: 5,
                      py: 2,
                      fontSize: "1rem",
                      fontWeight: 600,
                      borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                      color: isDark ? "white" : "text.primary",
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        borderColor: isDark ? "white" : "primary.main",
                        bgcolor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.02)",
                      }
                    }}
                  >
                    Get CV
                  </Button>
                </Stack>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  sx={{ color: "text.secondary" }}
                >
                  {[
                    { icon: <Globe size={22} />, label: "Health Center", href: "https://mat-oauhc.vercel.app/" },
                    { icon: <MessageSquare size={22} />, label: "LinkedIn", href: "https://www.linkedin.com/in/matthewakinyemi24/" },
                    { icon: <Send size={22} />, label: "Twitter", href: "https://twitter.com/Mathew7746" },
                    { icon: <Phone size={22} />, label: "Call Me", href: "tel:09025546836" },
                    { icon: <Mail size={22} />, label: "Email", href: "mailto:matthewakinyemi24@gmail.com" },
                  ].map((social, i) => (
                    <Tooltip key={i} title={social.label} arrow>
                      <IconButton
                        href={social.href}
                        target="_blank"
                        sx={{
                          color: "inherit",
                          p: 1.5,
                          bgcolor: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.05)",
                          transition: "0.3s",
                          "&:hover": {
                            color: "primary.main",
                            bgcolor: "rgba(59, 130, 246, 0.1)",
                            borderColor: "primary.main",
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
                  pt: "100%", // 1:1 Aspect Ratio
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
                    borderRadius: "32px",
                    overflow: "hidden",
                    border: "8px solid",
                    borderColor: "rgba(255, 255, 255, 0.03)",
                    boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5)",
                    zIndex: 2,
                  }}
                >
                  <Box
                    component="img"
                    src="/portfolioPic1.jpg"
                    alt="Akinyemi Matthew"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "contrast(1.05)",
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
                    bgcolor: "primary.main",
                    borderRadius: "32px",
                    opacity: 0.1,
                    filter: "blur(60px)",
                    zIndex: 1,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Floating Shapes for Depth */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: 150,
          height: 150,
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
          filter: "blur(40px)",
          zIndex: 0,
          display: { xs: "none", md: "block" },
          opacity: isDark ? 1 : 0.5
        }}
      />
    </Box>
  );
}
;

export default Hero;
