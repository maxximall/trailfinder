import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetTrails } from './actions/trails';
import { setTextFilter } from './actions/filters';
import getVisibleTrails from './selectors/trails';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import firebase from './firebase/firebase';
import {login, logout} from './actions/auth';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleTrails = getVisibleTrails(state.trails, state.filters);
    console.log(visibleTrails)
});




const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetTrails()).then(()=>{
    
    ReactDOM.render(jsx, document.getElementById('app'));
    
})

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    console.log('loged in');
    store.dispatch(login(user.uid))
    history.push('/')
  }else{
    console.log('loged out');
    store.dispatch(logout());
    history.push('/')
  }
})