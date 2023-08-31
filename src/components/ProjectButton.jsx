import React from 'react';
import { motion } from 'framer-motion';

const ProjectButton = ({ onClick, buttonText }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative group p-1 text-3xl underline decoration-sky-600 md:decoration-blue-400"
      whileHover={{ scale: 1.1 }}
    >
      {buttonText}
      <span className="absolute transition -bottom-px inset-x-0 h-1 bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0 opacity-0 group-hover:opacity-100"></span>
    </motion.button>
  );
};

export default ProjectButton;
