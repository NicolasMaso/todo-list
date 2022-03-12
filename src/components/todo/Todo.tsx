import { useState } from 'react';
import TodoForm from '../todo-form/TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import Edit from '../../interfaces/EditInterface';
import PropsTodoInterface from '../../interfaces/PropsTodoInterface';


export default function Todo(props: PropsTodoInterface) {
    const [edit, setEdit] = useState<Edit>({
        id: null,
        value: ""
    });

    const submitUpdate = (value: string) => {
        props.updateTodo(edit.id, value);

        setEdit({
            id: null,
            value: ""
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

  return <>
    {props.todos.map((todo, index) => (
      <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
          <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
            {todo.text}
          </div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => props.removeTodo(todo.id)} className="delete-icon"/>
                <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} className="edit-icon"/>
            </div>
        </div>
  ))
}</>    
}

