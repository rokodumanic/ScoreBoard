import { useState } from "react"


function Timer(props){
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const startTimer = ()=>{
        setTimeout(()=>{
            if(minutes===90){
                return;
            }
            if(seconds===59){
                setMinutes(minutes+1);
                setSeconds(0);
            } else{
                setSeconds(seconds+1);
            }
        }, 1000);
    };

    function format(prop){
        return prop<10 ? `0${prop}` : prop;
    }

startTimer();
    return(
        <p className="timer">{format(minutes)}:{format(seconds)}</p>
    );

}

export default Timer;