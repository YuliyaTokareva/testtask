import React from 'react';
import Card from '../card/Card';
const Cards = () => {
  return (
    <section className="get-request">
      <h2 className="get-request__title title">Working with GET request</h2>
      <div className="get-request__cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className="get-request__show-more-btn">Show more</button>
    </section>
  );
};
export default Cards;
