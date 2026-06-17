"use client";
import React from "react";
import { Box, Container, Grid, Typography, Stack, IconButton, Divider } from "@mui/material";
import { Mail, MapPin } from "lucide-react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#052424", // canvas
        pt: { xs: 8, md: 10 },
        pb: 6,
        borderTop: "1px solid #586a6a", // hairline
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 4 }} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              fontWeight={900}
              sx={{ mb: 3, textAlign: { xs: "center", md: "left" }, letterSpacing: "1.5px", fontFamily: "var(--font-mono)", color: "#ffffff" }}
            >
              TERMINAL<span style={{ color: "#abff02" }}>_</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: { xs: "none", md: "300px" },
                textAlign: { xs: "center", md: "left" },
                color: "#a2a6b4",
                lineHeight: 1.6
              }}
            >
              Terminal Yard Operating System (YOS) is the high-performance orchestration platform replacing manual friction with real-time yard automation.
            </Typography>
            <Stack
              direction="row"
              spacing={1.5}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <IconButton
                size="small"
                onClick={() => window.open("https://github.com/Mat-tech-bit/mattbase", "_blank")}
                sx={{
                  color: "#ffffff",
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 300ms cubic-bezier(0.19, 1, 0.22, 1)",
                  "&:hover": {
                    color: "#052424",
                    bgcolor: "#abff02",
                    borderColor: "#abff02",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => window.open("https://linkedin.com", "_blank")}
                sx={{
                  color: "#ffffff",
                  bgcolor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 300ms cubic-bezier(0.19, 1, 0.22, 1)",
                  "&:hover": {
                    color: "#052424",
                    bgcolor: "#abff02",
                    borderColor: "#abff02",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 3, color: "#ffffff" }}>
              System links
            </Typography>
            <Stack spacing={2}>
              {[
                { name: "Platform", href: "/#about-story" },
                { name: "Capabilities", href: "/#skills" },
                { name: "Solutions", href: "/#portfolio" },
                { name: "Consoles", href: "/#projects" },
                { name: "SLA Specs", href: "/resume" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="body2"
                    sx={{ "&:hover": { color: "#abff02" }, transition: "0.2s", color: "#a2a6b4" }}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 3, color: "#ffffff" }}>
              Core Solutions
            </Typography>
            <Stack spacing={2}>
              {["Automated Gate OS", "Spotter Dispatch", "Dock Door Scheduling", "Telemetry Reefer Alerts"].map(
                (item) => (
                  <Typography key={item} variant="body2" sx={{ color: "#a2a6b4" }}>
                    {item}
                  </Typography>
                )
              )}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 3, color: "#ffffff" }}>
              Contact Details
            </Typography>
            <Stack spacing={2.5}>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Mail size={18} color="#abff02" />
                <Typography variant="body2" sx={{ color: "#a2a6b4" }}>
                  ops@terminalindustries.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <MapPin size={18} color="#abff02" />
                <Typography variant="body2" sx={{ color: "#a2a6b4" }}>
                  Dallas Supply Chain Hub, TX
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.05)", mb: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ textAlign: "center", color: "#a2a6b4" }}>
            © {new Date().getFullYear()} Terminal Industries. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "#a2a6b4" }}>
            Yard Operating System Console v2.4
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

