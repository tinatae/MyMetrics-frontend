import { RECEIVE_ALL_EXERCISES, RECEIVE_USER_EXERCISES, RECEIVE_EXERCISE, RECEIVE_NEW_EXERCISE, REMOVE_EXERCISE } from "../actions/exercise_actions";

const ExercisesReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_EXERCISES:
            newState.all = action.exercises.data;
            const publicExercise = [];

            for (let i = 0; i < action.exercises.data.length; i++) {
                if (action.exercises.data[i].makePrivate !== true) {
                    publicExercise.push(action.exercises.data[i])
                };
            };

            newState.publicExercise = publicExercise;  
            return newState;
        case RECEIVE_USER_EXERCISES:
            newState.user = action.exercises.data;

            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.exercises.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;

            return newState;
        case RECEIVE_EXERCISE:
            newState.single = action.exercise.data;
            return newState;
        case RECEIVE_NEW_EXERCISE:
            newState.new = action.exercise.data;
            return newState;
        case REMOVE_EXERCISE:
            delete newState.all[action.exercise.data._id]
            return newState;
        default:
            return state;
    }
};

export default ExercisesReducer;