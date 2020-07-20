import { connect } from "react-redux";
import { fetchCreative, editCreative } from "../../../actions/creative_actions";
import CreativesEditForm from "./creatives_edit_form";

const mSTP = (state) => {
    return {
      creative: state.creatives.single,
      formType: "Update Creativity Metric"
    };
};

const mDTP = dispatch => ({
    fetchCreative: id => dispatch(fetchCreative(id)),
    editCreative: data => dispatch(editCreative(data))
});

export default connect(mSTP, mDTP)(CreativesEditForm)