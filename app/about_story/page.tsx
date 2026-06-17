"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { Clock, Truck, Leaf, Activity } from "lucide-react";

const AboutStory = () => {
  const stats = [
    { label: "Gate Dwell Time", value: "-60%", icon: <Clock size={24} /> },
    { label: "Spotter Moves / Hr", value: "+35%", icon: <Truck size={24} /> },
    { label: "Idling Emissions", value: "-28%", icon: <Leaf size={24} /> },
    { label: "Annual Movements", value: "1.2M+", icon: <Activity size={24} /> },
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
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 4, letterSpacing: "-0.02em", color: "#ffffff" }}>
              The Shift from Static Tracking <br />
              to <span style={{ color: "#abff02" }}>Real-Time Orchestration</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "#a2a6b4", mb: 3, fontSize: "1.1rem", lineHeight: 1.8 }}>
              Traditional logistics yards operate as black boxes. Information remains siloed inside manual spreadsheets, whiteboards, or radio channels, leading to carrier bottlenecks and idle crews. Terminal Yard Operating System (YOS) replaces static logs with a live, dynamic orchestrator.
            </Typography>
            <Typography variant="body1" sx={{ color: "#a2a6b4", mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
              Our platform coordinates gate entries, spotter movements, and dock allocations automatically. By tracking every asset and dispatching optimized tasks in real-time, Terminal YOS turns a chaotic yard into a synchronized, efficient machine.
            </Typography>

            <Grid container spacing={3}>
              {stats.map((stat, i) => (
                <Grid size={{ xs: 6 }} key={i}>
                  <Box sx={{ p: 2, borderRadius: 2, bgcolor: "rgba(255,255,255,0.01)", border: "1px solid rgba(88, 106, 106, 0.2)" }}>
                    <Box sx={{ color: "#abff02", mb: 1 }}>{stat.icon}</Box>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#ffffff" }}>{stat.value}</Typography>
                    <Typography variant="body2" sx={{ color: "#a2a6b4" }}>{stat.label}</Typography>
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
                borderRadius: 3,
                bgcolor: "#052424",
                border: "1px solid #586a6a",
                backdropFilter: "blur(20px)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: "#ffffff", fontFamily: "var(--font-mono)", fontSize: "16px", letterSpacing: "1px", textTransform: "uppercase" }}>System Core Principles</Typography>
              <Stack spacing={3}>
                {[
                  { title: "Dynamic Task Dispatching", desc: "Algorithmic shunting logic coordinates spotter movements, minimizing fuel waste and empty runs." },
                  { title: "OCR Intelligent Gates", desc: "Computer vision models automatically extract trailer IDs and license plates, checking them in under 2 minutes." },
                  { title: "Enterprise WMS/TMS Sync", desc: "Native API connectors plug directly into Manhattan, SAP, and BlueYonder to sync shipping and inventory schedules." },
                ].map((item, i) => (
                  <Box key={i}>
                    <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#abff02", mb: 0.5 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: "#a2a6b4", lineHeight: 1.6 }}>{item.desc}</Typography>
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
                bgcolor: "#abff02",
                borderRadius: 3,
                opacity: 0.05,
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
