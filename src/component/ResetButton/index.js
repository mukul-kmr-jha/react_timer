import React, {Component} from 'react';
import {StopTimeService, updateTimeService} from "../../timeService";
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
        console.log("ReesetDisabled is ", this.props.reset_dis);
        return(
            // disable at start and at pause(timer holds some value and timeris not running )
            <button onClick={this.handleReset} disabled={this.props.reset_dis} className="btn ">RESET</button>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        time:state.time,
        isTimerRunning:state.isTimerRunning,
        reset_dis:state.reset_dis
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        reset:()=>{dispatch({type:'RESET',payload:null})}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ResetButton);