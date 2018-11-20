import React from 'react';
import ReactDOM from 'react-dom';
import TrailList from './TrailList';
import Header from './Header';
import 'bootstrap';

export default class TrailFinderApp extends React.Component{
    render() {
        return(
            <div>
                
                <Header />
                <div className="container">
                    <TrailList />
                </div>
            </div>
        )    
    }
}
