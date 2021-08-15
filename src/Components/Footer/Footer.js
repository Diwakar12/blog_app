import { Button,OutlinedInput,InputLabel,FormControl,
    Divider,IconButton ,InputAdornment, p,Grid } from '@material-ui/core';
import React from 'react';
import background from "../../assets/Footerlogo.png";
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './footer.scss'

class Footer extends React.Component {
    state = {  }
    render() {
        return (
            <>
            {/* <Divider></Divider> */}
            <footer className='Container'>       
                <Grid className=' footer' container >
                <Grid item xs={12} sm={6} md={6} lg={3}> 
                <Grid>
               <Link to={{pathname:'/'}}> <img src={background} className='footer_logo'/> </Link>   
               <p className='footer_para logo_para top_space'>
               The Slogan of your company or Too short description of company.
               </p>
                </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} style={{paddingLeft:"10px"}}>
                    <p className='Subtitle2 margin'>Information</p>
                    <p className='footer_para' >
                     <Link to={{pathname:'About'}}>About Us</Link>
                    </p>
                    <p className='footer_para' >
                     <Link to={{pathname:'FreAskQue'}}>FAQ</Link>
                    </p>
                    <p variant='body1'className='footer_para'>
                      <Link to={{pathname:'ContactUs'}}>Contact Us</Link> 
                    </p>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <p className='Subtitle2 margin'>Company</p>
                    <p className='footer_para' >About</p>
                    <p className='footer_para' >
                      <Link to={{pathname:'Terms'}}>Terms of Services</Link> 
                     </p>
                    <p className='footer_para' >
                     <Link to={{pathname:'PrivacyPolicy'}}>Privacy Policy</Link> 
                    </p>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <p className='Subtitle2 margin'> Refer and earn</p>
                    <FormControl  className='margin' variant="outlined">
                        <OutlinedInput
                        placeholder='user@eruditeresume.com'
                            id="subscribe"
                            endAdornment={
                            <InputAdornment position="end">
                                {/* <ChevronRightIcon className={classes.icon}/> */}
                                <ChevronRightIcon className='ChevronRightIcon'/>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <p className='footer_para top_space' >We’ll never share your email address with a third-party.</p>
                </Grid>
                </Grid>
                <Divider></Divider>
                <p className="_Center footer caption">
                  Copyright © 2021 Eruditeresumesearch.com - All Right Reserved
                </p>
            </footer>
        </>
        );
    }
}

export default Footer;