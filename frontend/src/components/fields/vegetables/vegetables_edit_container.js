import { connect } from "react-redux";
import { fetchVegetable, editVegetable } from "../../../actions/vegetable_actions";
import VegetablesEditForm from "./vegetables_edit_form";

const mSTP = (state) => {
    return {
        vegetable: state.vegetables.single,
        formType: "Update Vegetable Metric",
    };
};

const mDTP = dispatch => ({
    fetchVegetable: id => dispatch(fetchVegetable(id)),
    editVegetable: data => dispatch(editVegetable(data))
});

export default connect(mSTP, mDTP)(VegetablesEditForm)