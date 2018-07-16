import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import hicksDemo from './hicks-demo';

export default combineReducers({
    router: routerReducer,
    hicksDemo
});
