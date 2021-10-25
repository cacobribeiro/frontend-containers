import { combineReducers } from 'redux';
import Containers from './Containers';
import updateContainers from './updateContainers';

const rootReducer = combineReducers({
  Containers,
  updateContainers,
});

export default rootReducer;
