export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    case "DOUBLE":
      return state * action.payload;
    case "CLEAR":
      return 0;
    default:
      return state;
  }
};
export default counterReducer;
