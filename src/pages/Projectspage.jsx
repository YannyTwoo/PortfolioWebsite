import React from "react";

import Projectlist from "../components/Projectlist";
import Worklist from "../components/Worklist"

function Projects() {

    let projects = [
        { name: "StreamParty", link: "https://github.com/YannyTwoo/StreamParty", imgsrc: "./images/projects/streamparty.png", description: "A webapp that allows you to host running livestreams and manage crowds with a chatbox, poll feature and alerts. Everything can be managed from admin accounts. The app is session enabled through the use of cookies" },
        { name: "YouTube Comment Scraper", link: "https://github.com/YannyTwoo/YoutubeCommentScraper", imgsrc: "./images/projects/commentscraper.png", description: "Python code to scrape YouTube comments of a given URL via the Selenium library. This code was written to gather data for NLP exploration." },
        { name: "Network Prediction Task", link: "https://www.kaggle.com/competitions/network-attacks-prediction/leaderboard", imgsrc: "", description: "Predicted the probability of a network attack(and type of it) with 100% success using the given dataset and traditional machine learning algorithms " },
        { name: "CRED Advertisement", link: "", imgsrc: "./images/projects/CRED.jpeg", description: "An advertisement for CRED, made as part of AdQuest 2022 organized by Finance Club, BIT Mesra.\nWon the first prize amongst the competition." },
    ]
    let work = [
        {name:"SDS, BIT Mesra", position:"Joint General Secretary",link:"https://in.linkedin.com/company/society-for-data-science-bit-mesra", imgsrc:"./images/work/SDS.png", description:"Being a part of the data enthused community at BIT Mesra and working with the executive body to host workshops and events related to all things data"},
        {name:"Atthah", position:"Software Development Intern", link:"https://www.atthah.com/", imgsrc:"./images/work/Atthah.png", description:"Summer internship at Atthah's office in Gurugram. Built JS modules for internal usage, additional JS components to existing software to aide in hosting live events and react development"},
        {name:"OutboundGenie", position:"Web Development Intern", link:"https://www.outboundgenie.com/",imgsrc:"./images/work/outboundgenie.svg", description:"A bootstrapped startup based out of Pune. Worked on developing the admin panel, did some research for the web dev team and performed various business admin related tasks. Founders are amazing mentors"},
        {name:"VideoHi", position:"Video Editing Intern", link:"https://www.videohi.in/",imgsrc:"./images/work/VideoHi.png", description:"Edited videos as junior editor for the studio's corporate clients"},
        {name:"IEEE, BIT Mesra", position:"Design Team", link:"https://www.ieeebitmesra.in/",imgsrc:"./images/work/IEEE.png", description:"Designing posters and writing up content for all the social media handles for IEEE, BIT Mesra"},
    ]

    return (
        <div id="projects works" className="Panels">
            <div className="Panelcontent Panel fromstart" data-aos="fade-up" data-aos-duration="4000">
                <div className="projwork">
                    <h1>
                        Work
                    </h1>
                    <p>Organizations and Institutes I am and have been a part of. I've had tremendous learning through all these places</p>
                </div>
                <Worklist arr={work} />
                </div>
                <div className="Panelcontent Panel fromstart " data-aos="fade-up" data-aos-duration="4000">
                <div className="projwork">
                    <h1>
                        Projects
                    </h1>
                    <p>After introducing yourself to elementary concepts of a tech stack, building projects is the best way to summarise and consolidate your knowledge. Here's some projects I've built outside of my internships</p>
                </div>
                <Projectlist arr={projects} />
            </div>
        </div>
    )
}

export default Projects;