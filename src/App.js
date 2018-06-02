import React, { Component } from 'react';
import './App.css';

class App extends Component {
  allowDrop(e) {
    e.preventDefault()
  }

  drag(e) {
    e.dataTransfer.setData('anyName', e.target.id)
  }

  drop(e) {
    e.preventDefault()
    let data = e.dataTransfer.getData('anyName')
    e.target.appendChild(document.getElementById(data))
  }

  render() {
    return (
      <div className="App">
        <input onBlur={() => console.log('blurrr')}/>
        <br /><br />
        <div onDoubleClick={() => console.log('doubbllee')}>Double Click Me</div>
        <div id='myBox' draggable={true} onDragStart={e => this.drag(e)} style={{width: '50px', height: '50px', background: 'teal'}}></div>
        <section onDrop={e => this.drop(e)} onDragOver={e => this.allowDrop(e)} style={{width: '200px', height: '200px', background: 'mistyrose'}}>Drop here</section>
      </div>
    );
  }
}

export default App;
