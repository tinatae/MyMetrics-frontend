import { connect } from "react-redux";
import { fetchLearning, editLearning } from "../../../actions/learning_actions";
import LearningsEditForm from "./learnings_edit_form";

const mSTP = (state) => {
    return {
      learning: state.learnings.single,
      formType: "Update Learned Something New Metric"
    };
};

const mDTP = dispatch => ({
    fetchLearning: id => dispatch(fetchLearning(id)),
    editLearning: data => dispatch(editLearning(data))
});

export default connect(mSTP, mDTP)(LearningsEditForm)