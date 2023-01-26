import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import '../styles/arrow.css';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(true)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(true)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 50, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollArrow;