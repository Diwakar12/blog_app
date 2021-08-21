import React from 'react'
// import background from '../../../assets/images/beach-sea.jpg'
import background from '../../../assets/images/Kerala.jpeg'

function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);

  
    return (
        <div >
        <img className='carosel-content' src={background} alt='mumbai'/>
        <div>
            <p></p>
        </div>
        </div>
    );
  }
  
  export default ControlledCarousel