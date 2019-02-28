import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import configureStore from './components/redux/store';

const store = configureStore()
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Provider store={store}>
                    <ImageGrid />
                </Provider>
            </div>
        );
    }
}

export default App;
