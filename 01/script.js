let reduxState = {
    post: 0,
    name: "John",
    age: 30,
}
console.log(state);

let prevstate = state;


// const increment = () => {
//     //mutation state ..................
//     // state.count = state.count + 1;
//                      // in this state the value of prevstate === state is true 

//     // not mutation state ..............
//     state = { ...state, count: state.count + 1  };
//                                      // in this state the value of prevstate === state is false 

// } 
// increment();
// console.log(state);
// console.log(prevstate === state);
// console.log("prevstate : ", prevstate);

// setInterval(() => {
//     increment();
// },100)

