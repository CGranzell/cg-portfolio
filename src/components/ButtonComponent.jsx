import React from 'react';

const ButtonComponent = ({ buttonText, onClick }) => {
  return (
    <button onClick={onClick}>{buttonText}</button>
  );
};

export default ButtonComponent;
