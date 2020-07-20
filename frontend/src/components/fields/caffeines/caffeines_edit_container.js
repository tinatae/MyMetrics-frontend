import { connect } from "react-redux";
import { fetchCaffeine, editCaffeine } from "../../../actions/caffeine_actions";
import CaffeinesEditForm from "./caffeines_edit_form";

const mSTP = (state) => {
    return {
      caffeine: state.caffeines.single,
      formType: "Update Caffeine Metric"
    };
};

const mDTP = dispatch => ({
    fetchCaffeine: id => dispatch(fetchCaffeine(id)),
    editCaffeine: data => dispatch(editCaffeine(data))
});

export default connect(mSTP, mDTP)(CaffeinesEditForm)