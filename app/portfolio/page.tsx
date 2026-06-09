"use client";
import React from "react";
import {
  Box,
  Card,
  Typography,
  Container,
  Grid,
  Stack,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Code2, Palette, Search, Layers, Zap, ShieldCheck, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    description: "Building scalable, high-performance web applications using MERN stack and Next.js.",
    icon: <Code2 size={32} />,
    color: "#3b82f6",
  },
  {
    title: "Payment Integration",
    description: "Seamless Paystack and Stripe integrations for secure, robust financial transactions.",
    icon: <Zap size={32} />,
    color: "#10b981",
  },
  {
    title: "UI/UX Implementation",
    description: "Transforming complex designs into pixel-perfect, responsive React components.",
    icon: <Palette size={32} />,
    color: "#8b5cf6",
  },
  {
    title: "Admin Dashboards",
    description: "Developing comprehensive back-office suites with real-time data visualization.",
    icon: <BarChart3 size={32} />,
    color: "#f59e0b",
  },
  {
    title: "Security & Auth",
    description: "Implementing enterprise-grade authentication with JWT and secure session handling.",
    icon: <ShieldCheck size={32} />,
    color: "#ef4444",
  },
  {
    title: "SEO & Optimization",
    description: "Engineering for speed and search visibility to maximize business impact.",
    icon: <Search size={32} />,
    color: "#06b6d4",
  },
];

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

const PortfolioPage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 15, md: 25 } }} id="portfolio">
      {/* Services Section */}
      <Box sx={{ mb: { xs: 15, md: 25 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              textAlign: "center",
              fontSize: { xs: "3rem", md: "4rem" },
              letterSpacing: "-0.02em",
            }}
          >
            Professional <span style={{ color: "#3b82f6" }}>Services</span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              textAlign: "center",
              mb: 10,
              maxWidth: "600px",
              mx: "auto",
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Tailored engineering solutions designed to solve real-world 
            business challenges and elevate your digital presence.
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    borderRadius: 4,
                    bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                    border: "1px solid",
                    borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                    transition: "0.3s",
                    "&:hover": {
                      borderColor: "primary.main",
                      transform: "translateY(-5px)",
                      bgcolor: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
                    }
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "12px",
                      bgcolor: isDark ? `${service.color}20` : `${service.color}10`,
                      color: service.color,
                      mb: 3,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" fontWeight={800} gutterBottom sx={{ letterSpacing: "-0.01em" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: "0.95rem" }}>
                    {service.description}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience Section */}
      <Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 10,
              textAlign: "center",
              fontSize: { xs: "3rem", md: "4rem" },
              letterSpacing: "-0.02em",
            }}
          >
            Engineering <span style={{ color: "#3b82f6" }}>Journey</span>
          </Typography>
        </motion.div>

        <Box sx={{ position: "relative", maxWidth: "800px", mx: "auto" }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 20, md: "50%" },
              top: 0,
              bottom: 0,
              width: 2,
              bgcolor: "primary.main",
              opacity: 0.2,
              transform: { md: "translateX(-50%)" },
            }}
          />

          <Stack spacing={6}>
            {experiences.map((exp, index) => (
              <Box
                component={motion.div}
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "flex-start", md: index % 2 === 0 ? "flex-end" : "flex-start" },
                  width: "100%",
                  position: "relative",
                  pl: { xs: 8, md: 0 },
                }}
              >
                {/* Dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: 20, md: "50%" },
                    top: 24,
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    border: "4px solid",
                    borderColor: "background.default",
                    transform: { xs: "translateX(-50%)", md: "translateX(-50%)" },
                    zIndex: 2,
                  }}
                />

                <Box sx={{ width: { xs: "100%", md: "45%" } }}>
                  <Card
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      bgcolor: isDark ? "rgba(255,255,255,0.02)" : "#fff",
                      border: "1px solid",
                      borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                    }}
                  >
                    <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 800, mb: 1 }}>
                      {exp.period}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontWeight: 700, mb: 2, textTransform: "uppercase", letterSpacing: 1 }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                      {exp.description}
                    </Typography>
                  </Card>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default PortfolioPage;