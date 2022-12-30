import React from "react";

import SkillList from '../components/SkillList'

// "../images/nplogo.png";
// "./images/seaborn.png"
// "./images/sklearn.png"
// "./images/tf.png"
import resume from "../static/pdfs/resume.pdf"

function Skills() {
    let webdev = [
        { name: "JavaScript", link: `https://img.icons8.com/fluency/240/null/javascript.png` },
        { name: "MongoDB", link: `https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/240/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png` },
        { name: "Express", link: `https://img.icons8.com/officel/80/null/express-js.png` },
        { name: "React", link: `https://img.icons8.com/color/240/null/react-native.png` },
        { name: "NodeJs", link: `https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/240/null/external-nodejs-is-an-open-source-cross-platform-javascript-run-time-environment-logo-shadow-tal-revivo.png` },
        { name: "npm", link: `https://img.icons8.com/color/240/null/npm.png` },
    ]

    let datascience = [
        { name: "Python", link: `https://img.icons8.com/color/240/null/python--v1.png` },
        { name: "Pandas", link: `https://img.icons8.com/color/240/null/pandas.png` },
        { name: "Numpy", link: `https://img.icons8.com/color/240/null/numpy.png` },
        { name: "Scikit-Learn", link: "./images/sklearn.png" },
        { name: "Tensorflow", link: `https://img.icons8.com/color/240/null/tensorflow.png` }
    ]

    let creative = [
        { name: "Photoshop", link: `https://img.icons8.com/color/240/null/adobe-photoshop--v1.png` },
        { name: "Premiere Pro", link: `https://img.icons8.com/color/240/null/adobe-premiere-pro--v1.png` },
        { name: "After Effects", link: `https://img.icons8.com/color/240/null/adobe-after-effects--v1.png` },
        { name: "Resolve", link: `https://img.icons8.com/color/240/null/davinci-resolve.png` }
    ]

    return (
        <div id="skills" className="Panels">
            <div className="Panelhead Panel" data-aos="fade-zoom-in" data-aos-duration="4000">
                <div>
                    <h1 className="pageh1">
                        Skills
                    </h1>
                    <p>
                        Web development, data science and creative video editing are 3 fields I've dabbled and have experience in. The softwares/libraries beside are integral tools and I'm well versed with how to make the best use of them.
                    </p>
                    {/* <div className="btnBox"> */}
                        <a href={resume} download="doc" target="_blank" rel="noreferrer">
                            <button id="cvDownload" value="download">
                                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/null/external-cv-cv-resume-flatart-icons-outline-flatarticons.png" alt="Download Btn"/>
                                {/* <p>Download Resume</p> */}
                            </button>
                        </a>
                    {/* </div> */}
                </div>
            </div>
            <div className="Panelcontent Panel" data-aos="fade-up" data-aos-duration="4000">
                <SkillList head="Data Science" arr={datascience} />
                <SkillList head="Web Development" arr={webdev} />
                <SkillList head="Creative" arr={creative} />
            </div>
        </div>
    )
}

export default Skills;