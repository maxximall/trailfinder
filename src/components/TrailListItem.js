import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const TrailListItem = ({id, name, location, duration, difficulty, imageURL, description, actualLength, isAuthanticated, distance, country, durationGroup, minDuration, maxDuration}) => {
    // const displayDifficultyOptions = () =>{
    //     return 'easy'
    //     // Object.keys(difficulty).map((key)=>{
    //     //     if(difficulty[key]){
    //     //         return key
    //     //     }
    //     // })
    // }
    return(
        <div>
            <div data-toggle="modal" data-target={`#${id}`} className="trailListItem" > 
            
                <div className="trailListItem__img" style={{background:  'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url('+imageURL+')'}}> 
            
                </div> 

                <div className="trailListItem__body">
                    <h3 className="bold">{name}</h3>
                
                    <ul>
                        <li><span className="trailListItem__body__label"><i className="fas fa-compass"></i>{country}</span></li>
                        <li><span className="trailListItem__body__label"><i className="fas fa-clock"></i>{(maxDuration? minDuration +'-'+ maxDuration : minDuration) +' ' + durationGroup}</span></li>
                        <li><span className="trailListItem__body__label"><i className="fas fa-mountain"></i>{
                            Object.keys(difficulty).map((key) => {
                                if(difficulty[key]){
                                    return key
                                }
                            }).filter(Boolean).join(',')
                            
                        }</span></li>
                    </ul>
                </div>
              
            </div>
        {
            
            isAuthanticated? (
                <Link to={`/edit/${id}`} >
                        Edit
                </Link>
               
            ):(null)
        }

        <div className="modal fade" id={id}  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">

                    <div className="modal__img" style={{background: 'url('+imageURL+')'}}>
                    </div>

                    <div className="modal__body">

                        <h2 className="bold">{name}</h2>
                        <ul>
                            <li><span className="bold">Country: </span>{country} </li>
                            <li><span className="bold">Distance: </span>{distance} </li>
                            <li><span className="bold">Duration: </span>{actualLength} </li>
                            
                        </ul>
                        <p className="modal__body__description"> {description}</p>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthanticated: !!state.auth.uid
});


export default connect(mapStateToProps)(TrailListItem);