import {RECEIVE_ALL_HYDRATIONS, RECEIVE_USER_HYDRATIONS, RECEIVE_HYDRATION, RECEIVE_NEW_HYDRATION, REMOVE_HYDRATION} from "../actions/hydration_actions";

const HydrationsReducer = (
  state = { all: {}, user: {}, single: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_HYDRATIONS:
      newState.all = action.hydrations.data;
      const publicHydration = [];

      for (let i = 0; i < action.hydrations.data.length; i++) {
        if (action.hydrations.data[i].makePrivate !== true) {
          publicHydration.push(action.hydrations.data[i])
        };
      };

      newState.publicHydration = publicHydration;  

      return newState;
    case RECEIVE_USER_HYDRATIONS:
      newState.user = action.hydrations.data;

      const todayMonth = new Date().getMonth() + 1;
      const todayDate = new Date().getDate();

      let todaysMetric;

      action.hydrations.data.reverse().map(metric => {
        if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
          return (todaysMetric = metric)
        } else { return todaysMetric }
      })

      newState.userTodayMetric = todaysMetric;
      
      return newState;
    case RECEIVE_HYDRATION:
      newState.single = action.hydration.data;
      return newState;
    case RECEIVE_NEW_HYDRATION:
      newState.new = action.hydration.data;
      return newState;
    case REMOVE_HYDRATION:
      delete newState.all[action.hydration.data._id]
      return newState;
    default:
      return state;
  }
};

export default HydrationsReducer;
