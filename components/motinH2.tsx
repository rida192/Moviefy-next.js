"use client";
// import { MotionElementProps } from "@/types";
import { motion } from "framer-motion";
import { MotionElementProps } from "./motionDiv";

const MotionH2: React.FC<MotionElementProps> = ({
  children,
  className = "",
  initial,
  animate,
  transition,
  ...rest
}) => {
  return (
    <motion.h2
      initial={initial || { opacity: 0 }}
      animate={animate || { opacity: 1 }}
      transition={transition || { duration: 0.3, ease: "easeInOut" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.h2>
  );
};

export default MotionH2;
