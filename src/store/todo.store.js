import { Todo } from "../todos/models/todo.model"


const Filters ={

    all:'all',
    Completed: 'Completed',
    Pending: 'Pending'
}




const state={
    todos:[
        new Todo ('Piedra del alma'),
        new Todo ('Piedra del infinito'),
        new Todo ('Piedra del tiempo'),
        new Todo ('Piedra del alma'),
    ],
    filter: Filters.All,
}




const initStore = () =>{

    console.log('InitStore 🥑');

}



export default {
    initStore,
}