import fetchCandidatesList from './candidatesGateway';

export const CANDIDATES_LIST_RECIEVED = 'CANDIDATES_LIST_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const POSITION_LIST_RECIEVED = 'POSITION_LIST_RECIEVED';

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
