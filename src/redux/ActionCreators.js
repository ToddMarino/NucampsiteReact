import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
    // When the identifier of the property is the same as its value, you can type it out as campsiteId rather than campsiteId: campsiteId
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }

});

export const fetchCampsites = () => dispatch => {
    dispatch(campsitesLoading());

    // ****** call to fetch and return the result. fetch needs a url which is what baseUrl set up and then campsites data. 
    return fetch(baseUrl + 'campsites')
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
        // ****** call to fetch returns a Promise. use ".then" to chain response to take the returned JSON data and convert to javascript: array of campsites.
        .then(response => response.json())
        // ****** array of campsites is then dispatched with the addcampsites action creator to be used as its payload.
        .then(campsites => dispatch(addCampsites(campsites)))
        .catch(error => dispatch(campsitesFailed(error.message)))
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
})

export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if(response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)))
}

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
})

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const fetchPromotions = () => dispatch => {
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)))
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
})

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
})

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
})