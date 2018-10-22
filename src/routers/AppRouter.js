import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import Header from '../components/Header';
import TrailsDashboardPage from '../components/TrailsDashboardPage';
import AddTrail from '../components/AddTrail';
import EditTrail from '../components/EditTrail';
import {PageNotFound} from '../components/PageNotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={TrailsDashboardPage} exact={true}/>
                <PublicRoute path='/login' component={LoginPage} />
                <PrivateRoute path='/create' component={AddTrail} />
                <PrivateRoute path='/edit/:id/' component={EditTrail} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;