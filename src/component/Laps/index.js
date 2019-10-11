import React, {Component} from 'react';
import {connect} from "react-redux";

class Laps extends Component{

    giveTimeString=(time,key)=>{

        const hr = Math.floor(time/(60*60*10));
        const mins = Math.floor((time - hr*60*60*10 )/(60*10));
        const secs = Math.floor((time -hr*60*60*10 - mins*60*10 )/10);
        const sec_by_10 = Math.floor(time -hr*60*60*10 - mins*60*10 - secs*10);

        return (
            <li className="lap--item">  <span className="lap_font_max">{hr.toString().padStart(2,'0')} :: {mins.toString().padStart(2,'0')} ::{secs.toString().padStart(2,'0')} :: </span> <span clasName="lap_font_min">{sec_by_10.toString().padStart(2,'0')}</span> </li>
        )
    }



    render(){
        const laps_list = this.props.laps.length ? ( <ul> {this.props.laps.map( lap => this.giveTimeString(lap) ) } </ul> ) : ( <h4>No Laps</h4> );

        return(
            <div className="lapCont">
                <div className="lap__heading--cont">
                    <h1 className=""> Laps ! </h1>
                </div>
                <div>
                    {laps_list}
                </div>

            </div>
        )

    }

}

const mapStateToProps=(state)=>{
    return{
        time: state.time,
        laps:state.laps
    }
}

export default connect(mapStateToProps)(Laps);