"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  useTheme,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { Code2, Cpu, Rocket, Target } from "lucide-react";

const AboutStory = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const stats = [
    { label: "Projects Completed", value: "15+", icon: <Rocket size={24} /> },
    { label: "Lines of Code", value: "100K+", icon: <Code2 size={24} /> },
    { label: "Satisfied Clients", value: "10+", icon: <Target size={24} /> },
    { label: "APIs Integrated", value: "25+", icon: <Cpu size={24} /> },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }} id="about-story">
      <Grid container spacing={8} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, letterSpacing: "-0.02em" }}>
              The Journey from <br />
              <span style={{ color: "#3b82f6" }}>Idea to Production</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
              My engineering journey began with a passion for crafting pixel-perfect interfaces, 
              but quickly evolved into a deep fascination with the mechanics that power the modern web. 
              Today, I bridge the gap between stunning design and robust backend architecture.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
              I don&apos;t just write code; I solve practical problems. Whether it&apos;s architecting a 
              healthcare management system for OAU or integrating complex payment gateways with 
              Paystack, my focus is always on delivering production-ready solutions that scale.
            </Typography>

            <Grid container spacing={3}>
              {stats.map((stat, i) => (
                <Grid size={{ xs: 6 }} key={i}>
                  <Box sx={{ p: 2, borderRadius: 2, bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)", border: "1px solid", borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }}>
                    <Box sx={{ color: "primary.main", mb: 1 }}>{stat.icon}</Box>
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>{stat.value}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>{stat.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                bgcolor: isDark ? "rgba(20, 20, 20, 0.5)" : "#fff",
                border: "1px solid",
                borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                backdropFilter: "blur(20px)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Technical Philosophy</Typography>
              <Stack spacing={3}>
                {[
                  { title: "Clean Code", desc: "Prioritizing readability and maintainability in every commit." },
                  { title: "Performance First", desc: "Optimizing Core Web Vitals for seamless user experiences." },
                  { title: "Scalable Architecture", desc: "Designing systems that grow with the business needs." },
                ].map((item, i) => (
                  <Box key={i}>
                    <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: 700, color: "primary.main" }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>{item.desc}</Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
            {/* Background Accent */}
            <Box
              sx={{
                position: "absolute",
                top: -20,
                right: -20,
                width: "100%",
                height: "100%",
                bgcolor: "primary.main",
                borderRadius: 4,
                opacity: 0.1,
                zIndex: 0,
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutStory;
