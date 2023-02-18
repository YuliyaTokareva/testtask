import {
  CANDIDATES_LIST_RECIEVED,
  SHOW_SPINNER,
  POSITION_LIST_RECIEVED,
  SEND_FORM
} from './candidates.actions';

const initialState = {
  candidates: {},
  users: [],
  positions: {},
  isFetching: false,
  isSendForm: {}
};

const candidatesReduser = (state = initialState, action) => {
  switch (action.type) {
    case CANDIDATES_LIST_RECIEVED:
      return {
        ...state,
        candidates: action.payload.candidatesList,
        users: [...state.users, ...action.payload.candidatesList.users],
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
    case SEND_FORM: {
      return {
        ...state,
        isSendForm: action.payload.isSendForm
      };
    }

    default:
      return state;
  }
};
export default candidatesReduser;
