import { RECEIVE_ALL_MINDFULS, RECEIVE_USER_MINDFULS, RECEIVE_MINDFUL, RECEIVE_NEW_MINDFUL, REMOVE_MINDFUL} from "../actions/mindful_actions";

const MindfulsReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_MINDFULS:
            newState.all = action.mindfuls.data;
            const publicMindful = [];

            for (let i = 0; i < action.mindfuls.data.length; i++) {
                if (action.mindfuls.data[i].makePrivate !== true) {
                    publicMindful.push(action.mindfuls.data[i])
                };
            };

            newState.publicMindful = publicMindful;  
            return newState;
        case RECEIVE_USER_MINDFULS:
            newState.user = action.mindfuls.data;

            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.mindfuls.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;
            
            return newState;
        case RECEIVE_MINDFUL:
            newState.single = action.mindful.data;
            return newState;
        case RECEIVE_NEW_MINDFUL:
            newState.new = action.mindful.data;
            return newState;
        case REMOVE_MINDFUL:
            delete newState.all[action.mindful.data._id]
            return newState;
        default:
            return state;
    }
};

export default MindfulsReducer;