import { RECEIVE_ALL_SLEEPS, RECEIVE_USER_SLEEPS, RECEIVE_SLEEP, RECEIVE_NEW_SLEEP, REMOVE_SLEEP} from "../actions/sleep_actions";

const SleepsReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_SLEEPS:
            newState.all = action.sleeps.data;
            const publicSleep = [];

            for (let i = 0; i < action.sleeps.data.length; i++) {
                if (action.sleeps.data[i].makePrivate !== true) {
                    publicSleep.push(action.sleeps.data[i])
                };
            };

            newState.publicSleep = publicSleep;  

            return newState;
        case RECEIVE_USER_SLEEPS:
            newState.user = action.sleeps.data;

            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.sleeps.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;
            
            return newState;
        case RECEIVE_SLEEP:
            newState.single = action.sleep.data;
            return newState;
        case RECEIVE_NEW_SLEEP:
            newState.new = action.sleep.data;
            return newState;
        case REMOVE_SLEEP:
            delete newState.all[action.sleep.data._id]
            return newState;
        default:
            return state;
    }
};

export default SleepsReducer;