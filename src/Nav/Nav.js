import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if(!isMenuClicked) {
        setBurgerClass("burger-bar clicked")
        setMenuClass("menu visible")
    }
    else {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

    return(
    <div className="Nav">
      <ul className='Url-Nav'>
        <li><a href='#'>HOME</a></li>
        <li><a href='#'>PROJECTS</a></li>
        <li><a href='#'>ABOUT</a></li>
        <li><a href='#'>CONTACT</a></li>
      </ul>
      <div className='Url-Nav-Mob' style={{width: '100%',height: '5em'}}>
              <div className="burger-menu" onClick={updateMenu}>
                  <div className={burger_class} ></div>
                  <div className={burger_class} ></div>
                  <div className={burger_class} ></div>
              </div>

          <div className={menu_class}>
          <ul>
            <li><a href='#'>HOME</a></li>
            <li><a href='#'>PROJECTS</a></li>
            <li><a href='#'>ABOUT</a></li>
            <li><a href='#'>CONTACT</a></li>
          </ul>
          </div>
      </div>
    </div>
    )
  
}

export default Nav;
