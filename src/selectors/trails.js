//Return the list of filtered trails

const getFilteredTrails = (trails, filters) => {
    return trails.filter((trail)=>{
        const location =  filters.location === '' || trail.location === filters.location;
        const duration =  filters.duration === '' || trail.duration === filters.duration;
        const difficulty = filters.difficulty === '' ||trail.difficulty === filters.difficulty;      
        const textMatch = trail.name.toLowerCase().includes(filters.text.toLowerCase());        

        return location && duration && difficulty && textMatch && durationRange(trail, filters.durationRange)
    })
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
    console.log('Filter: '+ filterDuration);
    console.log('Trail: '+ trailDuration);
    
    const result = filterDuration.filter( i => trailDuration.indexOf(i) !== -1);
    return result.length > 0 ? true : false
}

export default getFilteredTrails;