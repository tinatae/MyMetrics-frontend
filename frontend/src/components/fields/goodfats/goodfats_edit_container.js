import { connect } from "react-redux";
import { fetchGoodFat, editGoodFat } from "../../../actions/goodfat_actions";
import GoodFatsEditForm from "./goodfats_edit_form";

const mSTP = (state) => {
    return {
      goodfat: state.goodfats.single,
      formType: "Update Good Fat Metric"
    };
};

const mDTP = dispatch => ({
    fetchGoodFat: id => dispatch(fetchGoodFat(id)),
    editGoodFat: data => dispatch(editGoodFat(data))
});

export default connect(mSTP, mDTP)(GoodFatsEditForm)