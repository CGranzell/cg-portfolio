import React from 'react';

const ProjectList = ({ items, selectedItem, onItemClick }) => {
  return (
    <div>
      <h2>Lista</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={selectedItem === item ? 'selected' : ''} onClick={() => onItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
