import React, { useState } from 'react'

const HogTile = ({ hog }) => {
    const [showingDetails, setShowingDetails] = useState(false)

  return (
    <div onClick={() => setShowingDetails(!showingDetails)} >
    <h2>{hog.name}</h2>
    <img src={hog.image} alt={hog.name} />
    {showingDetails ? (
        <div>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? 'yes' : 'no'}</p>
            <p>Highest medal achived: {hog["highest medal achieved"]}</p>
        </div>
    ) : null}
    </div>
  )
}

export default HogTile