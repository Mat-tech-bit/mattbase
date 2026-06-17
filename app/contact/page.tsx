"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Container,
  Stack,
  IconButton,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck, Terminal } from "lucide-react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Demo Request Submitted:", formData);
    alert("Demo request sent successfully! An operations engineer will contact you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: <Mail size={24} />, label: "Sales & Operations", value: "ops@terminalindustries.com" },
    { icon: <Phone size={24} />, label: "Integration Hotline", value: "+1 (800) 555-YARD" },
    { icon: <MapPin size={24} />, label: "Operations Center", value: "Dallas Supply Chain Hub, TX" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 15, md: 25 } }} id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            mb: 2,
            textAlign: "center",
            fontSize: { xs: "3rem", md: "4.5rem" },
            letterSpacing: "-0.04em",
            color: "#ffffff"
          }}
        >
          Schedule a <span style={{ color: "#abff02" }}>System Demo</span>
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
          Learn how Terminal Yard Operating System can eliminate manual bottlenecks, optimize shunter dispatching, and streamline gates.
        </Typography>
      </motion.div>

      <Grid container spacing={8}>
        {/* Contact Info */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={5}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "16px",
                      bgcolor: "rgba(171, 255, 2, 0.1)",
                      color: "#abff02",
                      display: "flex",
                      border: "1px solid rgba(171, 255, 2, 0.2)",
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 1.5, color: "#abff02", fontFamily: "var(--font-mono)", fontSize: "10px" }}>
                      {info.label}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#ffffff" }}>
                      {info.value}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}

            <Box sx={{ pt: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: "#ffffff", fontFamily: "var(--font-mono)", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase" }}>
                API & Source Access
              </Typography>
              <Stack direction="row" spacing={2}>
                {[
                  { Icon: Terminal, label: "API Console", href: "/resume" },
                  { Icon: ShieldCheck, label: "SLA Specs", href: "/resume#sla" },
                  { Icon: GitHubIcon, label: "GitHub", href: "https://github.com/Mat-tech-bit/mattbase", isMui: true },
                  { Icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com", isMui: true }
                ].map((item, i) => (
                  <IconButton
                    key={i}
                    href={item.href}
                    sx={{
                      p: 1.5,
                      bgcolor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      color: "#ffffff",
                      transition: "0.3s",
                      cursor: "pointer",
                      "&:hover": {
                        bgcolor: "#abff02",
                        color: "#052424",
                        borderColor: "#abff02",
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    {item.isMui ? (
                      <item.Icon sx={{ fontSize: 22 }} />
                    ) : (
                      <item.Icon size={22} />
                    )}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>

        {/* Contact Form */}
        <Grid size={{ xs: 12, md: 7 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                bgcolor: "rgba(255, 255, 255, 0.01)",
                border: "1px solid rgba(88, 106, 106, 0.2)",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Contact Name"
                      name="name"
                      variant="filled"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{ 
                        bgcolor: "rgba(255,255,255,0.02)", 
                        borderRadius: 1,
                        "& .MuiInputLabel-root": { color: "#a2a6b4" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "#abff02" },
                        "& .MuiFilledInput-root": { color: "#ffffff" },
                      }}
                      slotProps={{ input: { disableUnderline: true } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Corporate Email"
                      name="email"
                      type="email"
                      variant="filled"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{ 
                        bgcolor: "rgba(255,255,255,0.02)", 
                        borderRadius: 1,
                        "& .MuiInputLabel-root": { color: "#a2a6b4" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "#abff02" },
                        "& .MuiFilledInput-root": { color: "#ffffff" },
                      }}
                      slotProps={{ input: { disableUnderline: true } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Terminal Specs & Requirements (e.g. Yard size, gate volume)"
                      name="message"
                      multiline
                      rows={5}
                      variant="filled"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{ 
                        bgcolor: "rgba(255,255,255,0.02)", 
                        borderRadius: 1,
                        "& .MuiInputLabel-root": { color: "#a2a6b4" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "#abff02" },
                        "& .MuiFilledInput-root": { color: "#ffffff" },
                      }}
                      slotProps={{ input: { disableUnderline: true } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<Send size={20} />}
                      sx={{ 
                        py: 2, 
                        fontSize: "11px", 
                        fontWeight: 600,
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "1.5px",
                        bgcolor: "#abff02",
                        color: "#052424",
                        borderRadius: "8px",
                        boxShadow: "none",
                        cursor: "pointer",
                        "&:hover": {
                          bgcolor: "#c0ff3b",
                          boxShadow: "none",
                        }
                      }}
                    >
                      Submit Demo Request
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}