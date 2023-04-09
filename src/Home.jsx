import React, { useEffect } from 'react';
import Header from './testproject/components/header/Header';
import Form from './testproject/components/form/Form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as candidatesSelectors from './testproject/candidates.selectors';
import * as candidatesActions from './testproject/candidates.actions';
import { fetchToken } from './testproject/candidatesGateway';
import Headline from './testproject/components/headline/Headline';
import Success from './testproject/components/success/Success';
import Cvs from './testproject/components/cvs/Cvs';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = ({ isSendForm, getNewCandidatesList }) => {
  useEffect(() => {
    if (isSendForm.success) {
      fetchToken();
      getNewCandidatesList(BASE_URL);
    }
  }, [isSendForm]);
  return (
    <>
      <Header />
      <Headline />
      <Cvs />
      {isSendForm.success ? <Success /> : <Form />}
    </>
  );
};
Home.propTypes = {
  isSendForm: PropTypes.object,
  getNewCandidatesList: PropTypes.func.isRequired
};
const mapDispatch = (dispatch) => {
  return {
    getNewCandidatesList: (baseUrl) => dispatch(candidatesActions.getNewCandidatesList(baseUrl))
  };
};
const mapState = (state) => {
  return {
    isSendForm: candidatesSelectors.isSendFormSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Home);
