import React from 'react'

function Card({ item: { gender, img, name, origin, species, status } }) {
  return (
    <div className='card'>
      <p id='status'>{status}</p>
      <div className="img-wrapper">
        <img src={img} alt='Character image' height={220} />
      </div>
      <p>{name}</p>
      <p>{origin}</p>
      <div className="det-wrapper">
        <p>{species}</p>
        <p>{gender}</p>
      </div>
    </div>
  )
}

export default Card