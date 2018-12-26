import React, { Component } from 'react';
import './App.css';
import BingoList from './components/BingoList';


function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0), i = arr.length, temp, index;
  while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}

const optionMasterList = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20
];

const bingoNumOptions = 10;

const optionList = getRandomSubarray(optionMasterList, bingoNumOptions);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BingoList optionList={optionList}/>
      </div>
    );
  }
}

export default App;


