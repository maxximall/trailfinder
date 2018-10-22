import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import AdminHeader from '../components/AdminHeader';

const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => {
    return(
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
              <div>
                <Component {...props} />
              </div>
            ) : (
                <Redirect to="/" />
              )
        )} />
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)