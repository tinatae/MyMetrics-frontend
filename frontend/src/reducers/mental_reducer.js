import { RECEIVE_ALL_MENTALS, RECEIVE_USER_MENTALS, RECEIVE_MENTAL, RECEIVE_NEW_MENTAL, REMOVE_MENTAL} from "../actions/mental_actions";

const MentalsReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_MENTALS:
            newState.all = action.mentals.data;
            return newState;
        case RECEIVE_USER_MENTALS:
            newState.user = action.mentals.data;
            return newState;
        case RECEIVE_MENTAL:
            newState.single = action.mental.data;
            return newState;
        case RECEIVE_NEW_MENTAL:
            newState.new = action.mental.data;
            return newState;
        case REMOVE_MENTAL:
            delete newState.all[action.mental.data._id]
            return newState;
        default:
            return state;
    }
};

export default MentalsReducer;