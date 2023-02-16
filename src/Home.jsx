import React from 'react';
import Header from './testproject/components/header/Header';
import Form from './testproject/components/form/Form';
import Cards from './testproject/components/cards/Cards';
import Headline from './testproject/components/headline/Headline';
import Success from './testproject/components/success/Success';

const Home = () => {
  return (
    <>
      <Header />
      <Headline />
      <Cards />
      <Success />
      <Form />
    </>
  );
};

export default Home;
