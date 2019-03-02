import { imageaction } from './../actions';

const initState = {}

const imagesReducer = (state = initState, action) => {
    console.log(state)
    switch (action.type) {
        case imageaction.LOAD:
            return { ...state }
        case imageaction.LOAD_SUCCESS:
            return [ ...state, ...action.payload ]
        default:
            return { ...state.images }
    }
}

export default imagesReducer;