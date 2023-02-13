import fetchCandidatesList from './candidatesGateway';

export const CANDIDATES_LIST_RECIEVED = 'CANDIDATES_LIST_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';

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
