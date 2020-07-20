import { connect } from "react-redux";
import Caffeines from "./caffeines";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createCaffeine } from "../../../actions/caffeine_actions";

const mSTP = state => {
  return {
    currentUser: state.session.user
  };
};

const mDTP = dispatch => {
  return {
    fetchSingleUser: id => dispatch(fetchSingleUser(id)),
    createCaffeine: data => dispatch(createCaffeine(data))
  };
};

export default connect(mSTP, mDTP)(Caffeines);
