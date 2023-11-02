import React, { useState } from 'react';
import HogFilter from './HogFilter'
import HogTile from './HogTile';
import hogs from "../porkers_data";

const HogsList = () => {
  const [showGreased, setShowGreased] = useState(false)
  const [sort, setSort] = useState('name')

  const filteredHogs = hogs.filter(hog => showGreased ? hog.greased : true)

  const sortedHogs = filteredHogs.sort((hogA, hogB) => {
    return sort === 'name' ? hogA.name.localeCompare(hogB.name) : hogA.weight - hogB.weight
  })

  const newHogs = sortedHogs.map((hog) => {
    return <HogTile key={hog.name} hog={hog} />
  })

  const handleGreasedFilter = () => {
    setShowGreased(!showGreased)
  }

  const handleUpdateSort = (newSort) => {
    setSort(newSort)
  }
  
  return (
    <>
    <HogFilter 
    showGreased={showGreased} 
    onShowGreased={handleGreasedFilter}
    sort={sort}
    onUpdateSort={handleUpdateSort} 
    />
    {newHogs}
    </>
  )

}
export default HogsList