import React, { useState } from 'react';
import Welcome from '../projects/Welcome';
import Kopparstaden from '../projects/Kopparstaden';
import Abacus from '../projects/Abacus';
import Webshop from '../projects/Webshop';

const Projects = () => {
  const [activeComponent, setActiveComponent] = useState('Welcome');

  const handleComponentChange = (componentName) => {
    // Om samma komponent redan är aktiv, byt tillbaka till Welcome
    setActiveComponent((prevComponent) =>
      prevComponent === componentName ? 'Welcome' : componentName
    );
  };

  return (
    <section id="projects" className="min-h-screen">
      <h2 className="text-6xl text-center mt-32">Projects</h2>
      <div className="flex">
        <div className="border-2 w-6/12 flex flex-col items-start">
          {/* Ta bort knappen för "Welcome" */}
          <button onClick={() => handleComponentChange('Kopparstaden')}>
            Kopparstaden
          </button>
          <button onClick={() => handleComponentChange('Abacus')}>
            Abacus
          </button>
          <button onClick={() => handleComponentChange('Webshop')}>
            Webshop
          </button>
        </div>
        <div className="border-2 w-6/12">
          {/* Visa aktiv komponent baserat på activeComponent */}
          {activeComponent === 'Welcome' && <Welcome />}
          {activeComponent === 'Kopparstaden' && <Kopparstaden />}
          {activeComponent === 'Abacus' && <Abacus />}
          {activeComponent === 'Webshop' && <Webshop />}
        </div>
      </div>
    </section>
  );
};

export default Projects;
