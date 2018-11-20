import React from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {startLogout} from '../actions/auth';
import Search from '../components/Search';


const Header = ({startLogout, isAuthenticated}) => (
    <div className='header'>
        <div className='container'>
            <img src='./img/logo.png' className='logo'/><span className='logo-text'>TrailFinder</span>
            <Search />
            {isAuthenticated ? 
                (
                    <div>
                        <NavLink to='/create' activeClassName="is-active">Add New</NavLink>
                        <a onClick={startLogout}>Log out</a>
                    </div>
                ):(
                null
                )
            }
        </div>      
    </div>
)
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);