"use client";

import { Box, Container } from "@mui/material";
import Hero from "../about/page";
import AboutStory from "../about_story/page";
import SkillsSection from "../skills/page";
import PortfolioPage from "../portfolio/page";
import TrustSection from "../trust/page";
import Contact from "../contact/page";
import ProjectsPage from "../projects/page";

const HomePage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Hero />
      <AboutStory />
      <SkillsSection />
      <PortfolioPage />
      <ProjectsPage />
      <TrustSection />
      <Contact />
    </Box>
  );
};

export default HomePage;
