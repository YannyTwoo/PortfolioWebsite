import React from "react";
// import { useState } from "react";

import ContactForm from "../components/Contactform";
import SocialHandles from "../components/Socialhandles";



let sociallist = [
    {name:"GitHub", link:"https://github.com/YannyTwoo", imglink:"https://img.icons8.com/ios-filled/250/null/github.png"},
    {name:"Instagram", link:"https://github.com/YannyTwoo", imglink:"https://img.icons8.com/ios-filled/250/null/instagram-new--v1.png"},
    {name:"Twitter", link:"https://twitter.com/adixode", imglink:"https://img.icons8.com/ios-filled/250/null/twitter.png"},
    {name:"LinkedIn", link:"https://www.linkedin.com/in/adirath-goswami-46376a1a8/", imglink:"https://img.icons8.com/ios-filled/250/null/linkedin.png"},
    {name:"EMail", link:"mailto:adirath2101@gmail.com", imglink:"https://img.icons8.com/ios-filled/100/null/new-post.png"}
] // using ios-16 filled logos' cdn links


function ContactMe (){
    // let [hover, setHover] = useState(false);


    return(
        <div id="contactme" className="Panels">
            <div className="Panelcontent Panel" data-aos="fade" data-aos-duration="4000">
                <div>
                    <h1 className="pageh1">
                        Get in touch!
                    </h1>
                    <p>
                        Get in touch for work or any query through any of these platforms.
                        Always looking to get in touch with creative and ambitious people.
                    </p>
                    <SocialHandles arr={sociallist}/>
                </div>
            </div>
            {/* <div className="Panelhead Panel" data-aos="fade" data-aos-duration="4000">
                <ContactForm/>
            </div> */}
        </div>
    )
}

export default ContactMe;