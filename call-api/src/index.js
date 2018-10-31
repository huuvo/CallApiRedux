import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import Saga from './saga/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore (

    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_(),
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(Saga);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
