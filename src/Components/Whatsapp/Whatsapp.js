import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Whatsapp.css';

class Whatsapp extends React.Component {
  
  render() {

    return(
      <div>
        <a href="https://api.whatsapp.com/send?phone=28999881802" className="float" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="my-float" />
        </a>
      </div>
    )
  }
}


export default Whatsapp;
