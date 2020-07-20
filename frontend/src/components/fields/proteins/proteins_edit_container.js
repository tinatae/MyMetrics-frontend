import { connect } from "react-redux";
import { fetchProtein, editProtein } from "../../../actions/protein_actions";
import ProteinsEditForm from "./proteins_edit_form";

const mSTP = (state) => {
    return {
        protein: state.proteins.single,
        formType: "Update Protein Metric",
    };
};

const mDTP = dispatch => ({
    fetchProtein: id => dispatch(fetchProtein(id)),
    editProtein: data => dispatch(editProtein(data))
});

export default connect(mSTP, mDTP)(ProteinsEditForm)