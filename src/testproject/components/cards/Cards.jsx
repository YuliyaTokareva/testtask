import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import * as candidatesActions from './../../candidates.actions';
import * as candidatesSelectors from '../../candidates.selectors';
import Spinner from '../spinner/Spinner';
import { baseUrl } from '../../../env.js';

import './cards.scss';

const Cards = ({ getCandidatesList, candidatesList, isFetching, nextpage }) => {
  const [fetchUrl, setFetchUrl] = useState(baseUrl);
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

      {!candidatesList ? (
        ''
      ) : (
        <>
          <div className="get-request__cards">
            {candidatesList.map((el) => (
              <Card key={el.id} candidatData={el} />
            ))}
          </div>
          <button
            className="get-request__show-more-btn"
            onClick={(e) => handlerClick(e)}
            nextpage={`${nextpage['next_url'] !== null}`}>
            Show more
          </button>
        </>
      )}

      {isFetching ? <Spinner /> : ''}
    </section>
  );
};
Cards.propTypes = {
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
export default connect(mapState, mapDispatch)(Cards);
