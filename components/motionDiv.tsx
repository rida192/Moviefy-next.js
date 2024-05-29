"use client";

export interface MotionElementProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

import { MotionProps, motion } from "framer-motion";
const MotionDiv: React.FC<MotionElementProps> = ({
  children,
  className = "",
  initial,
  animate,
  transition,
  ...rest
}) => {
  return (
    <motion.div
      initial={initial || { opacity: 0 }}
      animate={animate || { opacity: 1 }}
      transition={transition || { duration: 0.3, ease: "easeInOut" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
