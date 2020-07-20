import { connect } from "react-redux";
import { fetchMindful, editMindful } from "../../../actions/mindful_actions";
import MindfulsEditForm from "./mindfuls_edit_form";

const mSTP = (state) => {
    return {
      mindful: state.mindfuls.single,
      formType: "Update Mindfulness Metric"
    };
};

const mDTP = dispatch => ({
    fetchMindful: id => dispatch(fetchMindful(id)),
    editMindful: data => dispatch(editMindful(data))
});

export default connect(mSTP, mDTP)(MindfulsEditForm)