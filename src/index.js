import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MotionPlay from './MotionPlay'
import DragAndDrop from './DragAndDrop'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<DragAndDrop />, document.getElementById('root'));
// ReactDOM.render(<MotionPlay />, document.getElementById('root'));
registerServiceWorker();
