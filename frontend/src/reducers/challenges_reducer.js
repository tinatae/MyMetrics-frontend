import {
    RECEIVE_ALL_CHALLENGES,
    RECEIVE_USER_CHALLENGES,
    RECEIVE_CHALLENGE,
    RECEIVE_NEW_CHALLENGE,
    REMOVE_CHALLENGE
} from "../actions/challenge_actions";

const ChallengesReducer = (
    state = { all: {}, user: {}, single: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_CHALLENGES:
            newState.all = action.challenges.data;
            return newState;

        case RECEIVE_USER_CHALLENGES:
            newState.user = action.challenges.data;

            const publicChallenges = [];
            const privateChallenges = [];

            for (let i=0; i < action.challenges.data.length; i++) {
                if (action.challenges.data[i].makePrivate === false) {
                    // publicChallenges.push(action.challenges.data[i].name)
                    publicChallenges.push(action.challenges.data[i])
                } else {
                    privateChallenges.push(action.challenges.data[i].name)
                }
            };

            newState.publicChallenges = publicChallenges;   // OBJECT
            newState.privateChallenges = privateChallenges; // NAME
        
            return newState;
        case RECEIVE_CHALLENGE:
            newState.single = action.challenge.data;
            return newState;
        case RECEIVE_NEW_CHALLENGE:
            newState.new = action.challenge.data;
            return newState;
        case REMOVE_CHALLENGE:
            delete newState.all[action.challenge.data._id]
            return newState;
        default:
            return state;
    }
};

export default ChallengesReducer;