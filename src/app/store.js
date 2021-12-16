import { createStore,  applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./weatherReducer";

//reducers


//middleware
const middleware = applyMiddleware(thunk);

//store
const store = createStore(reducers, middleware);

export default store;
