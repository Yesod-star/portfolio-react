import React, { useEffect, useState, useRef } from 'react';
import gabriel from '../Components/img/young.png';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './History.css';


const paragraphStyles = {
  WebkitLineClamp: 8,
  WebkitBoxOrient:'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
}

export default function History({getIsOpen }) {
  const [isOpen, setIsOpen] = useState(false)

  const [showReadMoreButton, setShowReadMoreButton] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      setShowReadMoreButton(
        ref.current.scrollHeight !== ref.current.clientHeight || isOpen === true
      );
    }
  }, [isOpen]);

  const handleToggleReadMore = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const getCurrentIsOpen = () => isOpen;

  // Call getIsOpen in useEffect to avoid updating state during rendering
  useEffect(() => {
    getIsOpen && getIsOpen(getCurrentIsOpen);
  }, [getCurrentIsOpen, getIsOpen]);
  
  useEffect(()=>{
    if(ref.current){
      setShowReadMoreButton(
        ref.current.scrollHeight !== ref.current.clientHeight
        || isOpen == true
      )
    }
  })

    return(
    <div className="History row">
      <div className="col-md-6 text-about">
        <h2> About me:</h2>
        <p 
          style={ isOpen ? null : paragraphStyles } ref={ref}
        >Gabriel Barros, a 21-year-old with a diverse background and a strong passion for technology, 
          recently graduated in the field of IT. He brings years of experience as both a C# backend developer 
          and a JavaScript frontend developer, continuously expanding his skill set. With recent coursework in 
          TypeScript, React, and web security, he's eager to further his knowledge. In his free time, he enjoys 
          indulging in videos, books, and thought-provoking movies. When not at home, he prefers socializing with 
          friends through tabletop RPGs, visiting bars, or exploring new restaurants with his family.
        </p>
        {showReadMoreButton &&(
          <button onClick={()=>setIsOpen(!isOpen)} 
          className='button small'>
          {isOpen ? 'read less...' : 'read more...'}
        </button>
        )}

      </div>
      <div className="col-md-6">
        <img src={gabriel} alt="Foto do programador"/>
      </div>
      {getIsOpen && getIsOpen(getCurrentIsOpen)}
    </div>
    )
}