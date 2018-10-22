import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth';


const Header = ({startLogout, isAuthenticated}) => (
    <div>
        <h1 className="text-center bold">TrailFinder</h1>
        
        {isAuthenticated ? 
            (
                <div>
                    <NavLink to='/create' activeClassName="is-active">Add New</NavLink>
                    <button onClick={startLogout}>Log out</button>
                </div>
            ):(
               null
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);