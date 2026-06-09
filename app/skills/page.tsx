"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  useTheme,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Material UI", "JavaScript", "HTML/CSS", "Tailwind"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Authentication", "REST APIs", "Cloudinary", "Paystack"],
  },
  {
    category: "Engineering",
    skills: ["Git/GitHub", "Deployment", "Responsive Design", "SEO", "Performance Optimization", "CI/CD"],
  },
];

const SkillsSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }} id="skills">
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
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            letterSpacing: "-0.02em",
          }}
        >
          Technical <span style={{ color: "#3b82f6" }}>Expertise</span>
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
          }}
        >
          A comprehensive toolkit focused on building scalable, 
          production-ready digital products.
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {skillGroups.map((group, groupIndex) => (
          <Grid size={{ xs: 12, md: 4 }} key={group.category}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                  border: "1px solid",
                  borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    borderColor: "primary.main",
                    "& .category-label": { color: "primary.main" }
                  }
                }}
              >
                <Typography
                  variant="h5"
                  className="category-label"
                  sx={{ fontWeight: 800, mb: 4, transition: "0.3s" }}
                >
                  {group.category}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap gap={1.5}>
                  {group.skills.map((skill) => (
                    <Box
                      key={skill}
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: "8px",
                        bgcolor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                        border: "1px solid",
                        borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "text.secondary",
                        transition: "0.3s",
                        "&:hover": {
                          color: "white",
                          bgcolor: "primary.main",
                          borderColor: "primary.main",
                          transform: "translateY(-2px)",
                        }
                      }}
                    >
                      {skill}
                    </Box>
                  ))}
                </Stack>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillsSection;
