import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';


const Search = (props) => (
    <input className=" search-bar" type='text' placeholder="Search" onChange={(e)=>{
        props.dispatch(setTextFilter(e.target.value))
    }} />

)

const mapPropsToState = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapPropsToState)(Search);