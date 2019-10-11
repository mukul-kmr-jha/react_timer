import React from "react";
import {connect} from "react-redux";

const giveTimeString=(time)=>{

    const hr = Math.floor(time/(60*60*10));
    const mins = Math.floor((time - hr*60*60*10 )/(60*10));
    const secs = Math.floor((time -hr*60*60*10 - mins*60*10 )/10);
    const sec_by_10 = Math.floor(time -hr*60*60*10 - mins*60*10 - secs*10);

    return `${hr} :: ${mins} :: ${secs} :: ${sec_by_10}`
}


function TimeBoard (props){
    const laps_list = props.laps.map( lap => (<li> {giveTimeString(lap) }</li>) ) ;

    return(

        <div>
            <h1>REACT TIMER</h1>
            <h1> {giveTimeString(props.time)} </h1>
            <ul>
                {laps_list}
            </ul>
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
