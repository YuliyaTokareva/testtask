import React from 'react';
import PhotoCover from '../../svg/PhotoCover';
import './card.scss';

const Card = () => {
  return (
    <article className="card">
      <PhotoCover />
      {/* <img
        className="card__person-img"
        src=""
        alt="Person photo"></img> */}

      <h2 className="card__person-name">Salvador Stewart Flynn Thomas SalvaThomas Salva</h2>

      <p className="card__person-job">Leading specialist of the department offffrgeg egveg.</p>
      <p className="card__person-email">
        JeromeKlarkaJeromeKlarka19233623dfffgf
        <span className="card__person-tooltiptext">JeromeKlarkaJeromeKlarka19233623dfffgf</span>
      </p>
      <p className="card__person-phone">+38 (098) 278 76 24</p>
    </article>
  );
};
export default Card;
