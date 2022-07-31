import React, {useState,useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

export function ScrollTop() {  

    const [showScroll, setShowScroll] = useState(false)
    useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

  const checkScrollTop = () => {
    debugger
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };
      
      const scrollToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
      
      window.addEventListener('scroll', checkScrollTop);
      
    return (      
      <div>
          <FaArrowCircleUp className="scrollTop" onClick={scrollToTop} 
          style={{height: 40, display: showScroll ? 'flex' : 'none'}} />  
        </div>
    )
}





