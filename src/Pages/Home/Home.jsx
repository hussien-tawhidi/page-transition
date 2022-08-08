import Navbar from "../../Components/Navbar/Navbar";
// import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { motion } from "framer-motion";
import home from "../../assets/bg.jpg";
import "./home.scss";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity:0 }}
    >
      <Navbar />
      <div className="home-content">
        <img src={home} alt="" />
        <div className="home-text">
          <p>avenus online shopping</p>
          <h1>offer with best designs</h1>
          <a href="#" className="hom-btn">
            order now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
