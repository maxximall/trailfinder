import React from 'react';
import {connect} from 'react-redux';
import TrailForm from './TrailForm';
import { startAddTrail } from '../actions/trails';

const AddTrail = (props) => (
    <div>
        <h3>Adding a New Trail</h3>

        <TrailForm onSubmit={(trail)=>{
            //value for 'trail' props is called down from the component
            props.dispatch(startAddTrail(trail))
            props.history.push('/');
        }} />    
    </div>
)

export default connect()(AddTrail)