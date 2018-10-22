import React from 'react';
import { connect } from 'react-redux';
import {NavLink ,Link} from 'react-router-dom';
import {startLogout} from '../actions/auth';



const Footer = ({startLogout, isAuthenticated}) => (
    <div className="footer">
        <p>Created by <Link to="https://github.com/maxximall">Max</Link></p>
        {isAuthenticated ? 
            (
                null
            ):(
                <NavLink to='/login' activeClassName="is-active" exact={true}>Login</NavLink>
            )
        }
        
               
    </div>
)
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);