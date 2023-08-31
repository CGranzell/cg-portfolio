import React from 'react'
import { motion } from 'framer-motion'

const Webshop = ({ isSelected }) => {
  return (
    <div className="p-4">
    <h2 className="text-2xl pb-4">
      
I've developed a project called "Webshop."
    </h2>
    <p>
    This project was my thesis assignment, serving as a culmination of the knowledge I gathered during my educational journey. I chose to build it using React and made use of technologies like createContext to manage the global shopping cart state. Alongside, I crafted the CSS from scratch to ensure a unique visual identity.
    </p>
    <div className="flex justify-around">
      <motion.a
        href="https://webshop-e.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-1 text-xl underline decoration-sky-600 md:decoration-blue-400"
        whileHover={{ scale: 1.1 }}
      >
        View Site
        <span className="absolute transition -bottom-px inset-x-0 h-1 bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0 opacity-0 group-hover:opacity-100"></span>
      </motion.a>
      <motion.a
        href="https://github.com/CGranzell/webshop-e"
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
  )
}

export default Webshop