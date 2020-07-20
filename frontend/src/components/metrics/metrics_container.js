import { connect } from "react-redux";

import Metrics from "./metrics";

const mSTP = state => {
  return {
    currentUser: state.session.user,
  };
};

// const mDTP = dispatch => {
//   return {
//     fetchAllSugars: () => dispatch(fetchAllSugars())
//   };
// };

export default connect(mSTP, null)(Metrics);
