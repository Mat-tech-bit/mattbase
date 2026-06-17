"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Avatar,
  Stack,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Vance",
    role: "VP of Logistics, Global Retailer",
    content: "Terminal YOS has completely automated our gate check-in loops. Our driver wait times went from 45 minutes to under 2 minutes, and gate logs are 100% digitized.",
    avatar: "M"
  },
  {
    name: "Helena Rostova",
    role: "Director of Supply Chain Technology",
    content: "The API integrations were seamless. We hooked Terminal YOS into our Manhattan WMS in less than a week, and our spotters love the simple, rugged vehicle tablet interface.",
    avatar: "H"
  },
  {
    name: "David Kim",
    role: "Terminal Operations Manager, Port of Houston Gate 4",
    content: "Orchestrating 1,200 trailer shunts daily with zero spotter collision incidents and perfect dock door synchronization. Outstanding SLA reliability.",
    avatar: "D"
  },
];

const TrustSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }} id="trust">
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
          Enterprise <span style={{ color: "#abff02" }}>Trust</span>
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
          Coordinating missions-critical yard operations for terminal networks and global distribution centers.
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ mb: 10 }}>
        {testimonials.map((testi, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  bgcolor: "rgba(255, 255, 255, 0.01)",
                  border: "1px solid rgba(88, 106, 106, 0.2)",
                  position: "relative",
                  boxShadow: "none"
                }}
              >
                <Quote 
                  size={40} 
                  style={{ 
                    position: "absolute", 
                    top: 20, 
                    right: 20, 
                    opacity: 0.05, 
                    color: "#abff02" 
                  }} 
                />
                <Typography variant="body1" sx={{ color: "#a2a6b4", mb: 4, lineHeight: 1.8, fontStyle: "italic", fontSize: "0.95rem" }}>
                  &quot;{testi.content}&quot;
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: "#abff02", color: "#052424", fontWeight: 700, fontFamily: "var(--font-mono)", fontSize: "14px" }}>{testi.avatar}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#ffffff" }}>{testi.name}</Typography>
                    <Typography variant="body2" sx={{ color: "#a2a6b4" }}>{testi.role}</Typography>
                  </Box>
                </Stack>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* GitHub Graph / Status Mockup */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        sx={{
          p: 6,
          borderRadius: 3,
          bgcolor: "rgba(255, 255, 255, 0.01)",
          border: "1px dashed rgba(88, 106, 106, 0.3)",
          textAlign: "center"
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: "#ffffff", fontFamily: "var(--font-mono)", fontSize: "16px", letterSpacing: "1px", textTransform: "uppercase" }}>System Telemetry & Health</Typography>
        <Typography variant="body1" sx={{ color: "#a2a6b4", mb: 4 }}>
          Live API heartbeat logs and fleet utilization stats aggregated across all shipping terminals.
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" gap={1}>
          {["API Uptime: 99.99%", "Gate Check: <90 seconds", "Spotter Efficiency: +35%", "Average API Latency: 32ms"].map((tag) => (
            <Box
              key={tag}
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: "100px",
                bgcolor: "rgba(171, 255, 2, 0.1)",
                color: "#abff02",
                fontSize: "0.8rem",
                fontWeight: 700,
                fontFamily: "var(--font-mono)"
              }}
            >
              {tag}
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default TrustSection;
