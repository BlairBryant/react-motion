import React, { Component } from 'react';
import './App.css';

class DragAndDrop extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [{name: 'Do Stuff'}]
    }

    this.offsetData;
  }

  render() {
    console.log(this.state)
    return (
      <div className="App" onDragOver={() => console.log('')} onDrop={e => this.drop(e)}>
        <section className='todo'>
        <div id='draggie' draggable={true} onDragStart={e => this.dragStart(e)}></div>
        </section>
        <section className='completed'></section>
        

      </div>
    );
  }
}

export default DragAndDrop;