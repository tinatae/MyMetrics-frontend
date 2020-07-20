import {
  RECEIVE_ALL_CIGARETTES,
  RECEIVE_USER_CIGARETTES,
  RECEIVE_CIGARETTE,
  RECEIVE_NEW_CIGARETTE,
  REMOVE_CIGARETTE,
} from "../actions/cigarette_actions";

const CigarettesReducer = (
  state = { all: {}, user: {}, single: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_CIGARETTES:
      newState.all = action.cigarettes.data;
      const publicCigarette = [];

      for (let i = 0; i < action.cigarettes.data.length; i++) {
        if (action.cigarettes.data[i].makePrivate !== true) {
          publicCigarette.push(action.cigarettes.data[i])
        };
      };

      newState.publicCigarette = publicCigarette;  

      return newState;
    case RECEIVE_USER_CIGARETTES:
      newState.user = action.cigarettes.data;

      const todayMonth = new Date().getMonth() + 1;
      const todayDate = new Date().getDate();

      let todaysMetric;

      action.cigarettes.data.reverse().map(metric => {
        if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
          return (todaysMetric = metric)
        } else { return todaysMetric }
      })

      newState.userTodayMetric = todaysMetric;

      return newState;
    case RECEIVE_CIGARETTE:
      newState.single = action.cigarette.data;
      return newState;
    case RECEIVE_NEW_CIGARETTE:
      newState.new = action.cigarette.data;
      return newState;
    case REMOVE_CIGARETTE:
      delete newState.all[action.cigarette.data._id]
      return newState;
    default:
      return state;
  }
};

export default CigarettesReducer;
