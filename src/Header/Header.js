import Nav from '../Nav/Nav';
import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return(
    <div className='header-armazem'>
      <div className="Header">
        Header
      </div>
      <Nav/>
    </div>
    )
  }
}

export default Header;
