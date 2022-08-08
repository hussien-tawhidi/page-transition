import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./contact.scss";
import contacts from "../../assets/contacts.jpg";
import { animate, motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contacts"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <div className="contacts-content">
        <img src={contacts} alt="" />
        <div className="contacts-text">
          <h1>this is the contacts part</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
