export const ADD_TODO = "ADD_TODO"

export const addTodo = (data) =>{

    return{
        type: ADD_TODO,
        payload : data,
    }

} 

export const SORT = "SORT"

export const sortby = (by) =>{


    return{

        type:SORT,
        payload : by,

    }

}