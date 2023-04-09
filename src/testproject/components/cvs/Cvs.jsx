import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import * as candidatesActions from './../../candidates.actions';
import * as candidatesSelectors from '../../candidates.selectors';
import Cards from '../cards/Cards';
import Spinner from '../spinner/Spinner';
// import { baseUrl } from '../../../../env.js';
const BASE_URL = process.env.REACT_APP_BASE_URL;

import './cvs.scss';

const Cvs = ({ getCandidatesList, candidatesList, isFetching, nextpage }) => {
  const [fetchUrl, setFetchUrl] = useState(BASE_URL);

  useEffect(() => {
    getCandidatesList(fetchUrl);
  }, [fetchUrl]);

  const handlerClick = (e) => {
    e.preventDefault();
    setFetchUrl(nextpage['next_url']);
  };
  return (
    <section className="get-request">
      <h2 className="get-request__title title">Working with GET request</h2>
      {!candidatesList ? '' : <Cards handlerClick={handlerClick} isFetching={isFetching} />}
      {!candidatesList || (candidatesList && isFetching) ? <Spinner /> : ''}
    </section>
  );
};
Cvs.propTypes = {
  getCandidatesList: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  baseUrl: string
};
const mapDispatch = (dispatch) => {
  return {
    getCandidatesList: (startUrl) => dispatch(candidatesActions.getCandidatesList(startUrl))
  };
};
const mapState = (state) => {
  return {
    candidatesList: candidatesSelectors.candidatesListSelector(state),
    isFetching: candidatesSelectors.isFetchingSelector(state),
    nextpage: candidatesSelectors.nextPageSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Cvs);
