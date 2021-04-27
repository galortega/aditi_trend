const Reducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        cart: action.payload
      };
    case "SET_CART_ITEMS":
      return {
        ...state,
        items: action.payload
      };
    case "SET_CART_TOTAL":
      return {
        ...state,
        total: action.payload
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
