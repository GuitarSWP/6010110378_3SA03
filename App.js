import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

var vocab = ["sleep","rest","doze"]
let random = parseInt(Math.random() *3)
class App extends Component {
  render(){
    return (
      <div className="App">
        <WordCard value={vocab[random]}/>
      </div>
    );
  }
}
export default App;