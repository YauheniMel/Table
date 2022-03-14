import { combineReducers, createStore } from 'redux';
import reducer from './reducers/reducer';

let reducers = combineReducers({
  reducer: reducer,
});

const store = createStore(reducers);

export default store;
