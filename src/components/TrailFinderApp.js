import React from 'react';
import ReactDOM from 'react-dom';
import TrailList from './TrailList';
import Header from './Header';

export default class TrailFinderApp extends React.Component{
    render() {
        return(
            <div>
                
                <h1>Trail Fidner App</h1>
                <TrailList />
            </div>
        )    
    }
}
