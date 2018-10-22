import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, setLocation, setDuration, setDifficulty} from '../actions/filters';

const FiltersList = (props) => (
    <div className="filters" >
        <input className="filters__filter" type='text' placeholder="Search" onChange={(e)=>{
            //props = state
            props.dispatch(setTextFilter(e.target.value))
        }} />
        <div className="filters__block">
            <label>Location</label>
            <select className="filters__filter" onChange={(e)=>{
                props.dispatch(setLocation(e.target.value));
            }}>
                <option value="">Any</option>    
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
            </select>
        </div>
        
        <div className="filters__block">
            <label>Length</label>
            <select className="filters__filter" onChange={(e)=>{
                props.dispatch(setDuration(e.target.value));
            }}> 
                <option value="">Any</option> 
                <option value="short">short</option>
                <option value="medium">medium</option>
                <option value="long">long</option>
            </select>
        </div>
        
        <div className="filters__block">
            <label>Difficulty</label>
            <select className="filters__filter" onChange={(e)=>{
                props.dispatch(setDifficulty(e.target.value));
            }}>
                <option value="">Any</option> 
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>
        </div>
        
    </div>
)
const mapPropsToState = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapPropsToState)(FiltersList);