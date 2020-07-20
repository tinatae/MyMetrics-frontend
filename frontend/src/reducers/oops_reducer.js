import {
    RECEIVE_ALL_OOPS,
    RECEIVE_USER_OOPS,
    RECEIVE_OOP,
    RECEIVE_NEW_OOP,
    REMOVE_OOP,
} from "../actions/oop_actions";

const OopsReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_OOPS:
            newState.all = action.oops.data;
            const publicOop = [];

            for (let i = 0; i < action.oops.data.length; i++) {
                if (action.oops.data[i].makePrivate !== true) {
                    publicOop.push(action.oops.data[i])
                };
            };

            newState.publicOop = publicOop;  

            return newState;
        case RECEIVE_USER_OOPS:
            newState.user = action.oops.data;

            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.oops.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;
            
            return newState;
        case RECEIVE_OOP:
            newState.single = action.oop.data;
            return newState;
        case RECEIVE_NEW_OOP:
            newState.new = action.oop.data;
            return newState;
        case REMOVE_OOP:
            delete newState.all[action.oop.data._id]
            return newState;
        default:
            return state;
    }
};

export default OopsReducer;