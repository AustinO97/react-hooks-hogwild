import React from 'react'

const HogFilter = ({ showGreased, onShowGreased, sort, onUpdateSort }) => {

  return (
    <div>
        <label>
            Show Only Greased?
            <input type="checkbox" 
                checked={showGreased} 
                onChange={() => onShowGreased(!showGreased)}
            />
        </label>
        <select value={sort} onChange={(e) => onUpdateSort(e.target.value)} >
            <option value="name">Sort by name</option>
            <option value="weight">Sort by weight</option>
        </select>
    </div>
  )
}

export default HogFilter