import React from "react";


function SocialHandles({ arr }) {
    let list = arr.map(title => {
        return (
            <li>
                <a href={title.link} target="_blank" rel="noopener noreferrer">
                    <img src={title.imglink} alt={`Img of ${title.name}`} />
                    {/* <p>{title.name}</p> */}
                </a>
            </li>)
    })

    return (
        <ul id="socialhandleslist">
            {list}
        </ul>
    )
}

export default SocialHandles;