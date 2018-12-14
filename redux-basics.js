const redux = require('redux');
const createstore = redux.createStore;

/*Initial state*/
const initState = {
    counter: 0
}

/*reducers*/
const rootreducer = (state = initState, action) => {
    if(action.type === 'INCREAMENT_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

/*Store creation*/
const store = createstore(rootreducer);
console.log(store.getState());

/*subscribing action*/
store.subscribe(() => console.log(store.getState()))

/*dispatching action*/
store.dispatch({type: 'INCREAMENT_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value:10});