import React from 'react'
import MainTab from '../containers/main'
import ItemsTab from '../containers/items'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <ItemsTab />
      <MainTab />
    </div>
  )
}

export { App }
