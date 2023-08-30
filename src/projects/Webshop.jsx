import React from 'react'

const Webshop = ({ isSelected }) => {
  return (
    <div className={`component ${isSelected ? 'selected' : ''}`}>WebshopDetta är från projektet</div>
  )
}

export default Webshop