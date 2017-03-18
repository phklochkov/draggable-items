import React, { Component } from 'react';
import {ListItem} from './components/ItemsTab/ListItem'
import {ActivityItem} from './components/MainTab/ActivityItem'
import './App.css';

// TODO: Change to stateless function, use redux, refactor.
class App extends Component {
  state = {
    listItems: [{ id: '0', title: '' }, { id: '1', title: '' }],
    activityItems: []
  }

  handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', item.id)
  }

  handleDragOver = (e) => {
    e.preventDefault()
  }

  handleDrop = (e) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/plain')
    if (this.state.activityItems.some((a) => a.id === id)) return

    const mainOffsetLeft = e.clientX - e.target.offsetLeft
    const left = mainOffsetLeft > e.target.offsetLeft ?
      mainOffsetLeft : e.target.offsetLeft + 5
    const top = e.clientY - e.target.offsetTop
    const item = { id, title: 'aaa', position: { left, top } }

    this.setState({ activityItems: [...this.state.activityItems, item] })
  }

  render() {
    return (
      <div className="app-container">
        <div className="items-tab">
          {this.state.listItems
            .map((l) => <ListItem key={l.id} item={l} handleDragStart={this.handleDragStart} />)
          }
        </div>
        <div
          className="main-tab"
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
        >
          {this.state.activityItems
            .map((a) => <ActivityItem ref={(a) => { this.activity = a }} key={a.id} activity={a} />)}
        </div>
      </div>
    );
  }
}


export default App;
