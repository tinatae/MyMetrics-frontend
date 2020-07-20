import {
  RECEIVE_ALL_BAD_FATS,
  RECEIVE_USER_BAD_FATS,
  RECEIVE_BAD_FAT,
  RECEIVE_NEW_BAD_FAT,
  REMOVE_BAD_FAT,
} from "../actions/badfat_actions";

const BadFatsReducer = (
  state = { all: {}, user: {}, single: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_BAD_FATS:
      newState.all = action.badfats.data;

      const publicBadFat = [];

      for (let i = 0; i < action.badfats.data.length; i++) {
        if (action.badfats.data[i].makePrivate !== true) {
          publicBadFat.push(action.badfats.data[i])
        };
      };

      newState.publicBadFat = publicBadFat;  
      return newState;
      
    case RECEIVE_USER_BAD_FATS:
      newState.user = action.badfats.data;

      const todayMonth = new Date().getMonth() + 1;
      const todayDate = new Date().getDate();

      let todaysMetric;

      action.badfats.data.reverse().map(metric => {
        if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
          return (todaysMetric = metric)
        } else { return todaysMetric }
      })

      newState.userTodayMetric = todaysMetric;
      
      return newState;
    case RECEIVE_BAD_FAT:
      newState.single = action.badfat.data;
      return newState;
    case RECEIVE_NEW_BAD_FAT:
      newState.new = action.badfat.data;
      return newState;
    case REMOVE_BAD_FAT:
      delete newState.all[action.badfat.data._id]
      return newState;
    default:
      return state;
  }
};

export default BadFatsReducer;
