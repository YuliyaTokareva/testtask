import React from 'react';
import './headline.scss';

const Headline = () => {
  return (
    <section className="headline">
      <h1 className="headline__title">Test assignment for front-end developer</h1>
      <p className="headline__description">
        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
        with a vast understanding of User design thinking as they'll be building web interfaces with
        accessibility in mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <button className="headline__upload-btn">Sign up</button>
    </section>
  );
};
export default Headline;
