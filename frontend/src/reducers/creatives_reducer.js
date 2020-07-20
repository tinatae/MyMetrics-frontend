import {
    RECEIVE_ALL_CREATIVES,
    RECEIVE_USER_CREATIVES,
    RECEIVE_CREATIVE,
    RECEIVE_NEW_CREATIVE,
    REMOVE_CREATIVE,
} from "../actions/creative_actions";

const CreativesReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_CREATIVES:
            newState.all = action.creatives.data;

            const publicCreative = [];

            for (let i = 0; i < action.creatives.data.length; i++) {
                if (action.creatives.data[i].makePrivate !== true) {
                    publicCreative.push(action.creatives.data[i])
                };
            };

            newState.publicCreative = publicCreative;  
            
            return newState;
        case RECEIVE_USER_CREATIVES:
            newState.user = action.creatives.data;

            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.creatives.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;
            
            return newState;
        case RECEIVE_CREATIVE:
            newState.single = action.creative.data;
            return newState;
        case RECEIVE_NEW_CREATIVE:
            newState.new = action.creative.data;
            return newState;
        case REMOVE_CREATIVE:
            delete newState.all[action.creative.data._id]
            return newState;
        default:
            return state;
    }
};

export default CreativesReducer;