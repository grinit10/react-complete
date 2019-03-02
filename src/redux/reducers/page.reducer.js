import { imageaction } from './../actions';

const pageReducer = (state = 0, action) => {
    switch (action.type) {
        case imageaction.LOAD:
            return state
        case imageaction.LOAD_SUCCESS:
            return state + 1
        default:
            return state
    }
}

export default pageReducer;