import { useState } from 'react'
import TodoInterface from '../../interfaces/TodoInterface';
import TodoForm from '../todo-form/TodoForm'
import Todo from '../todo/Todo';
import { FcTodoList } from 'react-icons/fc';

export default function TodoList() {
    const [todos, setTodos] = useState<TodoInterface[]>([]);


    const addTodo = (todo: TodoInterface) => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        } 

        const newTodos = [todo, ...todos];

        setTodos(newTodos); 
    }

    const updateTodo = (todoId: number, newValue: TodoInterface) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        } 

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }


    const removeTodo = (id: number) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    const completeTodo = (id: number) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

  return (
    <div>
        <div className="header"><FcTodoList className="header-icon"/>ToDo List</div>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

