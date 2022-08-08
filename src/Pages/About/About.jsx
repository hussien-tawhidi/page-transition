import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import about from "../../assets/about.jpg";
import "./about.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <div className="about-content">
        <img src={about} alt="" />
        <div className="about-text">
          <h1>this is the about part</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
