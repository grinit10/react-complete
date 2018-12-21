import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import counter from './store/reducers/counter';
import results from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReduces = combineReducers({
    counter: counter,
    results: results
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggermiddleware = store => {
    return next => {
        return action => {
            console.log('from middleware, current action is: ' + action.type);
            next(action);
            console.log('from middleware, current state is: ' + store.getState());            
        }
    }
}

const store = createStore(rootReduces, composeEnhancers(applyMiddleware(loggermiddleware, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
