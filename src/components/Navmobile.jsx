import React from 'react'
import Navlist from './Navlist'

import { useState } from 'react'

const Navmobile = (props) => {
    
    let [click, setClick] = useState(false);
    let hamburgerLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nO3aOwrCQBiF0QFXo+LafVTqpkTtbK4ErLRyTPAXz1lAEuZCpvlaAwAAAAAA+GNJlkl2Sc7hU8MZbpMsesdYJbl+/Bk8G8501TPI8eVRjOXw7hizJLfRXs+z4WxnBvnVQfyyJrd/7wJxqU/p0nWpP0ZZJNkkOU36if/hlGSdZN41BgAAAAAAAAAA9FG/j0r9XpT6vSD1ezHq92LU78Wo3wtRvxehfgcAAAAAAAAA4BvU76NSvxelfi9I/V6M+r0Y9Xsx6vdC1O9FqN8BAAAAAIBGa3dzrLjHogbwCQAAAABJRU5ErkJggg=="
    let crossLink = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLUlEQVR4nO3dUU7CQBRAURJdnLohP/XTfegHeV2OrkAX8swkfqARBDvt3JneuwA6cCjQeQF2OzMzMzMzM1iZeZeZH2lzK4/hbQ0QMer1XgPEKiYILEFgCQJLEFiCwBIEliCwBIElCCxBYAkCSxBYgsASBJYgsASBJQgsOshb8nrbKshDZl5l5nNyisy8zsz7rYE8HNw+BSUKxsG67rcC8np4x7+OUZ6V+2zX/siaylqHBylNvzwAV43OlDiylpclDkYFoaDEmhh0kNYosTZGDyCtUKIFRi8ga6NEK4yeQNZCiZYYvYEsjdIco0eQpVAQGL2C1EbBYPQMUgsFhdE7yFwUHMYIIP9FQWKMAnIpChZjJJBzUdAYo4H8hYLHGBHk1OyCNmPZDMivZwr9zBgd5CgKGWN0kDgBQpjRbwokznjJQqKMCLL3TZ1TnPhoS5jRb+oMiTOuM/Aoo4DEBRd9aJQRQOIfV+BYlN5BYsZ2CBKlZ5CosDeFQ+kVJCpuFKJQegSJBXZtMSi9gcSCW+gIlJ5AYoV5RnOUXkDWHC5NLVF6AGkx6ZtaodBBWo5dpxYoZBDCDHxaG4UKQsBogkIE8UufMJDSE3AGPv34WvTjEgehgpSeQBjfUJbCoIOU/GkNGMjm2s2t9R0YLUFgCQJLEFiCwBIEliCwBIElCCxBYAkCSxBYgsASBJYgsASBJciAIP7BPewP7m/LDVVc1FZ7z8yb2SBmZmZmZma7un0C00drsPAmswMAAAAASUVORK5CYII="
    
    // let toShow = (<div onClick={()=>setClick(!click)}>
    //         {/* <img src={crossLink} alt="cross" /> */}
    //         <Navlist arr={props.arr} onClick={()=>setClick(!click)}/>
    // </div>)

    return (
        <div id="navmobile" onClick={()=>setClick(!click)}>
            {click? <img src={crossLink} id="cross" alt="cross" onClick={()=>setClick(!click)} />:  <img src={hamburgerLink} alt="Hamby" id="hamby" onClick={()=>setClick(!click)}/>}
            {click && <Navlist arr={props.arr} onClick={()=>setClick(!click)}/>}
        </div>
    )
}

export default Navmobile;