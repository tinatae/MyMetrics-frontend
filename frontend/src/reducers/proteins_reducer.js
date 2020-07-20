import {
  RECEIVE_ALL_PROTEINS,
  RECEIVE_USER_PROTEINS,
  RECEIVE_PROTEIN,
  RECEIVE_NEW_PROTEIN,
  REMOVE_PROTEIN,
} from "../actions/protein_actions";

const ProteinsReducer = (
  state = { all: {}, user: {}, single: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_PROTEINS:
      newState.all = action.proteins.data;
      const publicProtein = [];

      for (let i = 0; i < action.proteins.data.length; i++) {
        if (action.proteins.data[i].makePrivate !== true) {
          publicProtein.push(action.proteins.data[i])
        };
      };

      newState.publicProtein = publicProtein;  

      return newState;
    case RECEIVE_USER_PROTEINS:
      newState.user = action.proteins.data;

      const todayMonth = new Date().getMonth() + 1;
      const todayDate = new Date().getDate();

      let todaysMetric;

      action.proteins.data.reverse().map(metric => {
        if (new Date(metric.date).getMonth() + 1 === todayMonth && new Date(metric.date).getDate() === todayDate) {
          return (todaysMetric = metric)
        } else { return todaysMetric }
      })

      newState.userTodayMetric = todaysMetric;
      
      return newState;
    case RECEIVE_PROTEIN:
      newState.single = action.protein.data;
      return newState;
    case RECEIVE_NEW_PROTEIN:
      newState.new = action.protein.data;
      return newState;
    case REMOVE_PROTEIN:
      delete newState.all[action.protein.data._id]
      return newState;
    default:
      return state;
  }
};

export default ProteinsReducer;
