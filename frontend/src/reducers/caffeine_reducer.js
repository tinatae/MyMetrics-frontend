import { RECEIVE_ALL_CAFFEINES, RECEIVE_USER_CAFFEINES, RECEIVE_CAFFEINE, RECEIVE_NEW_CAFFEINE, REMOVE_CAFFEINE } from "../actions/caffeine_actions";

const CaffeinesReducer = (state = { all: {}, user: {}, single: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_CAFFEINES:
      newState.all = action.caffeines.data;
      const publicCaffeine = [];

      for (let i = 0; i < action.caffeines.data.length; i++) {
        if (action.caffeines.data[i].makePrivate !== true) {
          publicCaffeine.push(action.caffeines.data[i])
        };
      };

      newState.publicCaffeine = publicCaffeine;  

      return newState;
    case RECEIVE_USER_CAFFEINES:
      newState.user = action.caffeines.data;

      const todayMonth = new Date().getMonth() + 1;
      const todayDate = new Date().getDate();

      let todaysMetric;

      action.caffeines.data.reverse().map(metric => {
        if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
          return (todaysMetric = metric)
        } else { return todaysMetric }
      })

      newState.userTodayMetric = todaysMetric;
      
      return newState;
    case RECEIVE_CAFFEINE:
      newState.single = action.caffeine.data;
      return newState;
    case RECEIVE_NEW_CAFFEINE:
      newState.new = action.caffeine.data;
      return newState;
    case REMOVE_CAFFEINE:
      delete newState.all[action.caffeine.data._id]
      return newState;
    default:
      return state;
  }
};

export default CaffeinesReducer;
