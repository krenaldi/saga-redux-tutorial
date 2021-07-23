import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
// create & import store
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// connect redux-saga
import createSagaMiddleware from 'redux-saga'; 
import rootSaga from './sagas';  
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://rem-rest-api.herokuapp.com/api';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
