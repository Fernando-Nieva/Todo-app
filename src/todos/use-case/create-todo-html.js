import { Todo } from "../models/todo.model";



/**
 * 
 * @param {Todo} todo 
 * @returns 
 */
export const createTodoHtml = (todo)=>{

    if(!todo ) throw new Error ('A Todo object is required');

    const html = `<h1>${todo.desciption}</h1>`;

    const liElement =document.createElement('li');
    liElement.innerHTML = html;

    return liElement;

}