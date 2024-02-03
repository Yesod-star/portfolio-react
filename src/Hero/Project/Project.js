import React, { useState, useEffect } from 'react';
import {register} from 'swiper/element/bundle'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Project.css';
import imgCrew from '../../Components/imgProjects/img-crew.png';
import imgCrewMob from '../../Components/imgProjects/img-crew-mob.png';
import imgApiPoke from '../../Components/imgProjects/api-poke.png';
import imgRpgBot from '../../Components/imgProjects/rpg-bot.png';
import imgDroneLib from '../../Components/imgProjects/drone-lib.png';
import imgQlippoth from '../../Components/imgProjects/qlippoth.jpg';

register();




function Project(){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const data = [
    {id: '1', image: windowWidth > 768 ? imgCrew : imgCrewMob, link: 'https://github.com/Yesod-star/crew-app'},
    {id: '2', image: imgApiPoke, link:'https://github.com/Yesod-star/ApiPokemonCSharp'},
    {id: '3', image: imgRpgBot, link:'https://github.com/Yesod-star/RpgUltimateBot'},
    {id: '4', image: imgDroneLib, link:'https://github.com/Yesod-star/CSharpDroneLib'},
    {id: '5', image: imgQlippoth, link:'https://github.com/Yesod-star/Qlippoth'}
  ]
    return(
    <div className="Project">
      <Swiper slidesPerView={1} pagination={{clickable:true}}navigation>
      {data.map((item)=>(
        <SwiperSlide key={item.id}>
          <img src={item.image}
          alt="Slider"
          className='slide-item'/>
          <a href={item.link} className='seeProject'>
            <button className='button button-more'><span className="text">SEE MORE</span></button>
          </a>         
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
    )
}

export default Project;
