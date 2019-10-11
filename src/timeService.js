import store from './index';
let timer_ref;
// let time=0;

export const updateTimeService=(time)=>{
    console.log("Inside Service",store.getState());
    timer_ref = setInterval(()=>{
        time +=1;
        store.dispatch({type:'UPDATE',payload:time})
        console.log(time);

    },100);
}


export const StopTimeService=()=>{
   clearInterval(timer_ref);
   store.dispatch({type:'PAUSE',payload:null});
}
