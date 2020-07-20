import {
    RECEIVE_ALL_VEGETABLES,
    RECEIVE_USER_VEGETABLES,
    RECEIVE_VEGETABLE,
    RECEIVE_NEW_VEGETABLE,
    REMOVE_VEGETABLE,
} from "../actions/vegetable_actions";

const VegetablesReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_VEGETABLES:
            newState.all = action.vegetables.data;
            const publicVegetable = [];

            for (let i = 0; i < action.vegetables.data.length; i++) {
                if (action.vegetables.data[i].makePrivate !== true) {
                    publicVegetable.push(action.vegetables.data[i])
                };
            };

            newState.publicVegetable = publicVegetable;  

            return newState;
        case RECEIVE_USER_VEGETABLES:
            newState.user = action.vegetables.data;

            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.vegetables.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;
            
            return newState;
        case RECEIVE_VEGETABLE:
            newState.single = action.vegetable.data;
            return newState;
        case RECEIVE_NEW_VEGETABLE:
            newState.new = action.vegetable.data;
            return newState;
        case REMOVE_VEGETABLE:
            delete newState.all[action.vegetable.data._id]
            return newState;
        default:
            return state;
    }
};

export default VegetablesReducer;