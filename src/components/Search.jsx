import React from 'react'
import StarRating from './StarRating'

const Search = ({text,handleText,rating,handleRating}) => {
  return (
    <div className='header-container'>
        <h1>Our movie app</h1>
        <input className='inp' type="text" value={text} onChange={handleText} />
       <StarRating rating={rating} handleRating={handleRating} />
      
    </div>
  )
}

export default Search
