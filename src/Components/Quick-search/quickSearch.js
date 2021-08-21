import {HouseOutlined,FlightTakeoffOutlined,MapOutlined,FastfoodOutlined,
    TimelineOutlined, SportsSoccerRounded, AddCircleOutlineRounded, Phone, FlightLand, CardGiftcard, DriveEtaTwoTone, Search} from '@material-ui/icons';
import React from 'react'
import './quicksearch.css'
import SearchMenu from '../Search/search'

class QuickSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='wrap-1340 bg-grey'>
                <div className='search-panel'>
                    <div className='src-tabs '>
                        <ul>
                            <li><FlightLand/> <span>Flights</span> </li>
                            {/* <li></> <span>Destination</span> </li> */}
                            <li><CardGiftcard/> <span>Holiday Types</span> </li>
                            <li><DriveEtaTwoTone/> <span>Tours</span> </li>
                            {/* <li></> <span>Sports</span> </li> */}
                            <li><AddCircleOutlineRounded/> <span>More</span> </li>
                        </ul>
                    </div>
                </div>
                <SearchMenu/>
            </div>
        );
        }
    }
    
    export default QuickSearch;