export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUB = 'SUB'
export const STORE_RESULTS = 'STORE_RESULTS'
export const REMOVE_RESULTS = 'REMOVE_RESULTS'

export const increment = () => { return { type: INCREMENT } }

export const decrement = () => { return { type: DECREMENT } }

export const add = val => {
    return { type: ADD, value: val }
}

export const sub = val => {
    return { type: SUB, value: val }
}

const savresultsDispatcher = val => {
    return { type: STORE_RESULTS, value: val }
}

export const storeResults = val => {
    return dispatch => {
        setTimeout(() => {
            dispatch(savresultsDispatcher(val))
        }, 2000)
    }
}

export const removeResults = val => {
    return { type: REMOVE_RESULTS, value:val }
}
