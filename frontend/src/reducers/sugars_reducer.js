import {
  RECEIVE_ALL_SUGARS,
  RECEIVE_USER_SUGARS,
  RECEIVE_SUGAR,
  RECEIVE_NEW_SUGAR,
  REMOVE_SUGAR,
} from "../actions/sugar_actions";

const SugarsReducer = (state = { all: {}, user: {}, single: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_SUGARS:
      newState.all = action.sugars.data;
      const publicSugar = [];

      for (let i = 0; i < action.sugars.data.length; i++) {
        if (action.sugars.data[i].makePrivate !== true) {
          publicSugar.push(action.sugars.data[i])
        };
      };

      newState.publicSugar = publicSugar;  

      return newState;
    case RECEIVE_USER_SUGARS:
      newState.user = action.sugars.data;

      const todayMonth = new Date().getMonth() + 1;
      const todayDate = new Date().getDate();

      let todaysMetric;

      action.sugars.data.reverse().map(metric => {
        if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
          return (todaysMetric = metric)
        } else { return todaysMetric }
      })

      newState.userTodayMetric = todaysMetric;
      
      return newState;
    case RECEIVE_SUGAR:
      newState.single = action.sugar.data;
      return newState;
    case RECEIVE_NEW_SUGAR:
      newState.new = action.sugar.data;
      return newState;
    case REMOVE_SUGAR:
      delete newState.all[action.sugar.data._id]
      return newState;
      
    default:
      return state;
  }
};

export default SugarsReducer;

