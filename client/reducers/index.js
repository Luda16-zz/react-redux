import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = compbineReducers({posts, commnets, router: routerReducer});

export default comments;