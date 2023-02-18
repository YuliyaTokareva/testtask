import React from 'react';
import Card from '../card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as candidatesSelectors from '../../candidates.selectors';
import './cards.scss';

const Cards = ({ nextpage, handlerClick, moreCandidates, isFetching }) => {
  return (
    <>
      <div className="get-request__cards">
        {moreCandidates.map((el) => (
          <Card key={el.id} candidatData={el} />
        ))}
      </div>
      {isFetching ? (
        ''
      ) : (
        <button
          className="get-request__show-more-btn"
          onClick={(e) => handlerClick(e)}
          nextpage={`${nextpage['next_url'] !== null}`}>
          Show more
        </button>
      )}
    </>
  );
};
Cards.propTypes = {
  handlerClick: PropTypes.func.isRequired,
  moreCandidates: PropTypes.array.isRequired,
  nextpage: PropTypes.object.isRequired,
  isFetching: PropTypes.bool
};

const mapDispatch = (dispatch) => {
  return {
    getCandidatesList: (startUrl) => dispatch(candidatesActions.getCandidatesList(startUrl))
  };
};
const mapState = (state) => {
  return {
    nextpage: candidatesSelectors.nextPageSelector(state),
    moreCandidates: candidatesSelectors.moreCandidatesListSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Cards);
