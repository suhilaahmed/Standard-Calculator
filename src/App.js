import React, { Component } from "react";
import './App.css';
import {Button} from './components/Button';
import {Input} from './components/input';
import {History} from './components/history';
import {ClearButton} from './components/ClearButton';
import * as math from "mathjs";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      history: [],
    };
  }
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    const history = this.state.history;    
        try {
            this.setState({ 
              // history: history.push(this.state.input),
              input: math.eval(this.state.input)
            });
        } catch (e) {
            this.setState({
                input: "error"
            })
        }
  };

  render() {
    const history = this.state.history;   
    console.log(history+"kkkk");
    // const histt = history.map((hist) => {
    //   return (
    //       <p>{hist}</p>
    //   );
    // });
  return (
    <div className="app">
    <History >
      <div>
      {history}
      </div>
    </History>
      <div className="calc-wrapper">
        <Input input={this.state.input}/>
        <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              C
            </ClearButton>
            <ClearButton handleClear= {()  => 
              this.setState({
              input: this.state.input.slice(0, -1),
              })}>
              CE
            </ClearButton>
        </div>
        <div className="row">
        <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
        </div>
      </div>
    </div>
  );
}
}

export default App;
