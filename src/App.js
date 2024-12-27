import './App.css';
import { useState } from 'react';
import Club from './Club';
import Controls from './Controls';
import Timer from './Timer';

function App() {
  const date = new Date();
  const [rezultat1, setRez1] = useState(0);
  const [rezultat2, setRez2] = useState(0);
  const [time, setTime] = useState(0);


  function Add(props){
    if(props===1){
      setRez1(rezultat1+1);
    } else if(props===2){
      setRez2(rezultat2+1);
    } else{
      console.log("ERROR, unexpected prop for club", props);
    }
  }
  function Sub(props){
    if(props===1 && rezultat1>0){
      setRez1(rezultat1-1);
    } else if(props===2 && rezultat2>0){
      setRez2(rezultat2-1);
    } else{
      console.log("ERROR, unexpected prop for club", props);
    }
  }

  function startTime(){
    setTime(1);
  }

  return (
    <div className="scoreBoard">
      <p className='date'>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</p>
      {time===0 ? <p className='timer'>00:00</p> : <Timer props={time}/>}
      <div className='score'>
        <Club name="Chelsea" logo={require("./logos/chelsea-fc-logo.png")} />
        <div className="valueAndButtons">
          <p className="scoreValue">{rezultat1} : {rezultat2}</p>
          <Controls Add1st={()=>Add(1)} Add2nd={()=>Add(2)} Sub1st={()=>Sub(1)} Sub2nd={()=>Sub(2)} />
          <button className='playBtn' onClick={startTime} >Play</button>
        </div>
        <Club name="Arsenal" logo={require("./logos/Arsenal_FC.svg.png")}/>
      </div>
    </div>
  );
}

export default App;
