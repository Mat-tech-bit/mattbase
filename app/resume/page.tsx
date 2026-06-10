"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Stack,
  Chip,
  Divider,
  useTheme,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Download,
  Visibility as Eye,
  Mail,
  Phone,
  Place as MapPin,
  Work as Briefcase,
  School as GraduationCap,
  Code as Code2,
  Person as User,
  ArrowBack as ArrowLeft,
} from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const contactInfo = {
  name: "Matthew Akinyemi",
  role: "Frontend & Full-Stack JavaScript Developer",
  location: "Nigeria",
  email: "matthewakinyemi24@gmail.com",
  phone: "09025546836",
  github: "https://github.com/Mat-tech-bit",
  linkedin: "https://www.linkedin.com/in/matthewakinyemi24/",
};

const experiences = [
  {
    role: "Full-Stack Engineer",
    company: "OAU Health Center Project",
    period: "2024 - Present",
    description: "Leading the development of a secure healthcare portal, managing electronic health records and automated scheduling systems.",
  },
  {
    role: "Frontend Specialist",
    company: "Freelance & Consultations",
    period: "2023 - 2024",
    description: "Delivered high-converting landing pages and Paystack-integrated platforms for various startup clients.",
  },
  {
    role: "Software Developer Intern",
    company: "Tech Hub",
    period: "2022 - 2023",
    description: "Focused on React state management and UI optimization for large-scale dashboard applications.",
  },
];

const skills = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Material UI", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend & DB", items: ["Node.js", "Express", "Drizzle ORM", "PostgreSQL", "MongoDB", "Firebase", "Better Auth"] },
  { category: "Tools & Others", items: ["Git", "GitHub", "Cloudinary", "Paystack API", "REST APIs", "Vercel"] },
];

const ResumePage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        pt: { xs: 6, md: 10 },
        pb: { xs: 10, md: 15 },
        overflow: "hidden",
      }}
    >
      {/* Background Elements */}
      <div className="hero-bg" />
      <div className="grid-bg" />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        {/* Back Button */}
        <Box sx={{ mb: 4 }}>
          <Button
            component={Link}
            href="/"
            startIcon={<ArrowLeft />}
            sx={{
              color: "text.secondary",
              fontWeight: 600,
              fontSize: "0.9rem",
              "&:hover": {
                color: "primary.main",
                bgcolor: "transparent",
                transform: "translateX(-4px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Back to Portfolio
          </Button>
        </Box>

        {/* Page Title */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 900,
            mb: 1.5,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            letterSpacing: "-0.03em",
          }}
        >
          My <span style={{ color: "#3b82f6" }}>Resume</span>
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: "600px", mx: "auto", fontSize: "1.1rem" }}
        >
          Explore my background, experience, and core skills, or access the print-ready CV below.
        </Typography>

        {/* Action Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          <Button
            component="a"
            href="/Matthew_Akinyemi_Professional_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<Eye />}
            sx={{
              py: 1.5,
              px: 4,
              fontWeight: 700,
              borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
              color: isDark ? "white" : "text.primary",
              backdropFilter: "blur(10px)",
              "&:hover": {
                borderColor: isDark ? "white" : "primary.main",
                bgcolor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            View CV (PDF)
          </Button>
          <Button
            component="a"
            href="/Matthew_Akinyemi_Professional_CV.pdf"
            download="Matthew_Akinyemi_Professional_CV.pdf"
            variant="contained"
            startIcon={<Download />}
            className="gradient-primary"
            sx={{
              py: 1.5,
              px: 4,
              fontWeight: 700,
              boxShadow: "0 10px 20px -8px rgba(59, 130, 246, 0.3)",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 15px 30px -8px rgba(59, 130, 246, 0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Download CV (PDF)
          </Button>
        </Stack>

        {/* Resume Card (Glassmorphism) */}
        <Card
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "24px",
            bgcolor: isDark ? "rgba(15, 15, 15, 0.5)" : "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid",
            borderColor: isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.05)",
            boxShadow: isDark
              ? "0 30px 60px -15px rgba(0,0,0,0.6)"
              : "0 30px 60px -15px rgba(0,0,0,0.06)",
          }}
        >
          {/* Header Info */}
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, letterSpacing: "-0.02em" }}>
                {contactInfo.name}
              </Typography>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 700, mb: 3 }}>
                {contactInfo.role}
              </Typography>

              <Stack spacing={1.5}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "text.secondary" }}>
                  <MapPin sx={{ fontSize: 20 }} />
                  <Typography variant="body2">{contactInfo.location}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "text.secondary" }}>
                  <Mail sx={{ fontSize: 20 }} />
                  <Typography
                    variant="body2"
                    component="a"
                    href={`mailto:${contactInfo.email}`}
                    sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "primary.main" } }}
                  >
                    {contactInfo.email}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "text.secondary" }}>
                  <Phone sx={{ fontSize: 20 }} />
                  <Typography
                    variant="body2"
                    component="a"
                    href={`tel:${contactInfo.phone}`}
                    sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "primary.main" } }}
                  >
                    {contactInfo.phone}
                  </Typography>
                </Box>
              </Stack>
            </Grid>

            {/* Social Icons / Quick Contacts */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: { xs: "flex-start", md: "flex-end" } }}>
              <Stack direction="row" spacing={2} sx={{ mt: { xs: 0, md: 1 } }}>
                <Tooltip title="GitHub" arrow>
                  <IconButton
                    href={contactInfo.github}
                    target="_blank"
                    sx={{
                      color: "text.secondary",
                      border: "1px solid",
                      borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                      bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)",
                      "&:hover": { color: "primary.main", borderColor: "primary.main", transform: "translateY(-3px)" },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn" arrow>
                  <IconButton
                    href={contactInfo.linkedin}
                    target="_blank"
                    sx={{
                      color: "text.secondary",
                      border: "1px solid",
                      borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                      bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)",
                      "&:hover": { color: "primary.main", borderColor: "primary.main", transform: "translateY(-3px)" },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }} />

          {/* About/Summary */}
          <Box sx={{ mb: 5 }}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
              <User sx={{ color: "#3b82f6" }} />
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                Professional Summary
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: "0.95rem" }}>
              Dedicated and result-driven Frontend & Full-Stack Developer with a strong proficiency in building modern web applications. 
              Highly skilled in React, Next.js, TypeScript, Node.js, and modern UI libraries like Material UI. Passionate about writing clean, 
              scalable, and high-performance code that enhances user experience and solves complex business problems.
            </Typography>
          </Box>

          {/* Work Experience */}
          <Box sx={{ mb: 5 }}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
              <Briefcase sx={{ color: "#3b82f6" }} />
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                Work Experience
              </Typography>
            </Stack>

            <Stack spacing={4}>
              {experiences.map((exp, index) => (
                <Box key={index}>
                  <Grid container justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1 }}>
                    <Grid size={{ xs: 12, sm: 8 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                        {exp.role}
                      </Typography>
                      <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                        {exp.company}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: { xs: "left", sm: "right" } }}>
                      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                        {exp.period}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {exp.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Technical Skills */}
          <Box>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
              <Code2 sx={{ color: "#3b82f6" }} />
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                Technical Skills
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {skills.map((category, index) => (
                <Grid size={{ xs: 12, sm: 4 }} key={index}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, textTransform: "uppercase", letterSpacing: 0.5, fontSize: "0.75rem" }}>
                    {category.category}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {category.items.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                          bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)",
                        }}
                      />
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default ResumePage;
