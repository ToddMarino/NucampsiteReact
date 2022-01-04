import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';


export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            // concat(comment) takes state, makes a copy and concatinates the new comment and returns new state to Redux store
            return state.concat(comment);
        default: 
            return state;
    }
}