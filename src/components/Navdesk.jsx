import React from 'react'


import Navlist from './Navlist';

export const Navdesk = (props) => {
  return (
    <div id="navdesk">
        <Navlist arr={props.arr}/>
    </div>
  )
}

export default Navdesk;
