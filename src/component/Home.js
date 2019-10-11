import React, {Component} from 'react';
import {connect} from "react-redux";
import {updateTimeService , StopTimeService} from '../timeService';
import StartPauseButton from "./StartPauseButton";
import TimeBoard from "./TimeBoard";
import ResetButton from "./ResetButton";
import LapButton from "./LapButton";

class Home extends Component{
    render(){
        return(
            <div >
                <TimeBoard />
                <div>
                    <StartPauseButton />
                    <LapButton />
                    <ResetButton />
                </div>
            </div>

        )
    }
}
 export default Home;