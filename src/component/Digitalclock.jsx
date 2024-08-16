import React, {useState, useEffect} from "react";


function DigitalClock(){
    let [clock, setClock] = useState(new Date());

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setClock(new Date())
        }, 1000);

        return ()=>{
            clearInterval(intervalId);
        }
    }, [])


    function formatTIme(){
        let hours = clock.getHours();
        const minutes = clock.getMinutes();
        const seconds = clock.getSeconds();
        const meridian= hours >= 12 ? 'PM' : 'AM';

        hours = hours%12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`

    }

    function padZero(number){
        return (number<10 ? "0":"" )+ number
    }


    return (
        <div className="clockbody">
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTIme()}</span>
                </div>
            </div>
        </div>
    );
}
export default DigitalClock;