import React from 'react';
import PhotoCover from '../../svg/PhotoCover';
import './card.scss';

const Card = ({ candidatData }) => {
  return (
    <article className="card">
      {candidatData.photo.lengts === 0 ? (
        <PhotoCover />
      ) : (
        <img className="card__person-img" src={`${candidatData.photo}`} alt="Person photo" />
      )}

      <h2 className="card__person-name">{candidatData.name}</h2>

      <p className="card__person-job">{candidatData.position}</p>

      <p className="card__person-email">
        {candidatData.email}
        {/* {<span className="card__person-tooltiptext"> {candidatData.email}</span>} */}
      </p>
      <p className="card__person-phone">{candidatData.phone}</p>
    </article>
  );
};
export default Card;
