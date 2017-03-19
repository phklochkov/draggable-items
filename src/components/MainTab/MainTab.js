import React from 'react'
import { ActivityItem } from './ActivityItem/ActivityItem'
import './MainTab.css'

const MainTab = ({ main, addItem }) => {
  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/plain')
    const { offsetLeft, offsetTop } = e.target
    const position = {
      left: e.clientX - offsetLeft > offsetLeft ?
        e.clientX - offsetLeft : offsetLeft + 5,
      top: e.clientY - offsetTop
    }

    addItem(id, position)
  }

  return (
    <div
      className="main-tab"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {main.items.map((a) => <ActivityItem key={a.id} activity={a} />)}
    </div>
  )
}

export { MainTab }
