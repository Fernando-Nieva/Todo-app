import { Todo } from "../todos/models/todo.model"


const Filters ={

    All:'all',
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
    loadStore();
    console.log('InitStore 🥑');

}
const saveStateToLocalStorage =()=>{
    localStorage.setItem('state',JSON.stringify(state));
}


const loadStore = () => {


    if(!localStorage.getItem('state')) return;
    const {todos = [],filter= Filters.All } = JSON.parse(localStorage.getItem('state'));
    state.todos =todos;
    state.filter=filter;

}



const getTodos = (filter =Filters.All) => {

    switch( filter){
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter(todo => todo.done);


        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid.`);
    }
}

const addTodo = (description) => {
    if (!description)     throw new Error ('description is requiered');

    state.todos.push(new Todo(description));
    saveStateToLocalStorage();


} 

/**
 * 
 * @param {string} todoId 
 */

const toggleTodo = (todoId) => {


    state.todos = state.todos.map (todo =>{
        if(todo.id === todoId){
            todo.done = !todo.done;
        }

        return todo;

    });
    saveStateToLocalStorage();
} 

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();


} 



const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);
    saveStateToLocalStorage();

} 


const setFilter=(newFilter = Filters.All)=>{
    state.filter = new filter;
    saveStateToLocalStorage();


}


const getCurrentFilter = ()=>{

    return state.filter;

}

export default {
initStore,
loadStore,
addTodo,
getTodos,
toggleTodo,
deleteTodo,
deleteCompleted,
setFilter,
getCurrentFilter
}