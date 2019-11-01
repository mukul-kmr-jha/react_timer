import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.scss";
import TimeBoard from "./component/TimeBoard";
import Laps from "./component/Laps";
import StartPauseButton from "./component/StartPauseButton";
import LapButton from "./component/LapButton";
import ResetButton from "./component/ResetButton";
import Rollbar from "rollbar";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            rollbar: new Rollbar({
                accessToken: 'b0754ce900fe46a39b2d0bbdd895c73c',
                reportLevel: 'error',
                captureUncaught: true,
                captureUnhandledRejections: true,
            })
        };
    }
    componentDidMount() {
        this.state.rollbar.info('Timer App Loaded! ');
        setTimeout(()=>{
            // throw new Error('Just a test error !');
        },10000);

    }

    render(){
        return (
            <div className="App">
                <div className="heading--cont">
                    <h1 className="timer--heading">REACT TIMER</h1>
                </div>

                <div className="timer">
                    <div className="left">
                        <TimeBoard />
                        <div className="btnCont">
                            <StartPauseButton />
                            <LapButton />
                            <ResetButton />
                        </div>
                    </div>
                    <div className="lap">
                        <Laps />
                    </div>
                </div>
                <div className="footer--cont">
                    <p> Built with React and Redux !</p>
                </div>
            </div>
        );
    }

}

export default App;
