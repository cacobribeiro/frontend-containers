import { ALL_CONTAINERS } from '../actions/containers';

const INITIAL_STATE = {
  containers: [],
};

const containers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_CONTAINERS:
      return {
        ...state,
        containers: action.containers,
      };
    default:
      return state;
  }
};

export default containers;
