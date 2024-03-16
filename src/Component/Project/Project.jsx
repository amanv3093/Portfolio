import React from 'react'
import './Project.css'
import Card from './Card'
function Project() {
  return (
    <div id='profile'>
     <div className='profile-heading' data-aos="zoom-out-left" data-aos-duration="1000">
       <h2>Project</h2>

     </div>
     <div className='card-box'>
      <Card />
      <Card />
      <Card />
      
    </div>
    </div>
  )
}

export default Project
