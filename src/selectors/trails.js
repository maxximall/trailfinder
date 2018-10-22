//Return the list of filtered trails

const getFilteredTrails = (trails, filters) => {
    return trails.filter((trail)=>{
        const location =  filters.location === '' || trail.location === filters.location;
        const duration =  filters.duration === '' || trail.duration === filters.duration;
        const difficulty = filters.difficulty === '' ||trail.difficulty === filters.difficulty;
        const textMatch = trail.name.toLowerCase().includes(filters.text.toLowerCase());        

        return location && duration && difficulty && textMatch
    })
}

export default getFilteredTrails;