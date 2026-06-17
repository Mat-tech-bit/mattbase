"use client";
import React from "react";
import {
  Box,
  Card,
  Typography,
  Container,
  Stack,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { Code2, Settings, Clock, Truck, ShieldAlert, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Gate Automation OS",
    description: "Clear carrier trucks in under 2 minutes with automated OCR verification, driver self-check kiosks, and gate control loops.",
    icon: <Clock size={32} />,
    color: "#abff02",
  },
  {
    title: "Spotter Fleet Dispatch",
    description: "Minimize empty shunter runs and driver idle times with algorithmic task dispatching and real-time gate prioritizations.",
    icon: <Truck size={32} />,
    color: "#abff02",
  },
  {
    title: "Dock-to-Door Scheduler",
    description: "Intelligent scheduling timelines matching incoming loads to open warehouse docks based on carrier priority and crew ETAs.",
    icon: <Settings size={32} />,
    color: "#abff02",
  },
  {
    title: "Reefer Telemetry Alerts",
    description: "Continuous IoT temperature logging and real-time MQTT/SMS notifications for power or temperature deviations.",
    icon: <ShieldAlert size={32} />,
    color: "#abff02",
  },
  {
    title: "Enterprise API Core",
    description: "Seamless REST API integrations connecting Terminal YOS to your corporate WMS/TMS in a single dev sprint.",
    icon: <Code2 size={32} />,
    color: "#abff02",
  },
  {
    title: "Operational Analytics",
    description: "Generate historical audits, live dwell-time tracking reports, and spotter utility rates for terminal management.",
    icon: <BarChart3 size={32} />,
    color: "#abff02",
  },
];

const experiences = [
  {
    role: "Yard Mapping & Setup",
    company: "SITE ASSESSMENT",
    period: "Weeks 1 - 2",
    description: "We map physical terminal coordinates, digitize loading dock bays, and coordinate initial network connectivity.",
  },
  {
    role: "Hardware Rollout",
    company: "OCR & KIOSK DEPLOYMENT",
    period: "Weeks 3 - 4",
    description: "Install incoming/outgoing OCR license scanners, driver check-in kiosks, and spotter rugged vehicle tablets.",
  },
  {
    role: "Universal WMS API Sync",
    company: "SYSTEMS INTEGRATION",
    period: "Weeks 5 - 6",
    description: "Connect Terminal API controllers with existing TMS/WMS tools (SAP, Manhattan) to align incoming freight queues.",
  },
  {
    role: "Automated Orchestration",
    company: "SYSTEM LIVE GO-LIVE",
    period: "Week 7+",
    description: "Transition to AI-driven spotter dispatching, gate checks, and automated dock door scheduling.",
  },
];

const PortfolioPage = () => {
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
              color: "#ffffff"
            }}
          >
            System <span style={{ color: "#abff02" }}>Solutions</span>
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
              lineHeight: 1.6,
            }}
          >
            Integrated hardware and software modules designed to eliminate yard latency and automate terminal movements.
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
                    borderRadius: 3,
                    bgcolor: "rgba(255,255,255,0.01)",
                    border: "1px solid rgba(88, 106, 106, 0.2)",
                    transition: "300ms",
                    "&:hover": {
                      borderColor: "#abff02",
                      transform: "translateY(-5px)",
                      bgcolor: "rgba(171, 255, 2, 0.02)",
                    }
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "12px",
                      bgcolor: "rgba(171, 255, 2, 0.1)",
                      color: "#abff02",
                      mb: 3,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" fontWeight={800} gutterBottom sx={{ letterSpacing: "-0.01em", color: "#ffffff" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: "0.95rem", color: "#a2a6b4" }}>
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
              color: "#ffffff"
            }}
          >
            Deployment <span style={{ color: "#abff02" }}>Roadmap</span>
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
              bgcolor: "#abff02",
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
                    bgcolor: "#abff02",
                    border: "4px solid",
                    borderColor: "#052424",
                    transform: { xs: "translateX(-50%)", md: "translateX(-50%)" },
                    zIndex: 2,
                  }}
                />

                <Box sx={{ width: { xs: "100%", md: "45%" } }}>
                  <Card
                    sx={{
                      p: 4,
                      borderRadius: 3,
                      bgcolor: "rgba(255,255,255,0.01)",
                      border: "1px solid rgba(88, 106, 106, 0.2)",
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1, color: "#abff02", fontFamily: "var(--font-mono)", fontSize: "12px" }}>
                      {exp.period}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: "#ffffff" }}>
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#a2a6b4", fontWeight: 700, mb: 2, textTransform: "uppercase", letterSpacing: 1, fontSize: "11px" }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#a2a6b4", lineHeight: 1.7 }}>
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