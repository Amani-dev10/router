import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Description = ({data}) => {
  const params = useParams()
  console.log(data)
  console.log(params)
  const film = data.find(el=>el.name==params.name)
  return (
    <div>
      <h2 style={{color:"White"}} > {film.description} </h2>
      <iframe  width="560" height="315" src={film.trailer} frameborder="0"></iframe>

    </div>
  )
}

export default Description