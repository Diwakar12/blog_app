import React, {Component} from 'react'
import Nav from '../Components/Navgation/Nav'
import QuickSearch from '../Components/Quick-search/quickSearch';

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Nav/>
                <QuickSearch/>
            </div>
        );
    }
}

export default home;