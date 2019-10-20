import store from "./index";
let timer_ref = 0;
// let time=0;

export const updateTimeService = time => {
  console.log("Inside Service", store.getState());
  if (!timer_ref) {
    timer_ref = setInterval(() => {
      time += 1;
      store.dispatch({ type: "UPDATE", payload: time });
      // console.log(time);
    }, 100);
  } else {
    console.log("Please Dont Do this!!!");
  }
};

export const StopTimeService = () => {
  clearInterval(timer_ref);
  timer_ref = 0;
  store.dispatch({ type: "PAUSE", payload: null });
};
