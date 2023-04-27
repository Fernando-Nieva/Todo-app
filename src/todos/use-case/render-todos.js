import { Todo } from "../models/todo.model"
import { createTodoHtml } from "./create-todo-html";





let element;
/**
 * 
 * @param {string} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos=[] )=> {

    if(!element)
    element =document.querySelector(elementId);


    if(!element)throw new Error(`Element ${elementId} not found`);


    //Todo referencia
    element.innerHTML='';




    todos.forEach(todo => {
        element.append(createTodoHtml(todo));



        
    });



}