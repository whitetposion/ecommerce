import React from 'react'
import Ddata from './Ddata'
import Slider from "react-slick";

const Dcard = () => {
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay:true
     };
  return (
    <>
    <Slider {...settings}>
     
          
          {Ddata.map((val, index) => {
               return (
                    <>
                    <div className="box" key = {index}>
                         <div className="img">
                              <img src = {val.cover} alt=''/>
                         </div>
                         <h4>{val.name}</h4>
                         <span>{val.price}</span>
                         
                    </div>
                    </>
               )
          })}
     </Slider>
    </>
  )
}

export default Dcard
