"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Container,
  Stack,
  IconButton,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from "lucide-react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

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
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: <Mail size={24} />, label: "Email", value: "matthewakinyemi24@gmail.com" },
    { icon: <Phone size={24} />, label: "Phone", value: "09025546836" },
    { icon: <MapPin size={24} />, label: "Location", value: "Lagos, Nigeria" },
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
          }}
        >
          Let&apos;s <span style={{ color: "#3b82f6" }}>Collaborate</span>
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
            lineHeight: 1.6,
          }}
        >
          Whether you have a startup idea, a complex engineering challenge, 
          or just want to talk shop, my inbox is always open.
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
                      bgcolor: isDark ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.05)",
                      color: "primary.main",
                      display: "flex",
                      border: "1px solid",
                      borderColor: isDark ? "rgba(59, 130, 246, 0.2)" : "rgba(59, 130, 246, 0.1)",
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 1.5 }}>
                      {info.label}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {info.value}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}

            <Box sx={{ pt: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>
                Digital Presence
              </Typography>
              <Stack direction="row" spacing={2}>
                {[
                  { Icon: Globe, isLucide: true },
                  { Icon: MessageSquare, isLucide: true },
                  { Icon: TwitterIcon, isLucide: false },
                  { Icon: LinkedInIcon, isLucide: false }
                ].map((item, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      p: 1.5,
                      bgcolor: isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)",
                      border: "1px solid",
                      borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)",
                      transition: "0.3s",
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "white",
                        borderColor: "primary.main",
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    {item.isLucide ? (
                      <item.Icon size={22} />
                    ) : (
                      <item.Icon sx={{ fontSize: 22 }} />
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
                bgcolor: isDark ? "rgba(255, 255, 255, 0.02)" : "#fff",
                border: "1px solid",
                borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      variant="filled"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{ bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)", borderRadius: 1 }}
                      slotProps={{ input: { disableUnderline: true } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      variant="filled"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{ bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)", borderRadius: 1 }}
                      slotProps={{ input: { disableUnderline: true } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={5}
                      variant="filled"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{ bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)", borderRadius: 1 }}
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
                      className="gradient-primary"
                      sx={{ 
                        py: 2, 
                        fontSize: "1.1rem", 
                        fontWeight: 700,
                        boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.5)"
                      }}
                    >
                      Send Message
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