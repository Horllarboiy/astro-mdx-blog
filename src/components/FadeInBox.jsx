import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const FadeInBox = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7, delay:0.3, ease:[0,0.71, 0.2, 1.01] }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInBox;
