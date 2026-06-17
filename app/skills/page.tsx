"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Stack,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Gate Operations",
    skills: ["Automated Gate OS", "OCR License Plate Scanners", "Driver Self-Service Kiosks", "Pre-Gate Security Clearance", "Custom Entry Rules", "Fast-Pass Truck Logs"],
  },
  {
    category: "Yard Orchestration",
    skills: ["Dynamic Spotter Dispatch", "Automated Task Queuing", "Reefer Temperature Monitor", "Asset GPS Trailing", "Trailer Status Auditing", "Path Optimization"],
  },
  {
    category: "Data & Integrations",
    skills: ["TMS & WMS API Integrations", "Real-Time Telematics Sync", "MQTT Message Broker", "Live Console Dashboard", "Custom SLA Reporting", "Enterprise Security Compliance"],
  },
];

const SkillsSection = () => {
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
            color: "#ffffff"
          }}
        >
          System <span style={{ color: "#abff02" }}>Capabilities</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#a2a6b4",
            textAlign: "center",
            mb: 10,
            maxWidth: "600px",
            mx: "auto",
            fontWeight: 400,
          }}
        >
          Modular software infrastructure built for logistics terminals, distribution centers, and high-velocity shipping hubs.
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
                  bgcolor: "rgba(255,255,255,0.01)",
                  border: "1px solid rgba(88, 106, 106, 0.2)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "300ms",
                  "&:hover": {
                    borderColor: "#abff02",
                    "& .category-label": { color: "#abff02" }
                  }
                }}
              >
                <Typography
                  variant="h5"
                  className="category-label"
                  sx={{ fontWeight: 800, mb: 4, transition: "0.3s", color: "#ffffff", fontFamily: "var(--font-mono)", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase" }}
                >
                  {group.category}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1.5}>
                  {group.skills.map((skill) => (
                    <Box
                      key={skill}
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: "8px",
                        bgcolor: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.04)",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        color: "#a2a6b4",
                        transition: "300ms",
                        "&:hover": {
                          color: "#052424",
                          bgcolor: "#abff02",
                          borderColor: "#abff02",
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
