import {
    RECEIVE_ALL_LEARNINGS,
    RECEIVE_USER_LEARNINGS,
    RECEIVE_LEARNING,
    RECEIVE_NEW_LEARNING,
    REMOVE_LEARNING,
} from "../actions/learning_actions";

const LearningsReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_LEARNINGS:
            newState.all = action.learnings.data;
            const publicLearning = [];

            for (let i = 0; i < action.learnings.data.length; i++) {
                if (action.learnings.data[i].makePrivate !== true) {
                    publicLearning.push(action.learnings.data[i])
                };
            };

            newState.publicLearning = publicLearning;  
            return newState;
        case RECEIVE_USER_LEARNINGS:
            newState.user = action.learnings.data;
            
            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.learnings.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;

            return newState;
        case RECEIVE_LEARNING:
            newState.single = action.learning.data;
            return newState;
        case RECEIVE_NEW_LEARNING:
            newState.new = action.learning.data;
            return newState;
        case REMOVE_LEARNING:
            delete newState.all[action.learning.data._id]
            return newState;
        default:
            return state;
    }
};

export default LearningsReducer;