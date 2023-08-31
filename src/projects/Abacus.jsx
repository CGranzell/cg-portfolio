import React from 'react'
import { motion } from 'framer-motion'

const Abacus = () => {
  return (
    <div className="p-4">
    <h2 className="text-2xl pb-4">
      I've created a project called "Abacus."
    </h2>
    <p>
    This project was commissioned by three schools offering advanced mathematics classes to gifted students. They required a platform to post events for their students, coupled with a secure login system to ensure only authorized personnel could create these events. To address these needs, I constructed the platform utilizing Next.js for the frontend, and Firebase for the backend, while also crafting the CSS from scratch.
    </p>
    <div className="flex justify-around">
      <motion.a
        href="https://abacus-omega.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-1 text-xl underline decoration-sky-600 md:decoration-blue-400"
        whileHover={{ scale: 1.1 }}
      >
        View Site
        <span className="absolute transition -bottom-px inset-x-0 h-1 bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-sky-500/0 opacity-0 group-hover:opacity-100"></span>
      </motion.a>
      <motion.a
        href="https://github.com/CGranzell/abacus"
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

export default Abacus