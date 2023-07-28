import React, { useState } from 'react'
import Todoinput from '../TodoInput/Todoinput'
import Todolist from '../TodoList/Todolist'
import { v4 as uuidv4 } from 'uuid';



const Todo = () => {
    let initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const [todos, setTodos] = useState(initialTodos)

    const updateTodo = (newTask) => {
        let newtodos = JSON.parse(localStorage.getItem('todos')) || [];
        newtodos.unshift({ name: newTask, id: uuidv4(), checked: false });
        localStorage.setItem('todos', JSON.stringify(newtodos));

        setTodos(
            newtodos
        )

    }

    const updateCheckBox = (id) => {
        setTodos((prevState) => 
            prevState.map((todo) => {
                return todo.id === id ?
                    { name: todo.name, id: todo.id, checked: !todo.checked } :
                    todo
            })
        )
        console.log(todos)
    }
    const deleteitem=(id)=>{
        // setTodos((prevState) => 
        //     prevState.filter((todo) => {
        //         return todo.id != id 
        //     })
        // )
        let newtodos = JSON.parse(localStorage.getItem('todos')) || [];
        newtodos= newtodos.filter((t)=>{
            return t.id !== id ? true:false;
        })
        console.log(newtodos);
        localStorage.setItem('todos', JSON.stringify(newtodos));

        setTodos(
            newtodos
        )
    }
    const upitem=(id)=>{
        let newtodos = JSON.parse(localStorage.getItem('todos')) || [];
        let a = 0;
        for(let i=0;i<newtodos.length;i++){
            if(newtodos[i].id === id) {a=i;
            break;}
        }
        // console.log(a);
        let obj = newtodos[a-1];
        newtodos[a-1] = newtodos[a];
        newtodos[a] = obj;
        localStorage.setItem('todos', JSON.stringify(newtodos));
        setTodos(newtodos)
    }
    const downitem=(id)=>{
        let newtodos = JSON.parse(localStorage.getItem('todos')) || [];
        let a = 0;
        for(let i=0;i<newtodos.length;i++){
            if(newtodos[i].id === id) {a=i;
            break;}
        }
        // console.log(a);
        let obj = newtodos[a+1];
        newtodos[a+1] = newtodos[a];
        newtodos[a] = obj;
        localStorage.setItem('todos', JSON.stringify(newtodos));
        setTodos(newtodos)
    }
    return (
        <>
            <Todoinput updateTodo={updateTodo} />
            <Todolist todos={todos} updateCheckBox={updateCheckBox} deleteitem={deleteitem} upitem={upitem} downitem={downitem} />
        </>
    )
}

export default Todo