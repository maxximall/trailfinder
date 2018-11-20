//reducer is a function that takes a previous state and an action and returns a new state

const defaultFiltersReducer = {
    location: '',
    duration: '',
    difficulty: {easy: true, medium: true, hard: true},
    text: '',
    durationRange: { min: 0, max: 15 }
}

const filtersReducer = (state = defaultFiltersReducer, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_LOCATION':
            return {
                ...state,
                location: action.location
            }
        case 'SET_DURATION':
            return {
                ...state,
                duration: action.duration
            }
        case 'SET_DIFFICULTY':
            return {
                ...state,
                difficulty: action.difficulty
            }
        case 'SET_DURATION_RANGE':
            return {
                ...state,
                durationRange: action.durationRange
            }
        case 'REMOVE_FILTER':
                console.log(action.filter)
            return {
                ...state,
                [action.filter]: defaultFiltersReducer[action.filter]
            }
        default:
            return state
    }
}

export default filtersReducer;