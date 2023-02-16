import React from 'react';

const RadioButton = ({ name, onChange, id }) => {
  return (
    <label htmlFor={`${name}`} className="radio" onChange={onChange}>
      <input type="radio" id={`${name}`} name="position_id" value={`${id}`} />
      <span>{name}</span>
    </label>
  );
};
export default RadioButton;
