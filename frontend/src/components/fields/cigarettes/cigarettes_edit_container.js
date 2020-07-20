import { connect } from "react-redux";
import { fetchCigarette, editCigarette } from "../../../actions/cigarette_actions";
import CigarettesEditForm from "./cigarettes_edit_form";

const mSTP = (state) => {
    return {
      cigarette: state.cigarettes.single,
      formType: "Update Cigarette Metric"
    };
};

const mDTP = dispatch => ({
    fetchCigarette: id => dispatch(fetchCigarette(id)),
    editCigarette: data => dispatch(editCigarette(data))
});

export default connect(mSTP, mDTP)(CigarettesEditForm)