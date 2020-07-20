import { connect } from "react-redux";
import { fetchFasting, editFasting } from "../../../actions/fasting_actions";
import FastingsEditForm from "./fastings_edit_form";

const mSTP = (state) => {
    return {
      fasting: state.fastings.single,
      formType: "Update Fasting Metric"
    };
};

const mDTP = dispatch => ({
    fetchFasting: id => dispatch(fetchFasting(id)),
    editFasting: data => dispatch(editFasting(data))
});

export default connect(mSTP, mDTP)(FastingsEditForm)