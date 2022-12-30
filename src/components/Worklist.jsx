import React from 'react'
// import { useState } from 'react';


function Worklist({ arr }) {

    // let [lr, setLR] = useState('left')

    return (
        <div className='works'>
            {arr.map(job => {
                return (
                    // {if(lr==='left'?setLR('right'):setLR('left'))}
                    <div className='work'>
                        <div className="workimgbox">
                            <a href={job.link} target="_blank" rel="noopener noreferrer">
                                <img src={job.imgsrc} alt="Bruh" />
                            </a>
                        </div>

                        <div className="worktext">
                            <a href={job.link} target="_blank" rel="noopener noreferrer">
                                <h1>{job.name}</h1>
                                <h3>{job.position}</h3>
                                <p>{job.description}</p>
                            </a>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default Worklist;