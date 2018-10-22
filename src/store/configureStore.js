//Store holds application's state
//Store allows access to the application's state via getState()
//Store allows state to be updated via dispatch(action)

import {createStore , combineReducers, applyMiddleware, compose} from 'redux';
import filtersReducer from '../reducers/filters';
import trailsReducer from '../reducers/trails';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// Store creation
export default () => {
    const store = createStore(
        combineReducers({
          trails: trailsReducer,
          filters: filtersReducer,
          auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
