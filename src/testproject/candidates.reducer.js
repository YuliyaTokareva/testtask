import { CANDIDATES_LIST_RECIEVED, SHOW_SPINNER } from './candidates.actions';

const initialState = {
  candidates: [],
  isFetching: false
};

const candidatesReduser = (state = initialState, action) => {
  switch (action.type) {
    case CANDIDATES_LIST_RECIEVED:
      return {
        ...state,
        candidates: action.payload.candidatesList,
        isFetching: false
      };
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true
      };
    }

    default:
      return state;
  }
};
export default candidatesReduser;
