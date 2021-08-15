import {HouseOutlined,FlightTakeoffOutlined,MapOutlined,FastfoodOutlined,
    TimelineOutlined, SportsSoccerRounded, AddCircleOutlineRounded, Phone} from '@material-ui/icons';
    import React from 'react'
    import './Nav.css'
    class QuickSearch extends React.Component {
        constructor(props) {
            super(props);
            this.state = {  };
        }
        render() {
            return (
                <div className='header'>
                <div className='logo-bx'>
                    <img src='#' alt='travell'/>
                </div>
                <div className='quick-search-bx '>
                    <img src='#' alt='Alto'/>
                </div>
                <div className='navi-bx'>
                    <ul>
                        <li><HouseOutlined/> <span>Home</span> </li>
                        <li><FlightTakeoffOutlined/> <span>Flights</span> </li>
                        <li><MapOutlined/> <span>Destination</span> </li>
                        <li><FastfoodOutlined/> <span>Holiday Types</span> </li>
                        <li><TimelineOutlined/> <span>Tours</span> </li>
                        <li><SportsSoccerRounded/> <span>Sports</span> </li>
                        <li><AddCircleOutlineRounded/> <span>More</span> </li>
                    </ul>
                </div>
                <div className='call-bx'>
                    <span>Call our travel experts</span>
                    <span className='big-font'> <Phone/> 0208 843 4444</span>
                    <span className='small-font'>24 hours a day / 7 days a week</span>
                </div>
            </div>
            );
        }
    }
    
    export default QuickSearch;