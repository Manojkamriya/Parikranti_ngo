import React from 'react'
import './core_team_member.css';
import image from './team_member.png';
function core_team_member() {
  return (
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={image} alt="Avatar" />
    </div>
    <div className="flip-card-back">
      <h1>Member_name</h1>
      <p>NGO employee</p>
      <p>We love to help people</p>
    </div>
  </div>
</div>

  )
}

export default core_team_member