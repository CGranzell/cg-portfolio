import React from 'react';

const DisplayComponent = ({ selectedButton }) => {
  return (
    <div>
      <h2>Vald knapp:</h2>
      <p>{selectedButton}</p>
    </div>
  );
};

export default DisplayComponent;
