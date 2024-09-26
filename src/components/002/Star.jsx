import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export const Star = ({selected=false,onSelect=f=>f}) => {

    const [select,setSelect] = useState(false);

   

  return (
        <FaStar color={selected ? "red" : "grey"} 
        onClick={onSelect}/>
  )
}


