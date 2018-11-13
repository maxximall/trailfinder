import React from 'react';
import { connect } from 'react-redux';
import TrailListItem from './TrailListItem';
import getFilteredTrails from '../selectors/trails';
import 'bootstrap';


class TrailList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            limit: 9
        }
        this.onLoadMore = this.onLoadMore.bind(this);
    }

    onLoadMore = () =>{
        this.setState(()=>({limit: this.state.limit + 6}));
        
    }

    render() {
        return (
            <div>
                <div className="row">
                {this.props.trails.slice(0, this.state.limit).map((trail)=>(
                    <div className="col-4">
                        <TrailListItem key={trail.id } {...trail} />
                    </div>
                ))}
                </div>
                <div className="text-center">
                    <button onClick={this.onLoadMore}>Load More</button>
                </div>  
            </div>
           
        )
    }
    
}
    
    

const mapStateToProps = (state) => {
    return {
        trails: getFilteredTrails(state.trails, state.filters)
    }
}

export default connect(mapStateToProps)(TrailList)
