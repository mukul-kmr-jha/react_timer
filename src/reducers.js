const initState = {
    isTimerRunning:false,
    time:0,
    laps:[]
}

let timer_ref;

const rootReducer=(state=initState, action)=>{
    switch (action.type) {
        case 'UPDATE' : {

            return{
                ...state,
                time: action.payload,
                isTimerRunning: true
            }

        }
        case 'PAUSE':{
            return{
                ...state,
            isTimerRunning:false
            }
        }
        case 'RESET':{
            return{
                ...state,
                time:0,
                isTimerRunning: false
            }
        }
        case 'ADD_LAP':{
            return {
                ...state,
                laps:[...state.laps, action.payload]
            }
        }
        default :{
            return state;
        }

    }
}
export default rootReducer;