import React from 'react'
import './ListItem.css'

const ListItem = ({ item, handleDragStart }) => {
  const handleDrag = (e) => {
    handleDragStart(e, item)
  }
  return (
    <div
      className="list-item"
      onDragStart={handleDrag}
      draggable={true}
    >
    </div>
  )
}

export { ListItem }
