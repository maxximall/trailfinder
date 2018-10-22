//reducer is a pure function that takes previous state and action and returns a new state

const defaultTrailsReducer = [];

const trailsReducer = (state = defaultTrailsReducer, action) => {
    switch(action.type) {
        case 'ADD_TRAIL':
            return [
                ...state,
                action.trail
            ];
        case 'EDIT_TRAIL':
            return state.map((trail)=>{
                if(trail.id === action.id){
                    return {
                        ...trail,
                        ...action.updates
                    }
                }else{
                    return trail
                }
            });
        case 'SET_TRAILS':
            return action.trails
        case 'DELETE_TRAIL':
            return state.filter((trail)=>trail.id !== action.id)
        default:
            return state

    }
}
export default trailsReducer;