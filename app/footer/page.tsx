"use client";
import React from "react";
import { Box, Container, Grid, Typography, Stack, IconButton, Divider, useTheme } from "@mui/material";
import { Mail, Phone, Globe } from "lucide-react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from "next/link";

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const socialLinks = [
    {
      icon: <FacebookIcon fontSize="small" />,
      url: "https://web.facebook.com/matthew.akinyemi.146",
      hoverColor: "#1877F2"
    },
    {
      icon: <TwitterIcon fontSize="small" />,
      url: "https://twitter.com/Mathew7746",
      hoverColor: "#1DA1F2"
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      url: "https://www.instagram.com/ak_mat1",
      hoverColor: "#E4405F"
    },
    {
      icon: <WhatsAppIcon fontSize="small" />,
      url: "https://wa.link/9tkk8l",
      hoverColor: "#25D366"
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.default",
        pt: { xs: 8, md: 10 },
        pb: 6,
        borderTop: "1px solid",
        borderColor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 4 }} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              fontWeight={900}
              sx={{ mb: 3, textAlign: { xs: "center", md: "left" }, letterSpacing: "-0.03em" }}
            >
              AKINYEMI<span style={{ color: "#3b82f6" }}>.</span>
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 4,
                maxWidth: { xs: "none", md: "300px" },
                textAlign: { xs: "center", md: "left" }
              }}
            >
              Building the future of the web with passion and precision. Let's create something extraordinary together.
            </Typography>
            <Stack
              direction="row"
              spacing={1.5}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {socialLinks.map((social, i) => (
                <IconButton
                  key={i}
                  size="small"
                  onClick={() => window.open(social.url, "_blank")}
                  sx={{
                    color: isDark ? "text.primary" : "#4b5563",
                    bgcolor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)",
                    border: "1px solid",
                    borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
                    transition: "0.3s",
                    "&:hover": {
                      color: "white",
                      bgcolor: social.hoverColor,
                      borderColor: social.hoverColor,
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 3 }}>
              Quick Links
            </Typography>
            <Stack spacing={2}>
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ "&:hover": { color: "primary.main" }, transition: "0.2s" }}
                  >
                    {item}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 3 }}>
              Services
            </Typography>
            <Stack spacing={2}>
              {["Web Development", "UI/UX Design", "SEO Optimization", "Mobile Solutions"].map(
                (item) => (
                  <Typography key={item} variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                )
              )}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 3 }}>
              Contact Info
            </Typography>
            <Stack spacing={2.5}>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Mail size={18} color="#3b82f6" />
                <Typography variant="body2" color="text.secondary">
                  matthewakinyemi24@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Phone size={18} color="#3b82f6" />
                <Typography variant="body2" color="text.secondary">
                  09025546836
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)", mb: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
            © {new Date().getFullYear()} Akinyemi. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Built with Next.js & MUI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
