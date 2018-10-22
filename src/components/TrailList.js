import React from 'react';
import { connect } from 'react-redux';
import TrailListItem from './TrailListItem';
import getFilteredTrails from '../selectors/trails';
import 'bootstrap';


const TrailList = (props) => (
    <div className="row">
        {props.trails.map((trail)=>(
            <div className="col-4">
                <TrailListItem key={trail.id} {...trail}/>
            </div>
            
        ))}
    </div>   
);
const mapStateToProps = (state) => {
    return {
        trails: getFilteredTrails(state.trails, state.filters)
    }
}

export default connect(mapStateToProps)(TrailList)
