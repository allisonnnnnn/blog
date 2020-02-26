export default (state = [], action) => {
  // object/array/function --> []
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
