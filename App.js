import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "hello";
class App extends Component {
  render(){
    return (
      <div className="App">
        <WordCard value="hello"/>
      </div>
    );
  }
}
export default App;