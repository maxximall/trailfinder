import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, setLocation, setDuration, setDifficulty, setDurationRange} from '../actions/filters';
import InputRange from 'react-input-range';
import SelectedFilters from './SelectedFilters';
import 'react-input-range/lib/css/index.css';
import '../functions/dropdown';

class FiltersList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: { min: 0, max: 15 },
            difficulty: {easy: false, medium: false, hard: false}
          };
    }
    render() {
        return (
            <div className="filter-list">
                <div className="dropdown">
                    <a className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Difficulty
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <fieldset  onChange={(e)=>{
                            const options = {...this.state.difficulty};
                            let option = e.target.value;

                            this.setState(()=>({difficulty:{
                                        ...this.state.difficulty,
                                        [option]:!options[option]
                                    }
                                }
                            ), () => {this.props.dispatch(setDifficulty(this.state.difficulty));});
                            
                            
                        }}>
                            <label className="checkbox-container">Easy
                                <input type="checkbox" name="easy" value="easy"/>
                                <span className="checkmark"></span>
                            </label>
                            
                            <label for="medium">Medium</label>
                            <input type="checkbox" name="medium" value="medium" />
                            <label for="hard" >Hard</label>
                            <input type="checkbox"  name="hard" value="hard" />
                        </fieldset>
                    </div>
                </div>
                <div className="dropdown">
                    <a className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Length
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <InputRange
                        maxValue={20}
                        minValue={0}
                        value={this.state.value}
                        onChange={(value)=> {
                            this.setState({ value });
                            this.props.dispatch(setDurationRange(value))
                        }
                    } />
                    </div>
                </div>
            
                 <div className="filters__block" >
                     <select onChange={(e)=>{
                         this.props.dispatch(setLocation(e.target.value));
                     }}>
                         <option value="">Any Region</option>    
                         <option value="Europe">Europe</option>
                         <option value="Asia">Asia</option>
                         <option value="Africa">Africa</option>
                         <option value="Americas">Americas</option>
                         <option value="Oceania">Oceania</option>
                     </select>
                 </div>
                 
                
                
                 
             </div>
        )
        
    }
    
}
const mapPropsToState = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapPropsToState)(FiltersList);