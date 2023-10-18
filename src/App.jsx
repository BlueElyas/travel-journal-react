import React from 'react'
import './App.css'
import data from './Data/Data'
import Header from './Components/Header.jsx'
import Card from './Components/Card'

function App() {

  const locationData = data.map(d => 
    {return ( <Card item={d}/>)}
 )

  return (
    <div className='container'> 
      <Header />
      {locationData}
    </div>
 
  )
}

export default App
