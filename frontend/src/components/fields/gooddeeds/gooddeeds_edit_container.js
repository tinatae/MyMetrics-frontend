import { connect } from "react-redux";
import { fetchGoodDeed, editGoodDeed } from "../../../actions/gooddeed_actions";
import GoodDeedsEditForm from "./gooddeeds_edit_form";

const mSTP = (state) => {
    return {
      gooddeed: state.gooddeeds.single,
      formType: "Update Good Deed Metric"
    };
};

const mDTP = dispatch => ({
    fetchGoodDeed: id => dispatch(fetchGoodDeed(id)),
    editGoodDeed: data => dispatch(editGoodDeed(data))
});

export default connect(mSTP, mDTP)(GoodDeedsEditForm)