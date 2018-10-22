import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth';


const AdminHeader = ({startLogout}) => (
    <div>
        <h3>TrailFinder App</h3>
        <NavLink to='/' activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to='/create' activeClassName="is-active">Add New</NavLink>
        <button onClick={startLogout}>Log out</button>    
    </div>
)
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(AdminHeader);