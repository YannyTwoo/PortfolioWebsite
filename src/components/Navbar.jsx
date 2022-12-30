import React from "react";
import Navdesk from "./Navdesk";

import Navmobile from "./Navmobile";

// import { useContext } from "react";
// import ThemeContext from "./Contexts/Context";



function Navbar() {
    let addresses = [
        { name: 'About Me', href: '', elemName:'welcome', },
        // { name: 'Interests', href: '', elemName:'interest',},
        { name: 'Skills', href: '', elemName:'skills', },
        { name: 'Work', href: '', elemName:'projects', },
        { name: 'Projects', href: '', elemName:'projects', },
        // { name: 'Achievements', href: '', elemName:'Achievements', },
        { name: 'Contact Me', href: '', elemName:'contactme', },
    ]

    // let {theme, toggleTheme} = useContext(ThemeContext)

    return (
        // <div id='nav' className={theme}>
        <div id='nav'>
            <h2>
                Adirath Goswami
            </h2>
            {/* <button onClick={toggleTheme}>theme</button> */}
            <div id="#navright">
                <Navdesk arr={addresses} />
                <Navmobile arr={addresses}/>
            </div>
        </div>
    )
}

export default Navbar;