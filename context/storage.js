import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  cart: false,
  items: {},
  total: 0,
  error: null
};

const Storage = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Storage;
