import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div initial="hidden" animate="show">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for nay photography or videography ideas that you have, We
          have professionals with amzing skills.
        </motion.p>
        <motion.button variants={fade}>Contact US</motion.button>
      </Description>

      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="guy with the camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Component

export default AboutSection;
