import {RECEIVE_SINGLE_USER} from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      // newState.user = action.user;
      newState.user = action.user.data;

      // newState.uMetrics = action.user.data.metrics; // PUBLIC-OK BUT DON'T NEED
      // newState.uMentals = action.user.data.mentals; // PUBLIC-OK BUT DON'T NEED
      // newState.uChallenges = action.user.data.challenges; // DON'T NEED
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;



// ORIGINAL WHICH WORKS BUT ABOVE IS CONSISTENT
// const UsersReducer = (state = {}, action) => {
//   Object.freeze(state);
//   // let newState = Object.assign({}, state);

//   switch (action.type) {
//     case RECEIVE_SINGLE_USER:
//         // newState.user = action.users.data;
//         // return newState;

//         return Object.assign({}, state, {[action.user.id]: action.user});
//     default:
//       return state;
//   }
// };

// export default UsersReducer;


