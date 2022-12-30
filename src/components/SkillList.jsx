import React from "react";




function skilllist({ head, arr }) {

    return (
        <div className="skillList">
            <h1>{head}</h1>
            <div>
                {arr.map(title => {
                    return (
                        <li>
                            <img className="skillImg" src={title.link} alt="" />
                            <p>{title.name}</p>
                        </li>)
                })}
            </div>

        </div>
    )
}


export default skilllist;