import React from 'react'
import './ActivityItem.css'

const ActivityItem = ({ activity }) => {
  const { top, left } = activity.position
  const style = {
    width: 160,
    height: 64
  }

  console.log('left #', left)

  return (
    <div style={{
      ...style,
      top: top - style.height / 2,
      left: left - style.width / 2
    }} className="activity-item">
      <span className="title">{activity.title}</span>
    </div>
  )
}

export { ActivityItem }
