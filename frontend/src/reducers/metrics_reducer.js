import { RECEIVE_ALL_METRICS } from "../actions/metric_actions";

const MetricsReducer = (state = { all: {}}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_METRICS:
      newState.all = action.metrics.data;
      return newState;
    default:
      return state;
  }
};

export default MetricsReducer;
