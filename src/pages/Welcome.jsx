import React from "react";
// import { useRef } from "react";
// import portfolimg from '../images/portfolpix.jpg'

import Typewriter from 'typewriter-effect'

function Welcome() {


    return (
        <div id="welcome" className="Panels">
            <div data-aos="fade" className="Panel Panelhead">
                <h1 className="pageh1">Welcome</h1>
                <p>
                    Hey there, I'm currently an undergrad at BIT, Mesra, studying Maths and Computing.
                    I find working with data interesting and developing websites and apps fun.
                </p>
                <p>
                    I put a highlight of my resume over here.
                </p>
            </div>
            <div className="Panel Panelhead" data-aos="fade" data-aos-duration="4000">
                <img src={'./images/portfolpix.PNG'} alt="sadge" id="portfolimg" />
                <h1 id='writeon'>
                    <Typewriter options={{
                        strings: ['Adirath Goswami', '@yannytwoo', '@adirathg'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </h1>
            </div>
        </div>
    )
}

export default Welcome;