import React from 'react';
import { connect } from 'react-redux';
import {startLogin} from '../actions/auth';

const LoginPage = ({startLogin}) => {
    const onFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        startLogin(email,password);     
    };
    return (
        <div>
            <form onSubmit={onFormSubmit}>

                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="email" required />
            
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required />
            
                <button>Login</button>
            
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch, email, password) => ({
    startLogin: (email, password) => dispatch(startLogin(email, password))
})

export default connect(undefined, mapDispatchToProps)(LoginPage);