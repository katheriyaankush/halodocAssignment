import React,{Component} from 'react';

import './Clock.css'
import audioClock from '../../Assests/clocksound.mp3'


class Clock extends Component {

    forceUpdateHandler(){
     //   console.log("Test1")
        this.forceUpdate();
        if( this.props.history.location.pathname === '/clock'){

        const audioElClock = document.getElementsByClassName("audio-element-clock")[0]
        audioElClock.play() 
        }
   

      };
      


    render(){

        let styles;
        let stylesmm;
        let styleshh;

        if( this.props.history.location.pathname === '/clock'){
           // console.log("Path==",this.props.history.location.pathname )
        setInterval(()=>{
           
            this.forceUpdateHandler()  
        },100)
    }
          let deg = 6;
          let day = new Date();
          let hh = day.getHours() * 30;
          let mn=day.getMinutes() * deg;
          let ss = day.getSeconds() * deg;
        
          styles ={  
            transform:`rotateZ(${(ss)}deg)`
            }
          stylesmm ={  
              transform:`rotateZ(${(mn)}deg)`
              }
          styleshh ={  
                transform:`rotateZ(${(hh)+(mn/12)}deg)`
                }

               


        return(
<div className="body">
<audio className="audio-element-clock">
          <source src={ audioClock}></source>
        </audio>
<div className = "clock">

<p>Develop By: Ankush Katharia</p>
<div className = "hour">
<div className = "hr" id = "hr"  style={styleshh}></div>
</div>
<div className = "min">
<div className = "mn" id = "mn"  style={stylesmm}></div>
</div>

<div className = "sec" >
<div className = "sc" id = "sc"  style={styles} ></div>
</div>

</div>
</div>
        )
    }


}
export default Clock;