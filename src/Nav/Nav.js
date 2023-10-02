import React from 'react';
import './Nav.css';

class Nav extends React.Component {

  render() {
    return(
    <div className="Nav">
      <ul className='Url-Nav'>
        <li><a href='#'>HOME</a></li>
        <li><a href='#'>PROJECTS</a></li>
        <li><a href='#'>ABOUT</a></li>
        <li><a href='#'>CONTACT</a></li>
      </ul>
    </div>
    )
  }
}

export default Nav;
