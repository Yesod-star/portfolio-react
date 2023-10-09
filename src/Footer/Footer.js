import React from 'react';
import './Footer.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

class Footer extends React.Component {
  
  render() {
    const element = <FontAwesomeIcon icon={faCoffee} />

    return(
    <div className="footer-armazem">
      <div id='left-footer'>
        Created by GabrielDev
      </div>
      <div id='right-footer'>
        <ul>
        <li>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a href="mailto:youremail@example.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
        </ul>
      </div>
    </div>
    )
  }
}


export default Footer;
