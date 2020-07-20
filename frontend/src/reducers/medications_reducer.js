import {
    RECEIVE_ALL_MEDICATIONS,
    RECEIVE_USER_MEDICATIONS,
    RECEIVE_MEDICATION,
    RECEIVE_NEW_MEDICATION,
    REMOVE_MEDICATION,
} from "../actions/medication_actions";

const MedicationsReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_MEDICATIONS:
            newState.all = action.medications.data;
            const publicMedication = [];

            for (let i = 0; i < action.medications.data.length; i++) {
                if (action.medications.data[i].makePrivate !== true) {
                    publicMedication.push(action.medications.data[i])
                };
            };

            newState.publicMedication = publicMedication;  
            return newState;
        case RECEIVE_USER_MEDICATIONS:
            newState.user = action.medications.data;

            const todayMonth = new Date().getMonth() + 1;
            const todayDate = new Date().getDate();

            let todaysMetric;

            action.medications.data.reverse().map(metric => {
                if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
                    return (todaysMetric = metric)
                } else { return todaysMetric }
            })

            newState.userTodayMetric = todaysMetric;
            
            return newState;
        case RECEIVE_MEDICATION:
            newState.single = action.medication.data;
            return newState;
        case RECEIVE_NEW_MEDICATION:
            newState.new = action.medication.data;
            return newState;
        case REMOVE_MEDICATION:
            delete newState.all[action.medication.data._id]
            return newState;
        default:
            return state;
    }
};

export default MedicationsReducer;