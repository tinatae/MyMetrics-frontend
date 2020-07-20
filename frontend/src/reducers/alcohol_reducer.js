import {
  RECEIVE_ALL_ALCOHOLS,
  RECEIVE_USER_ALCOHOLS,
  RECEIVE_ALCOHOL,
  RECEIVE_NEW_ALCOHOL,
  REMOVE_ALCOHOL
} from "../actions/alcohol_actions";

const AlcoholsReducer = (state = { all: {}, user: {}, single: {}, new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_ALCOHOLS:
      newState.all = action.alcohols.data;

      const publicAlcohol = [];

      for (let i = 0; i < action.alcohols.data.length; i++) {
        if (action.alcohols.data[i].makePrivate !== true) {
          publicAlcohol.push(action.alcohols.data[i])
        };
      };

      newState.publicAlcohol = publicAlcohol;  

      return newState;
      
    case RECEIVE_USER_ALCOHOLS:
      newState.user = action.alcohols.data;

      const todayMonth = new Date().getMonth() + 1;
      const todayDate = new Date().getDate();

      let todaysMetric;

      action.alcohols.data.reverse().map(metric => {
        if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
          return (todaysMetric = metric)
        } else {return todaysMetric}
      })

      newState.userTodayMetric = todaysMetric;

      return newState;
    case RECEIVE_ALCOHOL:
      newState.single = action.alcohol.data;
      return newState;
    case RECEIVE_NEW_ALCOHOL:
      newState.new = action.alcohol.data;
      return newState;
    case REMOVE_ALCOHOL:
      delete newState.all[action.alcohol.data._id]
      return newState;
    default:
      return state;
  }
};

export default AlcoholsReducer;
