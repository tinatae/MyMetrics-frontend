import {
    RECEIVE_ALL_CARBS,
    RECEIVE_USER_CARBS,
    RECEIVE_CARB,
    RECEIVE_NEW_CARB,
    REMOVE_CARB,
} from "../actions/carb_actions";

const CarbsReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_CARBS:
            newState.all = action.carbs.data;

            const publicCarb = [];

            for (let i = 0; i < action.carbs.data.length; i++) {
                if (action.carbs.data[i].makePrivate !== true) {
                    publicCarb.push(action.carbs.data[i])
                };
            };

            newState.publicCarb = publicCarb;
            return newState;
        case RECEIVE_USER_CARBS:
            newState.user = action.carbs.data;

            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.carbs.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;

            return newState;
        case RECEIVE_CARB:
            newState.single = action.carb.data;
            return newState;
        case RECEIVE_NEW_CARB:
            newState.new = action.carb.data;
            return newState;
        case REMOVE_CARB:
            delete newState.all[action.carb.data._id]
            return newState;
        default:
            return state;
    }
};

export default CarbsReducer;