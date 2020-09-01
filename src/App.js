import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  addValue=(data) => {

console.log(data);
  }
  render() {
    return (
      <div className="App">
      <div class="keyboard">
            <div  onClick = {()=>this.addValue("A")} class="key">A</div>
            <div onClick = {()=>this.addValue("B")}  class="key">B</div>
            <div onClick = {()=>this.addValue("C")}  class="key">C</div>
            <div onClick = {()=>this.addValue("D")}  class="key">D</div>
            <div onClick = {()=>this.addValue("E")}  class="key">E</div>
            <div onClick = {()=>this.addValue("F")}  class="key">F</div>
            <div onClick = {()=>this.addValue("G")}  class="key">G</div>
            <div onClick = {()=>this.addValue("H")}  class="key">H</div>
            <div onClick = {()=>this.addValue("I")}  class="key">I</div>
            <div onClick = {()=>this.addValue("J")}  class="key">J</div>
            <div onClick = {()=>this.addValue("K")}  class="key">K</div>
            <div onClick = {()=>this.addValue("L")}  class="key">L</div>
            <div onClick = {()=>this.addValue("M")}  class="key">M</div>
            <div onClick = {()=>this.addValue("N")}  class="key">N</div>
            <div onClick = {()=>this.addValue("O")} class="key">0</div>
            <div onClick = {()=>this.addValue("P")} class="key">P</div>
            <div onClick = {()=>this.addValue("Q")} class="key">Q</div>
            <div onClick = {()=>this.addValue("R")} class="key">R</div>
            <div onClick = {()=>this.addValue("S")} class="key">S</div>
            <div onClick = {()=>this.addValue("T")} class="key">T</div>
            <div onClick = {()=>this.addValue("U")} class="key">U</div>
            <div onClick = {()=>this.addValue("V")} class="key">V</div>
            <div onClick = {()=>this.addValue("X")} class="key">X</div>
            <div onClick = {()=>this.addValue("Y")} class="key">Y</div>
            <div onClick = {()=>this.addValue("Z")} class="key">Z</div>
            <div onClick = {()=>this.addValue("A")} class="key"></div>
            <div class="key"></div>
            
            <div>
            <div onClick = {()=>this.addValue("1")}  class="key">1</div>
            <div onClick = {()=>this.addValue("2")} class="key">2</div>
            <div onClick = {()=>this.addValue("3")} class="key">3</div>
            <div onClick = {()=>this.addValue("4")} class="key">4</div>
            <div onClick = {()=>this.addValue("5")} class="key">5</div>
            <div onClick = {()=>this.addValue("6")}  class="key">6</div>
            <div onClick = {()=>this.addValue("7")} class="key">7</div>
            <div onClick = {()=>this.addValue("8")} class="key">8</div>
            <div onClick = {()=>this.addValue("9")} class="key">9</div>
            <div onClick = {()=>this.addValue("0")} class="key">0</div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
