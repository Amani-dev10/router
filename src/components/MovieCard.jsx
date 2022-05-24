 import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'
 
 const MovieCard = ({movie}) => {
   return (
       <Link style={{textDecoration:'none' }} to={`/${movie.name}`}>
     <div className='movie-card'>

        <StarRating rating={movie.rating} />
         <h3> {movie.name}</h3>
         <img src={movie.image} alt="" />
         <p>{movie.date}</p>
       
     </div>
       </Link>
   )
 }
 
 export default MovieCard
 