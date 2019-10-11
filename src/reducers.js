const initState = {
    isTimerRunning:false,
    time:0,
    laps:[],
    reset_dis:true
}

let timer_ref;
class Actions {
    static UpdateTimerClock = 'UPDATE'
}

const rootReducer=(state=initState, action)=>{
    switch (action.type) {
        case 'UPDATE' : {

            return{
                ...state,
                time: action.payload,
                isTimerRunning: true,
                reset_dis: true
            }

        }
        case 'PAUSE':{
            return{
                ...state,
            isTimerRunning:false,
                reset_dis:false
            }
        }
        case 'RESET':{
            return initState
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