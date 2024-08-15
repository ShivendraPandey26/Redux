let reduxState = {
  post: 0,
  name: "John",
  age: 30,
};
console.log(reduxState);

function reducer(state, action) {
  switch (action.type) {
    case "post/INCREMENT":
      return { ...state, post: state.post + 1 };
    case "post/DECREMENT":
      return { ...state, post: state.post - 1 };
    case "post/INCREMENTby":
      return { ...state, post: state.post + action.payload };
    default:
      return state;
  }
}
reduxState = reducer(reduxState, { type: "post/INCREMENT" });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "post/DECREMENT" });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "post/INCREMENT" });
console.log(reduxState);

reduxState = reducer(reduxState, { type: "hello" });
console.log(reduxState);

console.log(" ");

reduxState = reducer(reduxState, { type: "post/INCREMENTby", payload: 10 });
console.log(reduxState);

// let prevstate = state;
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
