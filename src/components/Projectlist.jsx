import React from 'react'
// import { useState } from 'react';
function Projectlist({ arr }) {

  // let [lr, setLR] = useState('left')

  return (
    <div className='projects'>
      {arr.map(proj => {
        return (
          // {if(lr==='left'?setLR('right'):setLR('left'))}
          <div className='project'>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              <img src={proj.imgsrc} alt="" />
              </a>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
              <div className="projecttext">
                <h2>{proj.name}</h2>
                <p>{proj.description}</p>
              </div>
            </a>
          </div>
        )
      })}
    </div>

  )
}

export default Projectlist;