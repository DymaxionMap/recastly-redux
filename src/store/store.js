import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
// createStore arguments:
// 1. root reducer
// 2. initial state
// 3. enhancers (enhance the store with third-party capabilities such as 
//    middleware, time travel, persistence, etc.)
 
var store = createStore(
  rootReducer,
  {
    currentVideo: null,
    videoList: []
  },
  applyMiddleware(thunk)
);

export default store;