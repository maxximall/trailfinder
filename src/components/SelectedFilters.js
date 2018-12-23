
import React from 'react';
import { connect } from 'react-redux';
import {removeFilter} from '../actions/filters'

const SelectedFilters = (filter) => {

    console.log(filter)





    const removeSelectedFilters = (filter, filterValue) => {
        for( let key in props.filters){
            if(props.filters[key]===filterValue){
                props.dispatch(removeFilter(filter, filterValue))
            }
        }
    }
    for (let key in props.filters) {
        if (key === 'location' && props.filters[key]) {
             return (
                 <div>
                    <span className="trailListItem__body__label"><a onClick={() => removeSelectedFilters(key, props.filters[key])}><i className="fas fa-times"></i></a>{props.filters[key]}</span> 
                 </div>
                 
             );
        }
    }


}
const mapStateToProps = (state) => ({
    filters: state.filters
})


export default connect(mapStateToProps)(SelectedFilters)