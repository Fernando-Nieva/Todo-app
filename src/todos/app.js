
import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos, renderPending } from './use-case';


const ElementIDs ={
    ClearCompleted: '.clear-completed',
    TodoList:'.todo-list',
    NewTodoImput: '#new-todo-input',
    TodoFilters:'.filtro',
    PendingCountLabel:'#pending-count',

}
/**
 * 
 * @param {String} elementId 
 */


export const App = (elementId)=>{



    const displayTodos =( ) => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList,todos);
        updatePendingCount()
    }
    
    const updatePendingCount =()=>{
        renderPending(ElementIDs.PendingCountLabel);



    }
        //cuando la funcion app ()se llama
        (()=>{

            const app = document.createElement('div');
            app.innerHTML= html;
            document.querySelector(elementId).append(app)
            displayTodos();


        })();






        //referencia HTml
        const newDescriptionInput = document.querySelector(ElementIDs.NewTodoImput);
        const todoListUL = document.querySelector(ElementIDs.TodoList);
        const clearCompletedButton = document.querySelector(ElementIDs.ClearCompleted);
        const filtersLIs =document.querySelectorAll(ElementIDs.TodoFilters);




        //listenersss

        newDescriptionInput.addEventListener ('keyup', (event)=> {
            if (event.keyCode !==13) return;
            if(event.target.value.trim().length===0) return;

            todoStore.addTodo(event.target.value);
            displayTodos();
            event.target.value = '';


        });


            todoListUL.addEventListener('click',(event)=>{
                const element = event.target.closest('[data-id]');
                todoStore.toggleTodo(element.getAttribute('data-id'));


                displayTodos();
            })
                
                
        
            clearCompletedButton.addEventListener('click',(event)=>{
                //const element = event.target.closest('[data-id]');
                todoStore.deleteCompleted();
                //console.log("first");
                displayTodos();

             
        });

            
            todoListUL.addEventListener('click',(event)=>{
                
                if(event.target.closest('.destroy')){
                    const element = event.target.closest('[data-id]');
                    todoStore.deleteTodo(element.getAttribute('data-id'));
                    displayTodos();
                 
                }return;
                   






                      
          



                


                
            })
      
            filtersLIs.forEach(element=>{

                element.addEventListener('click',(element)=>{
                    filtersLIs.forEach(el => el.classList.remove('selected'));
        
                    element.target.classList.add('selected');
                    switch(element.target.text){
                        case'Todos':
                        todoStore.setFilter(Filters.All)
                        break;
                        case'Pendientes':
                        todoStore.setFilter(Filters.Pending)
                        break;
                        case'Completados':
                        todoStore.setFilter(Filters.Completed)
                        break;

                    }
                    displayTodos();
                })
            })
          

}