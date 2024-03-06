import React from "react";
import { Container } from "react-bootstrap";
import { motion, useMotionValue, useTransform } from "framer-motion";
import './assets/style.css';
import moimg from "./assets/image/millet_image-1.png"

// Define the Icon component or import it from another file
const Icon = () => {
  // Implement the Icon component functionality here
  return <div className="mo">
    <img className="mo1" src = {moimg}  />
  </div>;
};

const FinalImage = () => {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  );

  return (
    <Container fluid className="">
      <motion.div style={{ background }}>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x }}
        >
          <Icon /> {/* Use the Icon component here */}
        </motion.div>
      </motion.div>

      
    </Container>
  );
};

export default FinalImage;
