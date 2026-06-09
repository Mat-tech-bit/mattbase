"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  Stack,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Adebayo",
    role: "Health Center Administrator",
    content: "Akinyemi transformed our administrative workflow. The health center portal is intuitive, lightning-fast, and has completely neutralized our record-keeping issues.",
    avatar: "/testimonial1.jpg"
  },
  {
    name: "Sarah Chen",
    role: "Startup Founder",
    content: "The most technical yet design-conscious developer I've worked with. He doesn't just build features; he builds products that users actually love.",
    avatar: "/testimonial2.jpg"
  },
  {
    name: "John Miller",
    role: "E-Commerce Manager",
    content: "His integration of Paystack was flawless. Transactions are handled with such precision that our support tickets related to payments dropped to zero.",
    avatar: "/testimonial3.jpg"
  },
];

const TrustSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

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
            letterSpacing: "-0.02em"
          }}
        >
          Built on <span style={{ color: "#3b82f6" }}>Trust</span>
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
          Words from collaborators and clients who have seen the impact 
          of production-grade engineering.
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
                  bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                  border: "1px solid",
                  borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                  position: "relative"
                }}
              >
                <Quote 
                  size={40} 
                  style={{ 
                    position: "absolute", 
                    top: 20, 
                    right: 20, 
                    opacity: 0.05, 
                    color: theme.palette.primary.main 
                  }} 
                />
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, lineHeight: 1.8, fontStyle: "italic" }}>
                  &quot;{testi.content}&quot;
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: "primary.main", fontWeight: 700 }}>{testi.name[0]}</Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{testi.name}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>{testi.role}</Typography>
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
          borderRadius: 4,
          bgcolor: isDark ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)",
          border: "1px dashed",
          borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          textAlign: "center"
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Current Focus</Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
          Scaling distributed systems and exploring advanced LLM integrations for productivity tools.
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" gap={1}>
          {["Building Distributed Systems", "Learning Rust", "Optimizing React performance"].map((tag) => (
            <Box
              key={tag}
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: "100px",
                bgcolor: isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.05)",
                color: "primary.main",
                fontSize: "0.8rem",
                fontWeight: 700
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
