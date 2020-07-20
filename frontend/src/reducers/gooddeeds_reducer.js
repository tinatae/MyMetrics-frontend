import {
    RECEIVE_ALL_GOOD_DEEDS,
    RECEIVE_USER_GOOD_DEEDS,
    RECEIVE_GOOD_DEED,
    RECEIVE_NEW_GOOD_DEED,
    REMOVE_GOOD_DEED,
} from "../actions/gooddeed_actions";

const GoodDeedsReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_GOOD_DEEDS:
            newState.all = action.gooddeeds.data;
            const publicGoodDeed = [];

            for (let i = 0; i < action.gooddeeds.data.length; i++) {
                if (action.gooddeeds.data[i].makePrivate !== true) {
                    publicGoodDeed.push(action.gooddeeds.data[i])
                };
            };

            newState.publicGoodDeed = publicGoodDeed;  

            return newState;
        case RECEIVE_USER_GOOD_DEEDS:
            newState.user = action.gooddeeds.data;

            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.gooddeeds.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;
            
            return newState;
        case RECEIVE_GOOD_DEED:
            newState.single = action.gooddeed.data;
            return newState;
        case RECEIVE_NEW_GOOD_DEED:
            newState.new = action.gooddeed.data;
            return newState;
        case REMOVE_GOOD_DEED:
            delete newState.all[action.gooddeed.data._id]
            return newState;
        default:
            return state;
    }
};

export default GoodDeedsReducer;