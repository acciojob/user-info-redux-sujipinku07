import { createStore } from "redux";
import userReducers from "./userReducers";
const Store = createStore(userReducers);

 export default Store;