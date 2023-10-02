import React from 'react';
import Project from '../Project/Project';
import History from '../History/History';
import Form from '../Form/Form';
import './Hero.css';

function Hero() {
  return(
    <div className="armazem">
        <Project></Project>
        <History></History>
        <Form></Form>
    </div>
  );
}

export default Hero;
