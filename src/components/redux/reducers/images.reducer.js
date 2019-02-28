import { imageaction } from './../actions';

const initState = {}

const imagesReducer = (state = initState, action) => {
    switch (action.type) {
        case imageaction.LOAD:
            return { ...state.images }
        case imageaction.LOAD_SUCCESS:
            return { ...state.images, images: action.payload }
        default:
            return { ...state.images }
    }
}

export default imagesReducer;