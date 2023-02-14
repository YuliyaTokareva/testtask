import {
  CANDIDATES_LIST_RECIEVED,
  SHOW_SPINNER,
  POSITION_LIST_RECIEVED
} from './candidates.actions';

const initialState = {
  candidates: [],
  positions: {},
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
    case POSITION_LIST_RECIEVED:
      return {
        ...state,
        positions: action.payload.positionsList
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
