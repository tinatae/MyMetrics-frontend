import { connect } from "react-redux";
import { fetchLocalBiz, editLocalBiz } from "../../../actions/localbiz_actions";
import LocalBizsEditForm from "./localbizs_edit_form";

const mSTP = (state) => {
    return {
      localbiz: state.localbizs.single,
      formType: "Update Local Business Metric"
    };
};

const mDTP = dispatch => ({
    fetchLocalBiz: id => dispatch(fetchLocalBiz(id)),
    editLocalBiz: data => dispatch(editLocalBiz(data))
});

export default connect(mSTP, mDTP)(LocalBizsEditForm)