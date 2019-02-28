import { imageaction } from './../actions';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case imageaction.LOAD:
            return null
        case imageaction.LOAD_SUCCESS:
            return null
        case imageaction.LOAD_FAILURE:
            return action.payload
        default:
            return state
    }
}

export default errorReducer;