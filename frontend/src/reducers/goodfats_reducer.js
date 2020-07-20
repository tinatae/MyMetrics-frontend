import {
  RECEIVE_ALL_GOOD_FATS,
  RECEIVE_USER_GOOD_FATS,
  RECEIVE_GOOD_FAT,
  RECEIVE_NEW_GOOD_FAT,
  REMOVE_GOOD_FAT,
} from "../actions/goodfat_actions";

const GoodFatsReducer = (
  state = { all: {}, user: {}, single: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_GOOD_FATS:
      newState.all = action.goodfats.data;
      const publicGoodFat = [];

      for (let i = 0; i < action.goodfats.data.length; i++) {
        if (action.goodfats.data[i].makePrivate !== true) {
          publicGoodFat.push(action.goodfats.data[i])
        };
      };

      newState.publicGoodFat = publicGoodFat;  

      return newState;
    case RECEIVE_USER_GOOD_FATS:
      newState.user = action.goodfats.data;

      const todayMonth = new Date().getMonth() + 1;
      const todayDate = new Date().getDate();

      let todaysMetric;

      action.goodfats.data.reverse().map(metric => {
        
        if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
          return (todaysMetric = metric)
        } else { return todaysMetric }
      })

      newState.userTodayMetric = todaysMetric;
      
      return newState;
    case RECEIVE_GOOD_FAT:
      newState.single = action.goodfat.data;
      return newState;
    case RECEIVE_NEW_GOOD_FAT:
      newState.new = action.goodfat.data;
      return newState;
    case REMOVE_GOOD_FAT:
      delete newState.all[action.goodfat.data._id]
      return newState;
    default:
      return state;
  }
};

export default GoodFatsReducer;
