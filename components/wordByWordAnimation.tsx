"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface WordByWordAnimationProps {
  text: string;
}
const WordByWordAnimation: React.FC<WordByWordAnimationProps> = ({ text }) => {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    // Split the text into individual words
    const wordArray: string[] = text.split(" ");
    setWords(wordArray);
  }, [text]);

  return (
    <p>
      <AnimatePresence initial={false}>
        {words.map((word: string, index: number) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {word + " "}
          </motion.span>
        ))}
      </AnimatePresence>
    </p>
  );
};

export default WordByWordAnimation;
