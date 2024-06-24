import { combineReducers, createStore } from 'redux';
import { conuntriesReducer } from './slices/contris';

const  rootReducer = combineReducers({
    countrisData : conuntriesReducer
})

const store = createStore(rootReducer);

export default store;