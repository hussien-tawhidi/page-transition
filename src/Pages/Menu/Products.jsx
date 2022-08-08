import "./products.scss";
import products from "../../assets/products.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <motion.div
      className="products"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <div className="products-content">
        <img src={products} alt="" />
        <div className="products-text">
          <h1>this is the products part</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
