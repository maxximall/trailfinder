//reducer is a function that takes a previous state and an action and returns a new state

const defaultFiltersReducer = {
    location: '',
    duration: '',
    difficulty: '',
    text: ''
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
        default:
            return state
    }
}

export default filtersReducer;