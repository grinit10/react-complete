import * as actions from './../../store/actions/actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actions.STORE_RESULTS:
        return {
            ...state,
            results: state.results.concat(action.value)
        }
        case actions.REMOVE_RESULTS:
        const delindex = state.results.indexOf(action.value)
        console.log(delindex)
        return {
            ...state,
            results: state.results.slice().filter(item => item !== action.value)
        }
    }
    return state;
};

export default reducer;