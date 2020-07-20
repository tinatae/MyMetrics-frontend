import {
    RECEIVE_ALL_LOCAL_BIZS,
    RECEIVE_USER_LOCAL_BIZS,
    RECEIVE_LOCAL_BIZ,
    RECEIVE_NEW_LOCAL_BIZ,
    REMOVE_LOCAL_BIZ,
} from "../actions/localbiz_actions";

const LocalBizsReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_LOCAL_BIZS:
            newState.all = action.localbizs.data;
            const publicLocalBiz = [];

            for (let i = 0; i < action.localbizs.data.length; i++) {
                if (action.localbizs.data[i].makePrivate !== true) {
                    publicLocalBiz.push(action.localbizs.data[i])
                };
            };

            newState.publicLocalBiz = publicLocalBiz;  
            return newState;
        case RECEIVE_USER_LOCAL_BIZS:
            newState.user = action.localbizs.data;

            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.localbizs.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;
            
            return newState;
        case RECEIVE_LOCAL_BIZ:
            newState.single = action.localbiz.data;
            return newState;
        case RECEIVE_NEW_LOCAL_BIZ:
            newState.new = action.localbiz.data;
            return newState;
        case REMOVE_LOCAL_BIZ:
            delete newState.all[action.localbiz.data._id]
            return newState;
        default:
            return state;
    }
};

export default LocalBizsReducer;