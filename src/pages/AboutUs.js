import React from "react";
// Page Components
import AboutSection from "../Components/AboutSection";
import ServicesSection from "../Components/ServicesSection";
import FaqSection from "../Components/FaqSection";
//Import animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../Components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
