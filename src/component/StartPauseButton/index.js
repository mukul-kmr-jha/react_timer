import React, {Component} from 'react';
import {StopTimeService, updateTimeService} from "../../timeService";
import {connect} from "react-redux";


class StartPauseButton extends Component {

    handleStart=(e)=>{
        if(!this.props.isTimerRunning){
            console.log("Starting Timer");
            updateTimeService(this.props.time);
        }
        else {
            console.log("Pausing Timer");
            StopTimeService();
        }

    }

    render() {
        return(
            <button onClick={this.handleStart} className="btn "  >{this.props.isTimerRunning ? "PAUSE" : "START"}  </button>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        time:state.time,
        isTimerRunning:state.isTimerRunning
    }
}


export default connect(mapStateToProps)(StartPauseButton);