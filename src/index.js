import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './Store/reducers/rootReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './Config/fireConfig';

// Starting Point of React Single Page Application

const initialState = {}

const store = createStore(rootReducers, initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase}))
  )
);

// Configuring Redux Store

const rrfProps = {
  firebase,
  config : {
    userProfile: 'users',
    useFirestoreForProfile: true
  },
  dispatch : store.dispatch,
  createFirestoreInstance
}

//Main Rendering

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();