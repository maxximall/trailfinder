import React from 'react';
import TrailForm from './TrailForm';
import {connect} from 'react-redux';
import { startEditTrail, startDeleteTrail } from '../actions/trails';

export class EditTrail extends React.Component {
    onSubmit = (trail) => {
        this.props.editTrail(this.props.trail.id, trail);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.deleteTrail(this.props.trail.id);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <h2>Editing Existing Trail</h2>
                <TrailForm trail={this.props.trail} onSubmit={this.onSubmit}/>
                <button onClick={this.onRemove}>Delete</button>
            </div>
        )
    }
    
}
    

const mapStateToProps = (state, props) => {
    return {
        //find the the trail by the id in url
        trail: state.trails.find((trail)=> trail.id === props.match.params.id)
    }  
};

const mapDispatchToProps = (dispatch, props) => ({
    editTrail: (id, trail) => dispatch(startEditTrail(id, trail)),
    deleteTrail: (id) => dispatch(startDeleteTrail(id)),
});
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditTrail);
  