import React, { useEffect, lazy, Suspense } from 'react';
import Header from './testproject/components/header/Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as candidatesSelectors from './testproject/candidates.selectors';
import * as candidatesActions from './testproject/candidates.actions';
import { fetchToken } from './testproject/candidatesGateway';
import Headline from './testproject/components/headline/Headline';
import Success from './testproject/components/success/Success';
import Cvs from './testproject/components/cvs/Cvs';
import { baseUrl } from '../src/env';

const Form = lazy(() => import('./testproject/components/form/Form'));

const Home = ({ isSendForm, getNewCandidatesList }) => {
  useEffect(() => {
    if (isSendForm.success) {
      fetchToken();
      getNewCandidatesList(baseUrl);
    }
  }, [isSendForm]);

  return (
    <>
      <Header />
      <Headline />
      <Suspense fallback={<div>Loading...</div>}>
        <Cvs />
      </Suspense>
      {isSendForm.success ? (
        <Success />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Form />
        </Suspense>
      )}
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
