import React from 'react';
import ExperienceItem from '../components/ExperienceItem';

const About = () => {
  return (
    <section
      id="about"
      className="font-poppins  min-h-screen flex items-center justify-center pt-40"
    >
      <div className=" h-3/4  w-3/4 ">
        {/* ABOUT ME */}
        <div className=" h:auto md:h-2/5  break-words pb-10">
          <h2 className="text-xl md:text-3xl py-4">About me</h2>
          <p className="text-sm md:text-xl">
            Christoffer is a result-driven Software Developer with a passion for
            Frontend Development. <br />
            Proficient in JavaScript, TypeScript, and frameworks like React.js
            and Next.js. <br /> In addition to being a quick learner and open to
            acquiring new technologies, <br /> Christoffer possesses strong
            collaboration skills and a pleasant personality.
          </p>
        </div>
        {/* WORK EXPERIENCE */}
        <div className=" h-auto md:h-2/5 py-10">
          <h2 className="text-xl md:text-3xl pb-3p">Work Experience</h2>
          <ExperienceItem
            title={'Software developer'}
            type={'Full time'}
            employer={'HiQ'}
            location={'Borlänge'}
            dateFrom={'Aug 2023'}
          />
          <ExperienceItem
            title={'Software developer intern'}
            type={'Internship'}
            employer={'HiQ'}
            location={'Borlänge'}
            dateFrom={'Jan 2023'}
            dateTo={'Jul 2023'}
          />
        </div>

        {/* EDUCATION */}
        <div className=" h-auto md:h-2/5 py-10">
          <h2 className="text-xl md:text-3xl pb-3p">Education</h2>
          <ExperienceItem
            title={'Web developer, e-commerce'}
            type={'Full time'}
            employer={'Changemaker Education'}
            location={'Remote'}
            dateFrom={'Sep 2021'}
            dateTo={'Jul 2023'}
          />
         
        </div>
      </div>
    </section>
  );
};

export default About;
