import { RECEIVE_ALL_FASTINGS, RECEIVE_USER_FASTINGS, RECEIVE_FASTING, RECEIVE_NEW_FASTING, REMOVE_FASTING } from "../actions/fasting_actions";

const FastingsReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_FASTINGS:
            newState.all = action.fastings.data;

            const publicFasting = [];

            for (let i = 0; i < action.fastings.data.length; i++) {
                if (action.fastings.data[i].makePrivate !== true) {
                    publicFasting.push(action.fastings.data[i])
                };
            };

            newState.publicFasting = publicFasting;  
            return newState;
        case RECEIVE_USER_FASTINGS:
            newState.user = action.fastings.data;

            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.fastings.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;
            
            return newState;
        case RECEIVE_FASTING:
            newState.single = action.fasting.data;
            return newState;
        case RECEIVE_NEW_FASTING:
            newState.new = action.fasting.data;
            return newState;
        case REMOVE_FASTING:
            delete newState.all[action.fasting.data._id]
            return newState;
        default:
            return state;
    }
};

export default FastingsReducer;