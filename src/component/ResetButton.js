import React, {Component} from 'react';
import {StopTimeService, updateTimeService} from "../timeService";
import {connect} from "react-redux";


class ResetButton extends Component {

    handleReset=(e)=>{
        if(!this.props.isTimerRunning){
            console.log("Resetting Timer");
            this.props.reset();
        }
        else {
            console.log("Timer is Running Currently!");
        }
    }
    render() {
        return(
            <button onClick={this.handleReset} >RESET</button>
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
        reset:()=>{dispatch({type:'RESET',payload:null})}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ResetButton);