import { connect } from "react-redux";
import { fetchHydration, editHydration } from "../../../actions/hydration_actions";
import HydrationsEditForm from "./hydrations_edit_form";

const mSTP = (state) => {
    return {
      hydration: state.hydrations.single,
      formType: "Update Hydration Metric"
    };
};

const mDTP = dispatch => ({
    fetchHydration: id => dispatch(fetchHydration(id)),
    editHydration: data => dispatch(editHydration(data))
});

export default connect(mSTP, mDTP)(HydrationsEditForm)