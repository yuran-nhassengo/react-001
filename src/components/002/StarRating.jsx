import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Star } from './Star'

function StarRating({totalStars =5}) {

    const [selectedStars,setSelectedStars] = useState(0); 

    

    const createArray = length =>[...Array(length)];


  return (
        <div>
            <div className="flex"> 
                {createArray(totalStars).map((n,i) =>
                    <Star key={i} 
                    selected={selectedStars > i} 
                    onSelect={() => setSelectedStars(i+1)}/>)
                }
                
            </div>
            <p className='flex'>
                {selectedStars} of {totalStars}  stars
            </p>
        </div>
  )
}

export default StarRating
