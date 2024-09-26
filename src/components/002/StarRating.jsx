import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Star } from './Star'

function StarRating({totalStars =5}) {

    const createArray = length =>[...Array(length)];

  return (
        <div className="flex"> 
             {createArray(totalStars).map((n,i) => <Star key={i}/>)}
        </div>
  )
}

export default StarRating
