import { createStore } from "redux";
import { usersReducer } from "../Reducer/UsersReducer";

let store = createStore(usersReducer);

export default store;
