//actions send the information from the application to the store
//actions only define what has happened but not how the state has changed
import uuid from 'uuid';
import firebase from '../firebase/firebase';

//ADD_TRAIL
export const addTrail = (trail) => ({
    type: 'ADD_TRAIL',
    trail
});

export const startAddTrail = ({
        name='',
        location='',
        duration='',
        difficulty='',
        description='',
        imageURL='',
        actualLength='',
        distance= '',
        country='',
        durationGroup='',
        minDuration = '',
        maxDuration = ''
    } = {}) => {
    const trail = {
        name: name,
        location: location,
        duration: duration,
        difficulty: difficulty,
        description: description,
        imageURL: imageURL,
        actualLength: actualLength,
        distance: distance,
        country: country,
        durationGroup: durationGroup,
        minDuration: minDuration,
        maxDuration: maxDuration
    }
    return(dispatch) => {
        //push returns a 'firebase.database.ThenableReference' which is an object conainting several properties including 'key'
        firebase.database().ref('trails').push(trail).then((ref)=>{
            dispatch(addTrail({
            id: ref.key,
            ...trail
            }));
        })
    }
    
}
//EDIT_TRAIL
export const editTrail = (id,updates) => ({
    type: 'EDIT_TRAIL',
    id,
    updates
});
export const startEditTrail = (id, updates) => {
    return(dispatch) => {
        return firebase.database().ref(`trails/${id}`).update(updates).then(()=>{
            dispatch(editTrail(id,updates))
        })
    }
}

//REMOVE_TRAIL
export const deleteTrail = (id) => ({
    type: 'DELETE_TRAIL',
    id
});

export const startDeleteTrail = (id) => {
    return (dispatch) => {
        return firebase.database().ref(`trails/${id}`).remove().then(()=>{
            dispatch(deleteTrail(id));
        })
    }
}

//SET_TRAILS
export const setTrails = (trails) => ({
    type: 'SET_TRAILS',
    trails,
});
  
  
// //SET_TRAILS
export const startSetTrails = () => {
    return (dispatch) => {
        return firebase.database().ref('trails').once('value').then((snapshot) => {
            const trails = [];

            snapshot.forEach((childSnapshot) => {
                trails.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
                });
            });
        
            dispatch(setTrails(trails));
        });
    };
};
  