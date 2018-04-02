import { combineReducers } from 'redux';
import postReducer from './postReducers';

//index.js is where you map your reducers for a node i.e. posts
//Tree
  //posts
    //items --> FETCH_POSTS
    //item --> NEW_POST
  //anotherNode
    //notes
    //note

export default combineReducers({
  posts: postReducer
});
