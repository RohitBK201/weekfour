import { legacy_createStore as createStore } from "redux";
import { todoReducer } from "./reducer";

const init = {
    todo:[],
}

export const store = createStore(todoReducer,init)

