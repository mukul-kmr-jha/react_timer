import React, {Component} from 'react';
import {StopTimeService, updateTimeService} from "../../timeService";
import {connect} from "react-redux";

class LapButton extends Component {

    handleLap=(e)=>{
        if(this.props.isTimerRunning){
            console.log("Lap taken :- ", this.props.time);
            this.props.lap(this.props.time);
        }
        else {
            console.log("Lap Cannot be taken (Timer not running)");
        }
    }
    render() {
        return(
            <button onClick={this.handleLap} disabled={!this.props.isTimerRunning} className="btn " >LAP</button>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        time:state.time,
        isTimerRunning:state.isTimerRunning
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        lap:(time)=>{dispatch({type:'ADD_LAP',payload:time})}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LapButton);