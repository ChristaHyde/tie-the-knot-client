import React from 'react'
// Importing files for Countdown
import ReactDOM from 'react-dom';
import App from './../../App';
import './index.css';
import Countdown from './Countdown';

export default function Homepage() {
  return <div>
    <h1>This is my react app</h1>
  </div>
}

ReactDOM.render(<App />, document.getElementById('root'));