import { ADD_TODO } from "./action";
import { store } from "./store";

export const todoReducer = (store,{type,payload}) =>

{

    switch(type)
    {
        case ADD_TODO : return{...store,todo : [...store.todo,payload]}
        
        default : return (store)
    }

}