import React from 'react';
import profileImg from '../assets/profil-bild.png';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center h-screen" 
    >
      {/* IMAGE SECTION */}
      <div className="md:basis-2/5  mt-16 ss:mt-40 md:mt-32 flex justify-center md:order-2  ">
        <img alt="profile" className="rounded-full h-60 ss:h-[20rem]  lg:h-96 " src={profileImg} />
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 md:basis-3/5 mt-12 ss:mt-32">
        {/* HEADINGS */}
        <motion.div
          className="flex flex-col items-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* <div> */}
            <div className="text-2xl ss:text-5xl lg:text-[4.6rem] font-poppins">
              <p>
                Christoffer {''} <span className="text-yellow ">Granzell</span>
              </p>{' '}
            </div>

            <div className="text-xl  md:text-5xl  font-opensans py-6">
              <p>Software developer</p>
            </div>
          {/* </div> */}

        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex   justify-center md:justify-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-yellow text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage('contact')}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
