import React from 'react';
import Header from './testproject/components/header/Header';
import Form from './testproject/components/form/Form';
import { connect } from 'react-redux';
import * as candidatesSelectors from './testproject/candidates.selectors';
import Headline from './testproject/components/headline/Headline';
import Success from './testproject/components/success/Success';
import Cvs from './testproject/components/cvs/Cvs';

const Home = ({ isSendForm }) => {
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
  // isSendForm: PropTypes.object.isRequired
};

const mapState = (state) => {
  return {
    isSendForm: candidatesSelectors.isSendFormSelector(state)
  };
};
export default connect(mapState)(Home);
