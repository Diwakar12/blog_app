import { Grid } from '@material-ui/core';
import React from 'react'
import Dubai from '../../../assets/images/Dubai.jpg'
import Beach from '../../../assets/images/beach-sea.jpg'
import Kerala from '../../../assets/images/Kerala.jpeg'

function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);
    // E:\example projects\traval\src\assets\images\
  
    return (
        <div className='Destination'>
            <h2>Popular Holiday Deesinations</h2>
            <Grid container>
                <Grid item sm={4}>
                <div className=' Destination-card'>
                    <span>Dubai</span>
                    <img src={Dubai} className='Destination-img' alt='dubai'/>
                </div>
                </Grid>
                <Grid item sm={4}>
                <div className=' Destination-card'>
                    <span>Dubai</span>
                    <img src={Kerala} className='Destination-img' alt='dubai'/>
                </div>
                </Grid>
                <Grid item sm={4}>
                <div className=' Destination-card'>
                <span>Dubai</span>
                    <img src={Beach} className='Destination-img' alt='dubai'/>
                </div>
                </Grid>
                <Grid item sm={4}>
                <div className=' Destination-card'>
                <span>Dubai</span>
                    <img src={Kerala} className='Destination-img' alt='dubai'/>
                </div>
                </Grid>
                <Grid item sm={4}>
                <div className=' Destination-card'>
                <span>Dubai</span>
                    <img src={Beach} className='Destination-img' alt='dubai'/>
                </div>
                </Grid>
                <Grid item sm={4}>
                <div className=' Destination-card'>
                    <span>Dubai</span>
                    <img src={Dubai} className='Destination-img' alt='dubai'/>
                </div>
                </Grid>
            </Grid>
            <div >
            </div>
        </div>
    );
  }
  
  export default ControlledCarousel