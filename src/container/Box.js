import React , {Component} from 'react';
import audio from '../Assests/1.mp3'
import audio3 from '../Assests/3.mp3'
import audio2 from '../Assests/2.mp3'


import "./container.css"


class Box extends Component{

    state={

        boxes:[{
         value:"",
        },
           {
            value:"",
           },{
            value:"",
           },{
            value:"",
           },{
            value:"",
           },{
            value:"",
           },{
            value:"",
           },{
            value:"",
           },
           {
            value:"",
           },
        ],
        history: [
            { squares: Array(9).fill(null) }
        ],
        stepNumber: 0,
        isXvalue:true,
        winner:"",
        check:false

    };

    
   
  


    resethandler=()=>{
this.setState({boxes:[{
    value:"",
   },
      {
       value:"",
      },{
       value:"",
      },{
       value:"",
      },{
       value:"",
      },{
       value:"",
      },{
       value:"",
      },{
       value:"",
      },
      {
       value:"",
      },
   ],
   history: [
       { squares: Array(9).fill(null) }
   ],
   stepNumber: 0,
   isXvalue:true,
   winner:""})
}


    handlerGame=(id)=>{

   
  

        if(this.state.boxes[id].value ){

            return;
        }


        const history = this.state.history.slice(0, this.state.stepNumber + 1);

        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        if (winner || squares[id]) {

            return;
        }
       
 const audioEl = document.getElementsByClassName("audio-element")[0]
 const audioEl2 = document.getElementsByClassName("audio-element2")[0]

 this.state.isXvalue ?   audioEl.play() : audioEl2.play() 
const indexVal = this.state.boxes[id];
const alldata = [...this.state.boxes];
indexVal.value = this.state.isXvalue ? "X"  : "O";
squares[id] = this.state.isXvalue ? "X" : "O";
alldata[id] = indexVal;
this.setState({
    
    history: history.concat({
        squares: squares
    }),
    stepNumber: history.length,

    boxes:alldata, isXvalue:!this.state.isXvalue});
}    
        
     checkHandler=()=>{
this.setState({check:!this.state.check});
     } 
        

    render(){
        let  styleClass =  "Button"
        const winner = calculateWinner(this.state.history[this.state.stepNumber].squares);

     let winnerElements=null;
if(this.state.history.length === 10 && !winner){


    winnerElements = <h2 style={ { color:"white"}}  >Match Draw... Try again</h2>
}
else{
  

  if(winner) {
       styleClass =  "Button2"
    const audioEl3 = document.getElementsByClassName("audio-element3")[0]
   audioEl3.play() 
   winnerElements = <h1 style={ { color:"white"}} >Winner is {winner} </h1>

  }
 
   
}


console.log("Ankush")

return (

<section>
      <div className="AppTic">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
<div>


<audio className="audio-element">
          <source src={ audio2}></source>
        </audio>
        <audio className="audio-element2">
          <source src={ audio}></source>
        </audio>
        <audio className="audio-element3">
          <source src={ audio3}></source>
        </audio>
<div className ="resultGame" >

<button className="Reset" onClick={()=>this.resethandler()} >Restart the Game </button>
{winnerElements}
</div>
   <div className ="BoxDiv" >
     
    { this.state.boxes.map((ele,i)=>

     <div key = {i}> <button id={"id"+i} className = {styleClass} onClick={()=>this.handlerGame(i)}    > {ele.value}  </button> </div>

    ) }

   </div>
   </div>
   </div>
      </section>

)

    }


}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && (squares[a] === squares[b]) && ( squares[b] === squares[c]) ) {
            return squares[a];
        }
    }

    return null;
}


export default Box;