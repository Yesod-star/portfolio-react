import React from 'react';
import Project from '../Project/Project';
import History from '../History/History';
import Form from '../Form/Form';

class Hero extends React.Component {
  render() {
    return(
      <div>
        <div className="Hero">
          Hero
        </div>
        <Project/>
        <History/>
        <Form/>
      </div>
  );
}
}

export default Hero;
