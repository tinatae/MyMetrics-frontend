import { connect } from "react-redux";
import { fetchBadFat, editBadFat } from "../../../actions/badfat_actions";
import BadFatsEditForm from "./badfats_edit_form";

const mSTP = (state) => {
    return {
        badfat: state.badfats.single,
        formType: "Update Not So Great Fats Metric",
    };
};

const mDTP = dispatch => ({
    fetchBadFat: id => dispatch(fetchBadFat(id)),
    editBadFat: data => dispatch(editBadFat(data))
});

export default connect(mSTP, mDTP)(BadFatsEditForm)