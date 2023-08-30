import React from 'react'

const ProjectButton = ( { buttonText, onClick }) => {
  return (
    <button onClick={onClick}>{buttonText}</button>
  )
}

export default ProjectButton