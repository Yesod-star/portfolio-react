import Nav from '../Nav/Nav';
import React from 'react';
import './Header.css';
import logo from '../Components/img/LogoGabriel.png';

class Header extends React.Component {
  render() {
    return(
    <div className='header-armazem'>
      <div className="Header">
        <img src={logo} alt="Logo" id='logo'/>
      </div>
      <Nav/>
    </div>
    )
  }
}

export default Header;
