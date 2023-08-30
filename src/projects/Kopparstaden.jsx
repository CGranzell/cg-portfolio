import React from 'react'

const Kopparstaden = ({ isSelected }) => {
  return (
    <div className={`component ${isSelected ? 'selected' : ''}`}>Kopparstaden Detta är från projektet</div>
  )
}

export default Kopparstaden