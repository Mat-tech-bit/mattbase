"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  Container,
  useTheme,
  IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../data";

const ProjectCard = ({ project, index, isDark }: { project: any, index: number, isDark: boolean }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
          border: "1px solid",
          borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            borderColor: "primary.main",
            transform: "translateY(-8px)",
            boxShadow: isDark 
              ? "0 30px 60px -12px rgba(0,0,0,0.5), 0 18px 36px -18px rgba(59, 130, 246, 0.3)"
              : "0 30px 60px -12px rgba(0,0,0,0.05)",
          },
        }}
      >
        <Box sx={{ position: "relative", pt: "56.25%", overflow: "hidden" }}>
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{ 
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              "&:hover": { scale: 1.05 },
              filter: isDark ? "brightness(0.85)" : "none"
            }}
          />
          <Box sx={{ position: "absolute", top: 16, right: 16 }}>
            <Chip
              label={project.category}
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(12px)",
                color: "white",
                fontWeight: 700,
                fontSize: "0.75rem",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 } }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, letterSpacing: "-0.01em" }}>
            {project.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, lineHeight: 1.7, fontSize: "1rem" }}
          >
            {project.description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
            {project.tech.map((tech: string) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{ 
                  fontSize: "0.7rem", 
                  fontWeight: 600,
                  borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                  color: "text.secondary"
                }}
              />
            ))}
          </Stack>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Box sx={{ pt: 2, borderTop: "1px solid", borderColor: "divider", mt: 2 }}>
                  <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 800, mb: 1, textTransform: "uppercase" }}>
                    The Problem
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>{project.problem}</Typography>
                  
                  <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 800, mb: 1, textTransform: "uppercase" }}>
                    The Solution
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: "text.secondary" }}>{project.solution}</Typography>

                  <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 800, mb: 1, textTransform: "uppercase" }}>
                    Business Impact
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: "text.secondary", fontStyle: "italic" }}>{project.impact}</Typography>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            onClick={() => setExpanded(!expanded)}
            endIcon={expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            sx={{ mt: 1, fontWeight: 700, color: "primary.main" }}
          >
            {expanded ? "Show Less" : "Case Study Peek"}
          </Button>
        </CardContent>

        <Box sx={{ p: { xs: 3, md: 4 }, pt: 0, display: "flex", gap: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Code2 size={18} />}
            href={project.github}
            target="_blank"
            sx={{ 
              py: 1.5,
              fontWeight: 700,
              borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
              color: "text.primary"
            }}
          >
            Code
          </Button>
          <Button
            fullWidth
            variant="contained"
            startIcon={<ExternalLink size={18} />}
            href={project.live}
            target="_blank"
            className="gradient-primary"
            sx={{ py: 1.5, fontWeight: 700 }}
          >
            Live Demo
          </Button>
        </Box>
      </Card>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 10, md: 20 } }} id="projects">
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
            letterSpacing: "-0.03em",
          }}
        >
          Featured <span style={{ color: "#3b82f6" }}>Projects</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            textAlign: "center",
            mb: 10,
            maxWidth: "700px",
            mx: "auto",
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Deep dives into real-world applications I&apos;ve engineered, focusing on 
          performance, user experience, and business goals.
        </Typography>
      </motion.div>

      {/* Filter Buttons */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mb: 8, flexWrap: "wrap", gap: 2 }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? "contained" : "outlined"}
            onClick={() => setFilter(cat)}
            className={filter === cat ? "gradient-primary" : ""}
            sx={{
              borderRadius: "100px",
              px: { xs: 3, sm: 4 },
              py: 1.2,
              fontWeight: 700,
              fontSize: "0.9rem",
              borderColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
              color: filter === cat ? "white" : "text.secondary",
              "&:hover": { borderColor: "primary.main" },
            }}
          >
            {cat}
          </Button>
        ))}
      </Stack>

      {/* Projects Grid */}
      <Grid container spacing={4}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={project.title}>
              <ProjectCard project={project} index={index} isDark={isDark} />
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Container>
  );
};

export default ProjectsPage;