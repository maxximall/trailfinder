import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PublicRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} component={(props) => (
              <div>
                <Header />
                    <div className='container'>
                        <Component {...props} />
                    </div>
                <Footer />
              </div>
        )} />
    )
};

export default PublicRoute;
