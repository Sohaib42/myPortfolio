import React, {useState} from 'react';
import {ArrowUpCircle} from "react-bootstrap-icons";
  
function ScrollButton(){
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400){
      setVisible(true)
    } 
    else if (scrolled <= (400)){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
      <span className="spanBack">
     <ArrowUpCircle className="backtoTop" onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
     </span>
  );
}
  
export default ScrollButton;