import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (placeName, location, image) => {
    return dispatch => {
        //type: ADD_PLACE,
        //placeName: placeName,
        //location: location,
        //image: image
        const placeData = {
            name: placeName,
            location: location
        };
        fetch("https://us-central1-awesome-places-4680f.cloudfunctions.net/storeImage", {
            method: "POST",
            body: JSON.stringify({
                image: image.base64
            })    
        })
        .catch(err => console.log(err))
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
        });
        //fetch("https://awesome-places-4680f.firebaseio.com/places.json", {
        //    method: "POST",
        //    body: JSON.stringify(placeData)
        //})
        //.catch(err => console.log(err))
        //.then(res => res.json())
        //.then(parsedRes => {
        //    console.log(parsedRes);
        //});
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    };
};
