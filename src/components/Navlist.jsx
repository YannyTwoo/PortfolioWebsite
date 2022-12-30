import React from "react";

import { Link } from 'react-scroll'


function Navlist({ arr, click, setClick }) {
    return (
        <ul id="navlist">
            {arr.map(title => {
                return (
                    // <li onClick={()=>setClick(!{click})}>
                    <li>
                        <Link to={title.elemName} activeClass={title.elemName} smooth={true} offset={-120} spy={true} duration={500} isDynamic={true}>
                            {title.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Navlist;