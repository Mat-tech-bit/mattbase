"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  Container,
  Grid,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../data";

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
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
          bgcolor: "rgba(255, 255, 255, 0.01)",
          border: "1px solid rgba(88, 106, 106, 0.2)",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "none",
          transition: "all 400ms cubic-bezier(0.16, 1, 0.3, 1)",
          "&:hover": {
            borderColor: "#abff02",
            transform: "translateY(-6px)",
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
            }}
          />
          <Box sx={{ position: "absolute", top: 12, right: 12 }}>
            <Chip
              label={project.category}
              sx={{
                bgcolor: "#052424",
                color: "#abff02",
                fontWeight: 700,
                fontSize: "0.65rem",
                height: "24px",
                border: "1px solid rgba(171,255,2,0.3)",
                borderRadius: "6px",
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase"
              }}
            />
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1, p: { xs: 2.5, md: 3 } }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 800, 
              mb: 1.5, 
              letterSpacing: "-0.02em",
              fontSize: { xs: "1.15rem", md: "1.25rem" },
              color: "#ffffff"
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ 
              mb: 2.5, 
              lineHeight: 1.6, 
              fontSize: "0.875rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              minHeight: "4.8em",
              color: "#a2a6b4"
            }}
          >
            {project.description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" gap={0.75} sx={{ mb: 2.5 }}>
            {project.tech.map((tech: string) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{ 
                  fontSize: "0.65rem", 
                  fontWeight: 600,
                  borderColor: "rgba(255,255,255,0.06)",
                  bgcolor: "rgba(255,255,255,0.02)",
                  color: "#a2a6b4",
                  height: "22px",
                  fontFamily: "var(--font-mono)"
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
                transition={{ duration: 0.3 }}
              >
                <Box sx={{ pt: 2, borderTop: "1px solid rgba(88, 106, 106, 0.2)", mt: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 0.5, textTransform: "uppercase", fontSize: "0.75rem", color: "#abff02", fontFamily: "var(--font-mono)" }}>
                    The Bottleneck
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: "#a2a6b4", fontSize: "0.8rem", lineHeight: 1.5 }}>{project.problem}</Typography>
                  
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 0.5, textTransform: "uppercase", fontSize: "0.75rem", color: "#abff02", fontFamily: "var(--font-mono)" }}>
                    The Orchestrator Solution
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: "#a2a6b4", fontSize: "0.8rem", lineHeight: 1.5 }}>{project.solution}</Typography>

                  <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 0.5, textTransform: "uppercase", fontSize: "0.75rem", color: "#abff02", fontFamily: "var(--font-mono)" }}>
                    System Impact
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: "#a2a6b4", fontStyle: "italic", fontSize: "0.8rem", lineHeight: 1.5 }}>{project.impact}</Typography>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            onClick={() => setExpanded(!expanded)}
            endIcon={expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            sx={{ 
              mt: 0.5, 
              fontWeight: 700, 
              color: "#abff02", 
              fontSize: "0.775rem",
              fontFamily: "var(--font-mono)",
              p: 0,
              minWidth: 0,
              cursor: "pointer",
              "&:hover": { bgcolor: "transparent" }
            }}
          >
            {expanded ? "Show Less" : "System Case Peek"}
          </Button>
        </CardContent>

        <Box sx={{ p: { xs: 2.5, md: 3 }, pt: 0, display: "flex", gap: 1.5 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Terminal size={16} />}
            href={project.github}
            target="_blank"
            sx={{ 
              py: 1,
              fontWeight: 600,
              fontSize: "10px",
              fontFamily: "var(--font-mono)",
              borderRadius: "8px",
              borderColor: "rgba(255,255,255,0.1)",
              color: "#ffffff",
              cursor: "pointer",
              "&:hover": {
                borderColor: "#abff02",
                color: "#abff02",
              }
            }}
          >
            API Details
          </Button>
          <Button
            fullWidth
            variant="contained"
            startIcon={<ExternalLink size={16} />}
            href={project.live}
            sx={{ 
              py: 1, 
              fontWeight: 600,
              fontSize: "10px",
              fontFamily: "var(--font-mono)",
              borderRadius: "8px",
              bgcolor: "#abff02",
              color: "#052424",
              boxShadow: "none",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#c0ff3b",
                boxShadow: "none",
              }
            }}
          >
            Demo Request
          </Button>
        </Box>
      </Card>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
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
            color: "#ffffff"
          }}
        >
          System <span style={{ color: "#abff02" }}>Consoles</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#a2a6b4",
            textAlign: "center",
            mb: 10,
            maxWidth: "700px",
            mx: "auto",
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          Interactive control centers within Terminal YOS, providing live telemetry, automation queues, and B2B logistics administration.
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
            onClick={() => setFilter(cat)}
            variant={filter === cat ? "contained" : "outlined"}
            sx={{
              borderRadius: "100px",
              px: { xs: 3, sm: 4 },
              py: 1.2,
              fontWeight: 600,
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              borderColor: filter === cat ? "#abff02" : "rgba(255, 255, 255, 0.1)",
              bgcolor: filter === cat ? "#abff02" : "transparent",
              color: filter === cat ? "#052424" : "#a2a6b4",
              cursor: "pointer",
              "&:hover": {
                borderColor: "#abff02",
                bgcolor: filter === cat ? "#c0ff3b" : "rgba(255, 255, 255, 0.05)",
                color: filter === cat ? "#052424" : "#ffffff",
              },
            }}
          >
            {cat}
          </Button>
        ))}
      </Stack>

      {/* Projects Grid */}
      <Grid container spacing={3}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.title}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Container>
  );
};

export default ProjectsPage;