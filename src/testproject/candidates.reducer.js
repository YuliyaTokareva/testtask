import {
  CANDIDATES_LIST_RECIEVED,
  SHOW_SPINNER,
  POSITION_LIST_RECIEVED,
  SEND_FORM,
  SEND_SUCCESS,
  CANDIDATES_LIST_UPDATE,
  SHOW_NEW_FORM
} from './candidates.actions';

const initialState = {
  candidates: {},
  users: [],
  positions: {},
  isFetching: false,
  isSendForm: {},
  statusSend: false
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
        isSendForm: action.payload.isSendForm,
        users: []
      };
    }
    case SEND_SUCCESS: {
      return {
        ...state,
        statusSend: true
      };
    }
    case CANDIDATES_LIST_UPDATE: {
      return {
        ...state,
        statusSend: false
      };
    }
    case SHOW_NEW_FORM: {
      return {
        ...state,
        isSendForm: {}
      };
    }
    default:
      return state;
  }
};
export default candidatesReduser;
