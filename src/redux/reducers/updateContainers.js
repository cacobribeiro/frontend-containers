import { ALTER_CONTAINER } from '../actions/updateContainers';

const INITIAL_STATE = {
    container: {
        id: '',
        fullName: '',
        containerId: '',
        type: '',
        status: '',
        category: '',
    },
};

const updateContainers = (state = INITIAL_STATE, action) => {
  const { key, value } = action;
    switch (action.type) {
        case ALTER_CONTAINER:
            if (!action.key) {
                return { ...state, container: action.value.containerInfo };
            } else {
                return { ...state, container: {...state.container, [key]: value} };
            }
        default:
            return state;
    }
};

export default updateContainers;
