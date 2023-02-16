import React from 'react';

import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import * as candidatesActions from './../../candidates.actions';
import * as candidatesSelectors from '../../candidates.selectors';
import RegisteredForm from '../../svg/RegisteredForm';

import './success.scss';

const Success = () => {
  return (
    <section className="success-massage">
      <h2 className="success-massage__title title">User successfully registered</h2>

      <RegisteredForm />
    </section>
  );
};
Success.propTypes = {
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
export default connect(mapState, mapDispatch)(Success);
