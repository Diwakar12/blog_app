import { Button, RadioGroup, Checkbox,FormControlLabel, FormControl, Grid, Radio, TextField } from '@material-ui/core';
import { SyncAlt } from '@material-ui/icons';
import React from 'react'

class search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value:'Return'
         };
    }
    render() {
        return (
            <Grid item container className='search-container'>
                <Grid container sm={4} className='serach-input-field'>
                <Grid item  sm={6}>
                   <TextField fullWidth size='small' id="Depart" label="Depart From" variant="outlined"/>
                   <SyncAlt className='syncIcon'/>
                </Grid>
                <Grid item  sm={6}>
                    <TextField fullWidth size='small' id="Destination" label="Destination" variant="outlined"/>
                </Grid>
                </Grid>
                <Grid item  sm={2} className='serach-input-field'>
                   <TextField fullWidth size='small' id="Passenger" label="Passengers" variant="outlined"/>
                </Grid>
                <Grid item  sm={2} className='serach-input-field'>
                   <TextField fullWidth size='small' id="Date" label="Dates" variant="outlined"/>
                </Grid>
                <Grid item  sm={2} className='serach-input-field'>
                    <TextField fullWidth size='small' id="Airlines" label="Airlines" variant="outlined"/>
                </Grid>
                <Grid item  sm={2} className='serach-input-field'>
                   <TextField fullWidth size='small' id="Class" label="Class" variant="outlined"/>
                </Grid>
                <Grid item  sm={12} className='search-btn-content'>
                    <p>Reset the data</p>
                    <span className='search-btn'>Search</span>
                    {/* <input type='button'/> */}
                    {/* <div >Search</div> */}
                   {/* <Button size='small' variant="contained" className='search-btn'>Search</Button> */}
                </Grid>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" defaultValue="top"aria-label="destination" name="gender1" value={this.state.value} >
                        <FormControlLabel value="Return" control={<Radio color='primary'/>} label="Return" />
                        <FormControlLabel value="Oneway" control={<Radio color='primary'/>} label="Oneway" />
                        <FormControlLabel value="Multidestination" control={<Radio color='primary'/>} label="Multidestination" />
                        <FormControlLabel value="Multidestination" control={<Checkbox color='primary'/>} label="Multidestination" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        );
    }
}

export default search;
