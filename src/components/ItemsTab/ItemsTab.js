import React from 'react'
import {ListItem} from './ListItem'
import './ItemsTab.css'

const ItemsTab = ({ items }) => {
  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', item.id)
  }

  return (
    <div className="items-tab">
      {items.items.map((l) =>
        <ListItem key={l.id} item={l} handleDragStart={handleDragStart} />
      )}
    </div>
  )
}

export { ItemsTab }
