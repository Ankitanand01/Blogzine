import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation } from "swiper";
import data from "../cards.json";
import { FaBullhorn } from "react-icons/fa";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import High from './High';
import styled from 'styled-components';

function Sponsored() {

    return (<SponseredSection>
        <div className="spons">
        <h2 className='spons-title'><span><FaBullhorn/></span>Sponsored news</h2>
        <a className='contentby' href="fg">Content by: Bootstrap</a>
      </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={false}
        breakpoints={{
          600: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            navigation:'true'
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
      
      {data.sponsored.map(card => {
        return <SwiperSlide><High {...card} upperBadge="upperBadge"/></SwiperSlide>
      })}
        
      </Swiper>
      </SponseredSection>
    )
}
const SponseredSection= styled.div`
@media only screen and (max-width: 600px) {
  .spons {
    display:flex;
    flex-direction: column;
    padding:15px;
    margin:0px 0;
  }
  .contentby{
    padding-top:10px;
    padding-left:15px;
    font-size: 17px;
  }
  .mySwiper{
    padding:15px;
  }

}

@media (min-width: 768px) and (max-width: 1024px){
  .mySwiper{
    padding:15px;
  }
  .spons {
    padding:15px;
  }
        }
`

export default Sponsored;
