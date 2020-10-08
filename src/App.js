import React, { Component } from 'react';
import './App.css';
import Box from './container/Box'
import Clock from './container/Clock/Clock'
import {Route, BrowserRouter, NavLink} from 'react-router-dom'

class App extends Component {

  
  render() {



    return (

<div>




      <BrowserRouter >
      <header>
        <nav className ="Module">
          <ul>
            
          <li>
          <NavLink to="/" 
            exact
            activeStyle={{ 
            color: 'black',
                          }}
           >Tic Tac Toe </NavLink>                   
              </li>
            
            <li>
          <NavLink to="/clock" 
            exact
            activeStyle={{ 
            color: 'black',
                          }}
           >Clock </NavLink>                   
              </li>


                                </ul>
</nav>
                                </header>

<Route path="/clock" exact component={Clock} ></Route>
<Route path="/" exact component={Box} ></Route>

    
     
<footer>
  <h6>Develop By: Ankush Katharia (<a style={{color:"#518ef0"}} href="#">  katheriyaankush@gmail.com </a>) </h6>



</footer>

      </BrowserRouter>
      </div>
    );
  }
}

export default App;
