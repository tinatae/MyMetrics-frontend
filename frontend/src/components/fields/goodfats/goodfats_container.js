import { connect } from "react-redux";
import GoodFats from "./goodfats";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createGoodFat } from "../../../actions/goodfat_actions";

const mSTP = state => {
  return {
    currentUser: state.session.user
  };
};

const mDTP = dispatch => {
  return {
    fetchSingleUser: id => dispatch(fetchSingleUser(id)),
    createGoodFat: data => dispatch(createGoodFat(data))
  };
};

export default connect(mSTP, mDTP)(GoodFats);
