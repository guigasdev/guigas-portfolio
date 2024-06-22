import React from 'react'

function SkillsList({src, skill}) {
  return (
    <span>
        <img src={src} alt="CheckMark Icon" />
        <p>
           {skill}
        </p>
    </span>
  )
}

export default SkillsList
