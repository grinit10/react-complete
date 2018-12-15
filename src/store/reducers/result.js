const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'STORE_RESULTS':
        return {
            ...state,
            results: state.results.concat(action.value)
        }
        case 'REMOVE_RESULTS':
        const delindex = state.results.indexOf(action.value)
        console.log(delindex)
        return {
            ...state,
            results: state.results.slice().filter(item => item !== action.value)
        }
    }

    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    return state;
};

export default reducer;