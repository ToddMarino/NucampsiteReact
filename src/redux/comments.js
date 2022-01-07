import * as ActionTypes from './ActionTypes';


export const Comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload}
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload}
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            // concat(comment) takes state, makes a copy and concatinates the new comment and returns new state to Redux store
            return {...state, comments: state.comments.concat(comment)}
        default: 
            return state;
    }
}