import React from 'react';

const RadioButton = ({ name, onChange }) => {
  return (
    <label htmlFor={`${name}`} className="radio" onChange={onChange}>
      <input type="radio" id={`${name}`} name="position" value={`${name}`} />
      <span>{name}</span>
    </label>
  );
};
export default RadioButton;
