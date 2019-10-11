import React from "react";
import {connect} from "react-redux";


const giveTimeString=(time)=>{

    const hr =  Math.floor(time/(60*60*10));
    const mins = Math.floor((time - hr*60*60*10 )/(60*10));
    const secs = Math.floor((time -hr*60*60*10 - mins*60*10 )/10);
    const sec_by_10 = Math.floor(time -hr*60*60*10 - mins*60*10 - secs*10);

    return (
        <>
            <span className="timer--count__main"> {hr.toString().padStart(2,'0')} :: {mins.toString().padStart(2,'0')} :: {secs.toString().padStart(2,'0')} :: </span>
            <span className="timer--count__min"> <b>{sec_by_10.toString().padStart(2,'0')}</b></span>
        </>
    )

}


function TimeBoard (props){
    return(

        <div className="right">

            <div className="timer--count">
                {giveTimeString(props.time)}
            </div>


        </div>
    );


}

const mapStateToProps =(state)=>{
    return{
        time:state.time,
        laps:state.laps
    }
}

export default connect(mapStateToProps)(TimeBoard);
