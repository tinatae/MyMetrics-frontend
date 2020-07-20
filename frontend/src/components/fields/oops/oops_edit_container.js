import { connect } from "react-redux";
import { fetchOop, editOop } from "../../../actions/oop_actions";
import OopsEditForm from "./oops_edit_form";

const mSTP = (state) => {
    return {
        oop: state.oops.single,
        formType: "Update Oops Metric",
    };
};

const mDTP = dispatch => ({
    fetchOop: id => dispatch(fetchOop(id)),
    editOop: data => dispatch(editOop(data))
});

export default connect(mSTP, mDTP)(OopsEditForm)