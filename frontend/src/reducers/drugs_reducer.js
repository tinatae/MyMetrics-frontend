import {
    RECEIVE_ALL_DRUGS,
    RECEIVE_USER_DRUGS,
    RECEIVE_DRUG,
    RECEIVE_NEW_DRUG,
    REMOVE_DRUG,
} from "../actions/drug_actions";

const DrugsReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_DRUGS:
            newState.all = action.drugs.data;

            const publicDrug = [];

            for (let i = 0; i < action.drugs.data.length; i++) {
                if (action.drugs.data[i].makePrivate !== true) {
                    publicDrug.push(action.drugs.data[i])
                };
            };

            newState.publicDrug = publicDrug;  

            return newState;
        case RECEIVE_USER_DRUGS:
            newState.user = action.drugs.data;

            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.drugs.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;

            return newState;
        case RECEIVE_DRUG:
            newState.single = action.drug.data;
            return newState;
        case RECEIVE_NEW_DRUG:
            newState.new = action.drug.data;
            return newState;
        case REMOVE_DRUG:
            delete newState.all[action.drug.data._id]
            return newState;
        default:
            return state;
    }
};

export default DrugsReducer;