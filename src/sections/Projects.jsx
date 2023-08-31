import React, { useState } from 'react';
import Welcome from '../projects/Welcome';
import Kopparstaden from '../projects/Kopparstaden';
import Abacus from '../projects/Abacus';
import Webshop from '../projects/Webshop';
import ProjectButton from '../components/ProjectButton';

const Projects = ({ setSelectedPage }) => {
  const [activeProject, setActiveProject] = useState('Welcome');

  const handleProjectChange = (projectName) => {
    // Om samma komponent redan är aktiv, byt tillbaka till Welcome
    setActiveProject((prevProject) =>
      prevProject === projectName ? 'Welcome' : projectName
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen font-poppins flex  justify-center "
    >
      <div className=" h-3/4  w-3/4">
        <h2 className="text-6xl  mt-32">Projects</h2>
        <div className="flex flex-col md:flex-row mt-20">
          <div className="  md:w-6/12 flex flex-col items-start  ">
            {/* Ta bort knappen för "Welcome" */}
            <ul>
              <li className='py-4'>
                <ProjectButton
                  onClick={() => handleProjectChange('Kopparstaden')}
                  buttonText="Kopparstaden"
                />
              </li>
              <li className='py-4'>
                <ProjectButton
                  onClick={() => handleProjectChange('Abacus')}
                  buttonText="Abacus"
                />
              </li>
              <li className='py-4'>
                <ProjectButton
                  onClick={() => handleProjectChange('Webshop')}
                  buttonText="Webshop"
                />
              </li>
            </ul>
          </div>
          <div className="md:w-6/12 flex justify-center">
            {/* Visa aktiv komponent baserat på activeProject */}
            {activeProject === 'Welcome' && <Welcome />}
            {activeProject === 'Kopparstaden' && <Kopparstaden />}
            {activeProject === 'Abacus' && <Abacus />}
            {activeProject === 'Webshop' && <Webshop />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
