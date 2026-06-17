"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Stack,
  Chip,
  Divider,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Terminal,
  FileText,
  Clock,
  Layers,
  Cpu,
  ShieldAlert,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const contactInfo = {
  name: "Terminal Yard OS",
  role: "API Specifications & SLA Documentation [v2.4]",
  location: "Dallas Hub & Global Edge Nodes",
  email: "ops@terminalindustries.com",
  hotline: "+1 (800) 555-YARD",
  github: "https://github.com/Mat-tech-bit/mattbase",
};

const endpoints = [
  {
    method: "POST",
    route: "/api/v2/gate/checkin",
    group: "GATE AUTOMATION OS",
    status: "201 Created",
    description: "Invoked automatically by OCR gate camera loops when inbound carrier trucks verify container IDs. Auto-checks security pre-clearance rules.",
  },
  {
    method: "GET",
    route: "/api/v2/moves/queue",
    group: "SPOTTER DISPATCH FLEET",
    status: "200 OK",
    description: "Returns an array of prioritized trailer shunts, dock door deadlines, and active spotter vehicle assignments.",
  },
  {
    method: "POST",
    route: "/api/v2/reefer/telemetry",
    group: "COLD CHAIN SENSOR SYSTEM",
    status: "202 Accepted",
    description: "Pushes raw IoT sensor inputs (temperature levels, fuel meters, door open alerts) from refrigerated containers directly to monitoring grids.",
  },
];

const technicalSpecs = [
  { category: "Hardware Config", items: ["OCR Gate Scanners", "Rugged Spotter Tablets", "Self-Service Kiosks", "MQTT Temp Sensors", "Pre-Gate Barriers"] },
  { category: "Security & SLA", items: ["99.99% Uptime Guarantee", "AES-256 SSL Encryption", "SOC2 Type II Compliant", "WMS Local Offline Cache", "ISO 27001 Certified"] },
  { category: "Systems Sync", items: ["Manhattan Active YMS", "SAP Yard Logistics", "BlueYonder TMS", "Oracle YMS Sync", "REST/Webhook Sync"] },
];

const ResumePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        pt: { xs: 6, md: 10 },
        pb: { xs: 10, md: 15 },
        overflow: "hidden",
        backgroundColor: "#052424",
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
            startIcon={<ArrowLeft size={16} />}
            sx={{
              color: "#a2a6b4",
              fontWeight: 600,
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              cursor: "pointer",
              "&:hover": {
                color: "#abff02",
                bgcolor: "transparent",
                transform: "translateX(-4px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Back to Dashboard
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
            color: "#ffffff"
          }}
        >
          System <span style={{ color: "#abff02" }}>Specifications</span>
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 6, maxWidth: "600px", mx: "auto", fontSize: "1.1rem", color: "#a2a6b4", lineHeight: 1.6 }}
        >
          Explore the integration architecture protocols, hardware configuration models, WMS compatibility layers, and SLA guarantees of Terminal Industries YOS.
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
            href="#endpoints"
            variant="outlined"
            startIcon={<Terminal size={16} />}
            sx={{
              py: 1.5,
              px: 4,
              fontWeight: 600,
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              letterSpacing: "1.5px",
              borderColor: "rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              borderRadius: "8px",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
              "&:hover": {
                borderColor: "#abff02",
                color: "#abff02",
                bgcolor: "rgba(255, 255, 255, 0.05)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            API Endpoints
          </Button>
          <Button
            component={Link}
            href="/#contact"
            variant="contained"
            startIcon={<FileText size={16} />}
            sx={{
              py: 1.5,
              px: 4,
              fontWeight: 600,
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              letterSpacing: "1.5px",
              bgcolor: "#abff02",
              color: "#052424",
              borderRadius: "8px",
              boxShadow: "none",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#c0ff3b",
                transform: "translateY(-2px)",
                boxShadow: "none",
              },
              transition: "all 0.3s ease",
            }}
          >
            Request API Credentials
          </Button>
        </Stack>

        {/* Specifications Card (Glassmorphism) */}
        <Card
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "24px",
            bgcolor: "rgba(255, 255, 255, 0.01)",
            border: "1px solid rgba(88, 106, 106, 0.2)",
            boxShadow: "none",
          }}
        >
          {/* Header Info */}
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, letterSpacing: "-0.02em", color: "#ffffff" }}>
                {contactInfo.name}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: "#abff02", fontFamily: "var(--font-mono)", fontSize: "14px", letterSpacing: "1px" }}>
                {contactInfo.role}
              </Typography>

              <Stack spacing={1.5}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "#a2a6b4" }}>
                  <Layers size={18} color="#abff02" />
                  <Typography variant="body2">{contactInfo.location}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "#a2a6b4" }}>
                  <Terminal size={18} color="#abff02" />
                  <Typography
                    variant="body2"
                    component="a"
                    href={`mailto:${contactInfo.email}`}
                    sx={{ color: "inherit", textDecoration: "none", "&:hover": { color: "#abff02" } }}
                  >
                    {contactInfo.email}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "#a2a6b4" }}>
                  <Cpu size={18} color="#abff02" />
                  <Typography variant="body2">{contactInfo.hotline}</Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: "rgba(88, 106, 106, 0.2)" }} />

          {/* About/Summary */}
          <Box sx={{ mb: 5 }}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
              <Cpu color="#abff02" size={20} />
              <Typography variant="h6" sx={{ fontWeight: 800, color: "#ffffff", fontSize: "16px" }}>
                Platform Architecture Overview
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ lineHeight: 1.8, fontSize: "0.95rem", color: "#a2a6b4" }}>
              Terminal Yard Operating System (YOS) is engineered on a highly optimized, decoupled event-driven architecture. The core routing engine is capable of processing sub-second telemetry feeds from port OCR cameras and MQTT IoT reefer sensors. System task dispatches sync to local vehicle tablets over resilient WebSocket loops, allowing yard operators to run shunts in disconnected offline modes when corporate networks degrade.
            </Typography>
          </Box>

          {/* API Endpoints */}
          <Box sx={{ mb: 5 }} id="endpoints">
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
              <Terminal color="#abff02" size={20} />
              <Typography variant="h6" sx={{ fontWeight: 800, color: "#ffffff", fontSize: "16px" }}>
                Core API Integration Endpoints
              </Typography>
            </Stack>

            <Stack spacing={4}>
              {endpoints.map((ep, index) => (
                <Box key={index} sx={{ borderLeft: "2px solid rgba(171, 255, 2, 0.3)", pl: 2.5 }}>
                  <Grid container justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1 }}>
                    <Grid size={{ xs: 12, sm: 8 }}>
                      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 0.5 }}>
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.2,
                            borderRadius: "4px",
                            bgcolor: ep.method === "POST" ? "rgba(171, 255, 2, 0.1)" : "rgba(255,255,255,0.05)",
                            color: ep.method === "POST" ? "#abff02" : "#ffffff",
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            fontWeight: 700,
                            border: "1px solid rgba(171, 255, 2, 0.2)"
                          }}
                        >
                          {ep.method}
                        </Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#ffffff", fontFamily: "var(--font-mono)", fontSize: "13px" }}>
                          {ep.route}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: "#a2a6b4", fontSize: "11px", fontFamily: "var(--font-mono)" }}>
                        {ep.group}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: { xs: "left", sm: "right" } }}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: "#abff02", fontFamily: "var(--font-mono)", fontSize: "11px" }}>
                        {ep.status}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" sx={{ lineHeight: 1.7, color: "#a2a6b4" }}>
                    {ep.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Technical Specs & SLA */}
          <Box>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
              <ShieldAlert color="#abff02" size={20} />
              <Typography variant="h6" sx={{ fontWeight: 800, color: "#ffffff", fontSize: "16px" }}>
                System Integrations & SLA
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {technicalSpecs.map((spec, index) => (
                <Grid size={{ xs: 12, sm: 4 }} key={index}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, textTransform: "uppercase", letterSpacing: 0.5, fontSize: "0.75rem", color: "#ffffff", fontFamily: "var(--font-mono)" }}>
                    {spec.category}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {spec.items.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          borderColor: "rgba(88, 106, 106, 0.2)",
                          bgcolor: "rgba(255,255,255,0.01)",
                          color: "#a2a6b4",
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
