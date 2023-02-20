import fetchCandidatesList, { fetchPostFofm } from './candidatesGateway';

export const CANDIDATES_LIST_RECIEVED = 'CANDIDATES_LIST_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const POSITION_LIST_RECIEVED = 'POSITION_LIST_RECIEVED';
export const SEND_FORM = 'SEND_FORM';
export const SEND_SUCCESS = 'SEND_SUCCESS';
export const CANDIDATES_LIST_UPDATE = 'CANDIDATES_LIST_UPDATE';
export const SHOW_NEW_FORM = 'SHOW_NEW_FORM';
export const showSpinner = () => ({
  type: SHOW_SPINNER
});
export const fetchCandidatesListRecieved = (candidatesList) => {
  const action = {
    type: CANDIDATES_LIST_RECIEVED,
    payload: {
      candidatesList
    }
  };
  return action;
};
export const fetchPosotionsListRecieved = (positionsList) => {
  const action = {
    type: POSITION_LIST_RECIEVED,
    payload: {
      positionsList
    }
  };
  return action;
};
export const postFofm = (isSendForm) => {
  const action = {
    type: SEND_FORM,
    payload: {
      isSendForm
    }
  };
  return action;
};
export const sendedFofm = () => ({
  type: SEND_SUCCESS
});
export const fetchNewCandidatesList = () => ({
  type: CANDIDATES_LIST_UPDATE
});
export const refreshForm = () => ({
  type: SHOW_NEW_FORM
});

export const getCandidatesList = (urlName) => {
  // eslint-disable-next-line
  const thunkAction = function (dispatch) {
    dispatch(showSpinner());
    fetchCandidatesList(urlName).then((candidatesList) =>
      dispatch(fetchCandidatesListRecieved(candidatesList))
    );
  };
  return thunkAction;
};
export const getPositionsList = (urlName) => {
  // eslint-disable-next-line
  const thunkAction = function (dispatch) {
    fetchCandidatesList(urlName).then((positionsList) =>
      dispatch(fetchPosotionsListRecieved(positionsList))
    );
  };
  return thunkAction;
};

export const getPostFofm = (data) => {
  // eslint-disable-next-line
  const thunkAction = function (dispatch) {
    fetchPostFofm(data).then((isSendForm) => dispatch(postFofm(isSendForm)));
  };
  return thunkAction;
};

export const getNewCandidatesList = (urlName) => {
  // eslint-disable-next-line

  const thunkAction = function (dispatch) {
    dispatch(showSpinner());
    fetchCandidatesList(urlName).then((candidatesList) =>
      dispatch(fetchCandidatesListRecieved(candidatesList))
    );
    dispatch(fetchNewCandidatesList());
    setTimeout(() => {
      dispatch(refreshForm());
    }, 3000);
  };
  return thunkAction;
};
