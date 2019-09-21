import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
      word,
      chars,
      attempt: 1,
      guess: [],
      completed: false
    }
}

export default class WordCard extends Component{
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activeHandler = c => { 
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
            }else{
                let chars = _.shuffle(Array.from(this.state.word))
                this.setState({guess:[],chars : chars, attempt: this.state.attempt + 1})
            }
        }
    }
    render(){
        return(
            <div>
                <p>ROUND : {this.state.attempt}</p>
                { Array.from(this.state.chars).map((c,i) => <CharacterCard value={c} key={i} activationHandler={this.activeHandler} attempt={this.state.attempt}/>)}
                <img src="https://cms.qz.com/wp-content/uploads/2016/08/gu_announcement_01.png?w=1380&h=778&strip=all&quality=75" height="200" width="300"></img>
                <p> {this.state.completed ? this.state.word : ''} </p>
                <p> {this.state.completed ? 'CORRECT!'  : ''} </p>
            </div>
        );
    }
}