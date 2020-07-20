import { connect } from "react-redux";
import { fetchCarb, editCarb } from "../../../actions/carb_actions";
import CarbsEditForm from "./carbs_edit_form";

const mSTP = (state) => {
    return {
      carb: state.carbs.single,
      formType: "Update Carb Metric"
    };
};

const mDTP = dispatch => ({
    fetchCarb: id => dispatch(fetchCarb(id)),
    editCarb: data => dispatch(editCarb(data))
});

export default connect(mSTP, mDTP)(CarbsEditForm)