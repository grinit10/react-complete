const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'INCREMENT':
        return {
            ...state,
            counter: state.counter + 1
        }
        case 'DECREMENT':
        return {
            ...state,
            counter: state.counter - 1
        }
        case 'ADD':
        return {
            ...state,
            counter: state.counter + action.value
        }
        case 'SUB':
        return {
            ...state,
            counter: state.counter - action.value
        }
        case 'STORE_RESULTS':
        return {
            ...state,
            results: state.results.concat(state.counter)
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