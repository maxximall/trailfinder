//Return the list of filtered trails

const getFilteredTrails = (trails, filters) => {

    return trails.filter((trail)=>{
        const location =  filters.location === '' || trail.location === filters.location;
        const duration =  filters.duration === '' || trail.duration === filters.duration;
        const textMatch = trail.name.toLowerCase().includes(filters.text.toLowerCase());        

        return location && duration && textMatch && difficultyMatch(trail, filters) && durationRange(trail, filters.durationRange)
    })
}

const difficultyMatch = (trail, filter) => {
    for(var x in filter.difficulty){
        if(filter.difficulty[x] == true && trail.difficulty[x] == filter.difficulty[x]){
            return true
        }
    }
}

const durationRange = (trail ,filter) => {
    //const durationRange = (filters.durationRange.max===20 || parseInt(trail.actualLength) <= filters.durationRange.max) && filters.durationRange.min <= parseInt(trail.actualLength);
    const trailDuration = [];
    const filterDuration = [];

    let minDuration = 0;
    let maxDuration = 0;

    if(trail.durationGroup === 'weeks'){
        minDuration = trail.minDuration * 7;
        maxDuration = trail.maxDuration * 7;
    }else if(trail.durationGroup === 'months'){
        minDuration = trail.minDuration * 30;
        maxDuration = trail.maxDuration * 30;
    }else{
        minDuration = trail.minDuration;
        maxDuration = trail.maxDuration;
    }

    //console.log(trail.name+ ' min: '+ minDuration + ' and max: '+ maxDuration);
    for(let i = minDuration; i <= (trail.maxDuration === '' ? minDuration : maxDuration); i++){
        trailDuration.push(parseInt(i));
    }
    for(let i = filter.min; i <= (filter.max === 20 ? 999 : filter.max); i++){
        filterDuration.push(parseInt(i));
    }
    
    const result = filterDuration.filter( i => trailDuration.indexOf(i) !== -1);
    return result.length > 0 ? true : false
}

export default getFilteredTrails;