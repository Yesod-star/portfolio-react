import React from 'react';
import {register} from 'swiper/element/bundle'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Project.css';
register();




function Project(){
  const data = [
    {id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'
    ,link:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png' },
    {id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'
    ,link:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    {id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'
    ,link:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'}
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
            <button className='button button-more'><span class="text">SEE MORE</span></button>
          </a>         
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
    )
}

export default Project;
