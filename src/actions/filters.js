//SET_LOCATION
export const setLocation = (location = '') => ({
    type: 'SET_LOCATION',
    location
})
//SET_DURATION
export const setDuration = (duration = '') => ({
    type: 'SET_DURATION',
    duration
})
//SET_DIFFICULTY
export const setDifficulty = (difficulty = '') => ({
    type: 'SET_DIFFICULTY',
    difficulty
})

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});