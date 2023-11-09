import React, { useState } from 'react';
import Project from '../Project/Project';
import History from '../History/History';
import Form from '../Form/Form';
import './Hero.css';

function Hero({ selectedContent }) {
  const [isOpen, setIsOpen] = useState(false);

  const contentComponents = {
    project: <Project />,
    history: <History getIsOpen={(isOpen) => setIsOpen(isOpen)} />,
    form: <Form />,
  };

  const containerClass = isOpen ? 'armazem big' : 'armazem';

  return (
    <div className={containerClass}>
      <div id='background'></div>
      <div className="armazem-interior">
        {contentComponents[selectedContent]}
      </div>
    </div>
  );
}

export default Hero;
