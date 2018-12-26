import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { createStore, applyMiddleware,combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {appConstants as constants} from 'appConstants';
import AppLayout from './appLayout';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../public/assets/sass/style.scss';
import rootReducer from './rootReducer'


const BootstrapedElement = document.getElementById(constants.ELEMENT_TO_BOOTSTRAP);
const middleware = [ thunk ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Need to get the combined reducer
 * our entire applications state (store) is just whatever gets returned from all your reducers
 * */

//const rootReducer = combineReducers(_.extend({},  rootViewReducer,rootcomponentReducer));

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
  
  

// store.subscribe(() => {
//   console.log(store.getState()); 
// });
ReactDom.render(<BrowserRouter>
      <Provider store={store}>
          <AppLayout />
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
