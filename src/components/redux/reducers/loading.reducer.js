import { imageaction } from './../actions';

const initState = false

const loadingReducer = (state = initState, action) => {
    switch (action.type) {
        case imageaction.LOAD:
            return true
        case imageaction.LOAD_SUCCESS:
            return false
        case imageaction.LOAD_FAILURE:
            return false
        default:
            return false
    }
}

export default loadingReducer;