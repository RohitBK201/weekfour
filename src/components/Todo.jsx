import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../REDUX/action";
import { store } from "../REDUX/store";

export const Todo = () =>{

    const todo = useSelector(store=>store.todo)
    const dispatch = useDispatch();

   const [text,setText] = useState("");

   const handleAdd =()=>{

    dispatch(addTodo({

        title : text,
        status : false,

    }))

   };
    
    return(
        <div>
            <input onChange={(e)=>{setText(e.target.value)}} type="text" />
            <button onClick={handleAdd} >Add</button>

            {todo.map((t)=>(
                <div key={t.title}>{t.title}</div>
            ))}
        </div>
    );

}