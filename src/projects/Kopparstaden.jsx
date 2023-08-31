import React from 'react';
import { motion } from 'framer-motion';

const Kopparstaden = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl pb-4">
        I've created a project called "Kopparstaden."
      </h2>
      <p>
        The project is a landing page that I've developed as a clone of an
        existing website, a real estate company's site. This project showcases
        my ability to recreate the design and functionality of an existing
        website while ensuring responsiveness for different devices using a
        combination of HTML, CSS, Javascript, and Bootstrap 4.
      </p>
      <div className="flex justify-around">
        <motion.a
          href="https://kopparstaden-klon.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-1 text-xl underline decoration-sky-600 md:decoration-blue-400"
          whileHover={{ scale: 1.1 }}
        >
          View Site
          <span className="absolute transition -bottom-px inset-x-0 h-1 bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0 opacity-0 group-hover:opacity-100"></span>
        </motion.a>
        <motion.a
          href="https://github.com/CGranzell/Kopparstaden-klon"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-1 text-xl underline decoration-sky-600 md:decoration-blue-400"
          whileHover={{ scale: 1.1 }}
        >
          Github
          <span className="absolute transition -bottom-px inset-x-0 h-1 bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0 opacity-0 group-hover:opacity-100"></span>
        </motion.a>
      </div>
    </div>
  );
};

export default Kopparstaden;
